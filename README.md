# Ravi Prakash Weds Jyoti Singh — Wedding Invitation Website

A premium, mobile-first Indian wedding invitation website built with React + Vite.

---

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open http://localhost:5173/bholu-bhaiya-wedding/
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── CeremonyCard.jsx / .css     — Individual ceremony card (list view)
│   ├── Countdown.jsx / .css        — Live countdown timer
│   ├── FloatingPetals.jsx / .css   — Animated rose petals
│   ├── MusicPlayer.jsx / .css      — Background music toggle
│   ├── SiteNavigation.jsx / .css   — Sticky nav with hamburger menu
│   └── WhatsAppShare.jsx / .css    — WhatsApp share button
│
├── pages/
│   ├── WelcomePage.jsx / .css      — Cover page with curtain animation
│   ├── InvitationPage.jsx / .css   — Main wedding invitation
│   ├── CeremonyList.jsx / .css     — 4-ceremony card grid
│   ├── CeremonyDetail.jsx / .css   — Individual ceremony detail pages
│   └── BlessingsPage.jsx / .css    — Final blessings & farewell
│
├── data/
│   └── ceremonies.js               — ⭐ ALL wedding content lives here
│
└── styles/
    └── globals.css                 — Design tokens, utilities, animations
```

---

## ✏️ Editing Content

**All wedding details are in one place:**

```
src/data/ceremonies.js
```

Edit this file to update:
- Wedding date and time
- Ceremony names, dates, times, descriptions
- Venue name and address (currently: `[VENUE NAME]`, `[VENUE ADDRESS]`)
- Google Maps link
- Family names

### Changing Background Images
In `src/pages/CeremonyDetail.jsx`, replace the Unsplash URLs in `DETAIL_IMAGES`:
```js
const DETAIL_IMAGES = {
  tilak:  'your-own-image-url.jpg',
  haldi:  'your-own-image-url.jpg',
  baraat: 'your-own-image-url.jpg',
  vidai:  'your-own-image-url.jpg',
};
```

### Replacing the Couple Photo
In `src/pages/InvitationPage.jsx`, replace the photo placeholder div with an `<img>` tag:
```jsx
<div className="couple-photo-frame">
  <img src="/your-photo.jpg" alt="Ravi and Jyoti" />
</div>
```

### Adding Background Music
In `src/components/MusicPlayer.jsx`, change `AUDIO_SRC`:
```js
// Option 1: Place file in /public/audio/
const AUDIO_SRC = '/bholu-bhaiya-wedding/audio/wedding-music.mp3';

// Option 2: External URL
const AUDIO_SRC = 'https://your-cdn.com/wedding-music.mp3';
```

---

## 🌐 Deployment

### GitHub Pages

1. Create a GitHub repository named `bholu-bhaiya-wedding`
2. Push all files to the `main` branch
3. Run:
   ```bash
   npm run build
   ```
4. Deploy the `dist/` folder to GitHub Pages.

   **Using gh-pages package:**
   ```bash
   npm install --save-dev gh-pages
   # Add to package.json scripts:
   #   "deploy": "gh-pages -d dist"
   npm run deploy
   ```

5. In GitHub repository Settings → Pages → Source: `gh-pages` branch

**Important:** The `vite.config.js` has `base: '/bholu-bhaiya-wedding/'`. If your repo has a different name, update this.

### Vercel (Recommended — Easiest)

1. Push to GitHub
2. Import project on [vercel.com](https://vercel.com)
3. Set Framework: **Vite**
4. Change `base` in `vite.config.js` to `'/'`
5. Deploy — Vercel handles everything automatically

---

## 📱 Mobile Responsiveness Checklist

- [ ] 320px — no horizontal overflow, text readable
- [ ] 360px — ceremony cards stack vertically
- [ ] 375px (iPhone SE) — invitation panel fits on screen
- [ ] 390px (iPhone 14) — all CTAs easily tappable
- [ ] 414px — countdown boxes display inline
- [ ] 768px (iPad) — 2×2 ceremony card grid
- [ ] 1024px (laptop) — full navigation visible
- [ ] 1440px — max-width content centered, background decorative

---

## 🎨 Design System

Colors are defined as CSS variables in `src/styles/globals.css`:
```css
--maroon: #6B0F1A
--gold:   #D4AF37
--cream:  #FDF6E3
--ivory:  #FFFFF0
```

Fonts:
- **Great Vibes** — couple names (cursive script)
- **Playfair Display** — headings, card names
- **Cormorant Garamond** — body text, descriptions
- **Lato** — UI elements, labels

---

## 📞 Support

Built with ❤️ for the wedding of **Ravi Prakash & Jyoti Singh** on **21 November 2026**.
