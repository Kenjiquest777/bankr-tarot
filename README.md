# BANKR Tarot

🔮 **A cute daily on-chain tarot reader on Bankr.**

Pulls a three-card spread seeded deterministically from your wallet address and today's date — your day's luck, your trade strategy, and the token that matches your cosmic energy.

Live on Bankr: [bankr-tarot](https://bankr.bot/u/0x2ca0ef05ec3383944f40c4ac2e9346c4fb441e31/apps/bankr-tarot)

---

## ✨ Features

- **Daily Deterministic Spread**: Three cards (Day's Luck, Trade Strategy, Token Energy) seeded fresh each day from `wallet + YYYY-MM-DD`.
- **Live Token Oracle**: The third card displays real-time price & 24h change from DexScreener via server-side script (`tokenPrice`).
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

## ⚙️ Manifest & Permissions

- **Permissions**: `fetch:http`
- **Public Script**: `tokenPrice` (DexScreener price lookup)
- **Frontend Identity**: `owner`
