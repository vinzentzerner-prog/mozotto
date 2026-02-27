# Mozotto — Premium Live Risotto & Champagne Event Website

A premium, bilingual (German + English) booking-first website for Mozotto, Switzerland's exclusive live wood-fired risotto and Champagne catering experience.

**Tech Stack:** Next.js 15 (App Router) · TypeScript · Tailwind CSS · shadcn/ui · next-intl

---

## Quick Start

```bash
npm install
npm run dev
# → http://localhost:3000  (auto-redirects to /de)
```

---

## Configuration

### 1. Tally Form (Booking)

Open `content/tally.ts` and replace the placeholder values:

```ts
export const tallyFormId = "YOUR_TALLY_FORM_ID"; // e.g. "mVzKwB"
export const tallyUrl = "https://tally.so/r/YOUR_TALLY_FORM_ID";
```

Get your form ID from [tally.so](https://tally.so) after creating a form.

### 2. Media Assets

Place your files in `/public/media/`:

| File | Usage |
|------|-------|
| `hero.mp4` | Hero video background |
| `hero-poster.jpg` | Hero video poster (shown before video loads) |
| `events.jpg` | Events section image |
| `risotto-closeup.jpg` | Menu section risotto image |
| `champagne-pour.jpg` | Menu section champagne image |
| `market.jpg` | Markets section image |
| `gallery-01.jpg` … `gallery-12.jpg` | Gallery grid (12 images) |

**Recommended specs:**
- Video: H.264 MP4, max 1920×1080, compressed for web (< 10 MB)
- Images: WebP or JPEG, max 2000px wide, optimised

### 3. Contact Info

Update the WhatsApp link in `components/sections/ContactSection.tsx`:
```tsx
href="https://wa.me/41XXXXXXXXX"  // replace with your Swiss number
```

Update email in `app/[locale]/impressum/page.tsx` and the translation files.

### 4. Translation Strings

All UI copy lives in:
- `messages/de.json` — German (default)
- `messages/en.json` — English

---

## Project Structure

```
mozotto/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Fonts, metadata, i18n provider
│   │   ├── page.tsx            # Landing page (all sections)
│   │   ├── booking/page.tsx    # Booking page with Tally embed
│   │   ├── impressum/page.tsx  # Legal notice
│   │   └── privacy/page.tsx    # Privacy policy
│   ├── globals.css             # Theme tokens (HSL CSS vars)
│   ├── layout.tsx              # Root layout
│   └── not-found.tsx
├── components/
│   ├── ui/                     # shadcn/ui primitives
│   ├── sections/               # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── EventsSection.tsx
│   │   ├── PackagesSection.tsx
│   │   ├── MenuSection.tsx
│   │   ├── TestimonialsSection.tsx
│   │   ├── GallerySection.tsx
│   │   ├── FAQSection.tsx
│   │   ├── MarketsSection.tsx
│   │   └── ContactSection.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── TallyEmbed.tsx
├── content/
│   ├── packages.ts             # Package data
│   ├── menu.ts                 # Menu & champagne data
│   ├── faqs.ts                 # FAQ data
│   ├── markets.ts              # Christmas market data
│   └── tally.ts                # ← SET YOUR FORM ID HERE
├── i18n/
│   ├── routing.ts              # Locale config
│   └── request.ts              # next-intl server config
├── messages/
│   ├── de.json                 # German translations
│   └── en.json                 # English translations
├── middleware.ts               # Locale routing middleware
├── public/media/               # ← ADD YOUR ASSETS HERE
└── tailwind.config.ts
```

---

## Running Locally

```bash
# Install dependencies
npm install

# Development server (with Turbopack)
npm run dev

# Production build (validates everything)
npm run build

# Start production server
npm start
```

Default locale: **German** (`/de`). Switch to English at `/en` or via the `EN/DE` toggle in the header.

---

## Deploy to Vercel

### Option A: GitHub Import (Recommended)

1. Push this repo to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your GitHub repository
4. Framework: **Next.js** (auto-detected)
5. Build command: `npm run build` (default)
6. Output directory: `.next` (default)
7. Click **Deploy**

### Option B: Vercel CLI

```bash
npm i -g vercel
vercel
# Follow prompts → auto-deploys
```

### Environment Variables

No environment variables are required. The Tally form ID is configured in `content/tally.ts`.

### Custom Domain

In Vercel dashboard → Project Settings → Domains → Add your domain (e.g. `mozotto.ch`).

---

## Adding Markets / Packages

- **Markets:** Edit `content/markets.ts` + add translation keys in `messages/de.json` and `messages/en.json`
- **Packages:** Edit `content/packages.ts` + add translation keys in both message files
- **Menu items:** Edit `content/menu.ts` + translation keys

---

## License

Private. All rights reserved — Mozotto, Switzerland.
