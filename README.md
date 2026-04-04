# 🏥 Klinik unter Belagerung / House of God Tower Defense

A darkly humorous hospital Tower Defense game. Available in German and English.

Defend the hospital corridor from an endless stream of Dauerpatienten, paperwork, administration, and worse — using the hospital's own equipment turned against the tide.

## 🎮 Play Online

**[Play now →](https://YOURUSERNAME.github.io/klinik-td/)**

## 🚀 Deploy to GitHub Pages (5 minutes)

### Step 1: Create a GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `klinik-td`
3. Set to **Public**
4. **Do NOT** initialize with README (we'll push our own)
5. Click **Create repository**

### Step 2: Push the Files

Open your terminal and run:

```bash
cd klinik-td
git init
git add .
git commit -m "Initial release"
git branch -M main
git remote add origin https://github.com/YOURUSERNAME/klinik-td.git
git push -u origin main
```

Replace `YOURUSERNAME` with your GitHub username.

### Step 3: Enable GitHub Pages

1. Go to your repo → **Settings** → **Pages** (left sidebar)
2. Under "Source", select **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**
5. Wait 1-2 minutes, then your game is live at:

```
https://YOURUSERNAME.github.io/klinik-td/
```

### Step 4 (Optional): Custom Domain

If you want to use a custom domain like `game.dotbase.org`:

1. In Settings → Pages, enter your custom domain
2. Add a CNAME DNS record pointing to `YOURUSERNAME.github.io`
3. Create a file called `CNAME` in the repo root containing just: `game.dotbase.org`

## 📱 PWA / Install as App

The game works as a Progressive Web App. On mobile:
- **iOS**: Open in Safari → Share → "Add to Home Screen"
- **Android**: Chrome will show an "Install" banner, or tap ⋮ → "Install app"

Once installed, it works offline and launches fullscreen like a native app.

## 📁 Files

```
klinik-td/
├── index.html      ← The complete game (single file)
├── manifest.json   ← PWA manifest
├── sw.js           ← Service worker (offline support)
├── icon-192.png    ← App icon (small)
├── icon-512.png    ← App icon (large)
└── README.md       ← This file
```

## 🎯 Game Features

- **12 towers** with unique mechanics, unlocked progressively
- **16 case types** with special abilities (resurge, split, shield, copy, jam, regen)
- **Combo system** — adjacent towers trigger synergy effects
- **Mutator system** — shift modifiers including tower-disabling crises
- **Maintenance economy** — tower upkeep drains your budget each shift
- **Randomized maps** — different corridor layout each game
- **Shareable scorecard** — PNG generation with Web Share API
- **Bilingual** — full German and English with language switcher
- **PWA** — installable, works offline

---

*"Die beste Medizin ist, so wenig wie möglich zu tun." — Gesetz XIII*
