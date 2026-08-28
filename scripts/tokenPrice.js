const token = (args && args.token) || 'BNKR';
const map = {
  'BNKR': '0x22af33fe49fd1fa80c7149773dde5890d3c76f3b',
  'PEPE': '0x6982508145454ce325ddbe47a25d4ec3d2311933',
  'LINK': '0x514910771af9ca656af840dff83e8264ecf986ca',
  'ETH': '0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2',
  'BTC': '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
  'UNI': '0x1f9840a85d5af5bf1d1762f925bdaddc4201f984',
  'SOL': '0xd31a59c85ae9d8edefec411d448f90841571b89c',
  'AAVE': '0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9',
  'USDC': '0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48',
  'DOGE': '0xba2ae424d960c26247dd6c32edc70b295c744c43',
};
const addr = map[token.toUpperCase()] || map['BNKR'];
try {
  const data = await http.fetch(`https://api.dexscreener.com/latest/dex/tokens/${addr}`);
  if (data && data.pairs && data.pairs.length > 0) {
    const pair = data.pairs[0];
    return {
      ok: true,
      priceUsd: parseFloat(pair.priceUsd) || 0,
      change24h: (pair.priceChange && typeof pair.priceChange.h24 === 'number') ? pair.priceChange.h24 : null,
      symbol: token
    };
  }
  return { ok: false, error: 'no pairs found' };
} catch (e) {
  return { ok: false, error: String(e) };
}
