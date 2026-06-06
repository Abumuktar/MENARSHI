# Meenarshi's Gift Gallery

Premium gifts & hampers storefront for **Meenarshi's Gift Gallery** — Abuja, Nigeria.
Founder: Ameenah Dikko Radda · Instagram: [@meenarshisgiftgallery](https://instagram.com/meenarshisgiftgallery)

Built with **Vite + React** + **React Router** + **Tailwind CSS v4**, following the brand
documentation (forest green / dusty rose palette; DM Serif Display + DM Sans + Great Vibes type).

## Getting started

```bash
npm install
npm run dev        # http://localhost:5173
```

Build for production:

```bash
npm run build      # outputs to dist/
npm run preview    # preview the production build locally
```

## Project structure

```
index.html              # app shell + Google Fonts
vite.config.js          # Vite + React + Tailwind plugin, "@" -> ./src alias
public/
  images/               # your real photos + logo (meenarshi.png)
  favicon.svg
src/
  main.jsx              # React entry + BrowserRouter
  App.jsx               # routes + layout (Navbar / Footer / WhatsApp FAB)
  index.css             # Tailwind + brand theme + animations
  lib/data.js           # ALL editable content (products, hampers, config)
  components/           # Navbar, Footer, Logo, cards, forms, Sections, ui
  pages/                # Home, About, Shop, Hampers, Customize, Gallery, Testimonials, Contact, NotFound
```

## Pages / routes

| Route          | Page                                   |
| -------------- | -------------------------------------- |
| `/`            | Homepage (hero, occasions, featured, story, values, reviews, Instagram) |
| `/about`       | Brand story, values, service areas     |
| `/shop`        | Catalogue with occasion filters (`/shop?occasion=birthday`) |
| `/hampers`     | Signature curated hampers & sets       |
| `/customize`   | 3-step process + customization request form |
| `/gallery`     | Masonry gallery of past orders         |
| `/testimonials`| Customer reviews                       |
| `/contact`     | WhatsApp, email enquiry form, map      |

## Before launch — things to update (all in `src/lib/data.js`)

1. **WhatsApp number** — set `site.whatsapp` (international format, no `+`, e.g. `2348012345678`).
2. **Email** — set `site.email`.
3. **Products / hampers** — edit the `products` and `hampers` arrays (pricing is intentionally not shown; orders are enquiry-led via WhatsApp).
4. **Testimonials** — replace placeholders with real reviews.
5. **Images** — drop files in `public/images/` and reference them as `/images/your-file.png`.
   Some product/gallery images still use Unsplash URLs — swap for your own photography.
6. **Business hours** — set `site.hours`.
7. **Contact form** — currently composes an email via the visitor's mail client (`mailto:`).
   For automatic submission collection, wire `src/components/ContactForm.jsx` to Formspree or EmailJS.

## Deploy

Static SPA — host the `dist/` output anywhere (Vercel, Netlify, Cloudflare Pages, etc.).

> SPA routing note: configure the host to rewrite all paths to `index.html`
> (Netlify: a `_redirects` file with `/* /index.html 200`; Vercel: a rewrite to `/`).

## Brand tokens (`src/index.css`)

- Forest Green `#2F4A3A` · Dusty Rose `#C25D72` · Blush `#F7E6E8` · Coral `#EE8595` · Warm White `#FFFAF9`
- Display: DM Serif Display · Body: DM Sans · Script: Great Vibes (used sparingly)
