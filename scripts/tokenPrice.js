const MAP = {
  BNKR: { type: 'dex', address: '0x22af33fe49fd1fa80c7149773dde5890d3c76f3b' },
  ETH: { type: 'cg', id: 'ethereum' },
  BTC: { type: 'cg', id: 'bitcoin' },
  SOL: { type: 'cg', id: 'solana' },
  USDC: { type: 'cg', id: 'usd-coin' },
  DOGE: { type: 'cg', id: 'dogecoin' },
  LINK: { type: 'cg', id: 'chainlink' },
  UNI: { type: 'cg', id: 'uniswap' },
  AAVE: { type: 'cg', id: 'aave' },
  PEPE: { type: 'cg', id: 'pepe' },
};
const key = String((args && args.token) || 'BNKR').toUpperCase();
const t = MAP[key] || MAP.BNKR;
try {
  if (t.type === 'dex') {
    const r = await http.fetch('https://api.dexscreener.com/latest/dex/tokens/' + t.address);
    const pairs = (r && Array.isArray(r.pairs)) ? r.pairs : [];
    const best = pairs.filter(p => p && p.priceUsd).sort((a, b) => (((b.liquidity && b.liquidity.usd) || 0) - ((a.liquidity && a.liquidity.usd) || 0)))[0];
    if (!best) return { ok: false, token: key };
    const ch = best.priceChange && typeof best.priceChange.h24 !== 'undefined' ? Number(best.priceChange.h24) : null;
    return { ok: true, token: key, priceUsd: Number(best.priceUsd), change24h: ch };
  }
  const r = await http.fetch('https://api.coingecko.com/api/v3/simple/price?ids=' + t.id + '&vs_currencies=usd&include_24hr_change=true');
  const d = r && r[t.id];
  if (!d || typeof d.usd !== 'number') return { ok: false, token: key };
  return { ok: true, token: key, priceUsd: d.usd, change24h: typeof d.usd_24h_change === 'number' ? d.usd_24h_change : null };
} catch (e) {
  return { ok: false, token: key, error: String((e && e.message) || e) };
}
