# BANKR Tarot

🔮 **A cute daily on-chain tarot reader on Bankr.**

Pulls a three-card spread seeded deterministically from your wallet address and today's date — your day's luck, your trade strategy, and the token that matches your cosmic energy.

Live on Bankr: [bankr-tarot](https://bankr.bot/u/0x2ca0ef05ec3383944f40c4ac2e9346c4fb441e31/apps/bankr-tarot)

---

## ✨ Features

- **Daily Deterministic Spread**: Three cards (Day's Luck, Trade Strategy, Token Energy) seeded fresh each day from `wallet + YYYY-MM-DD`.
- **Illustrated Bankr-Themed Deck**: All 20 major arcana have hand-drawn inline-SVG scenes with Bankr-native symbolism — the Emperor's throne sits on a green candle chart, the Hermit's lantern is a glowing $BNKR star, the Magician's wand is a green candle, the High Priestess has a live price-feed eye behind her veil, the Moon's towers are validator nodes, and the World settles on a $BNKR coin.
- **$BNKR Coin Motif**: Every card carries a $BNKR coin worked into the scene (the Fool flips one mid-leap, the Magician has one on his table, the Empress holds one, the Wheel is built around one).
- **Custom Card Back**: A Bankr eye emblem inside a double ring with four stars.
- **Live Token Oracle**: The third card displays real-time price & 24h change from DexScreener / CoinGecko via server-side script (`tokenPrice`).
- **Bilingual (English / 日本語)**: Instant one-click toggle between English and Japanese tarot interpretations.
- **Social Sharing**: Share your daily card spread directly to 𝕏 / Twitter with custom card emoji and labels.
- **Direct Agent Consultation**: One-click "Consult Bankr" button to jump into Bankr chat with a pre-filled prompt analyzing your daily token.

---

## 🗂 Project Structure

```
├── index.html            # Standalone sandboxed iframe app UI
├── manifest.json         # Bankr App manifest configuration
├── scripts/
│   └── tokenPrice.js     # Public server-side script fetching token prices
└── README.md             # Documentation
```

---

## 🎨 Art Notes

Art is generated at runtime as inline SVG (no external assets, no image URLs), so cards stay crisp at any size and load instantly inside the sandboxed iframe. Each illustration uses a `0 0 100 130` viewBox and scales to fill the card frame.

Shared primitives in `index.html`:

- `coin(cx, cy, r, opacity)` — the $BNKR coin motif
- `eye(cx, cy, w, opacity)` — the Bankr eye emblem
- `star(cx, cy, r, opacity)` — eight-point arcana star
- `art(inner)` — wraps a scene in the card SVG frame
- `backEmblem()` — the card back

---

## ⚙️ Manifest & Permissions

- **Permissions**: `fetch:http`
- **Public Script**: `tokenPrice` (DexScreener / CoinGecko price lookup)
- **Frontend Identity**: `owner`
