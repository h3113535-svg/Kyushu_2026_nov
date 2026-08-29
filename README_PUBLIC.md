# Kyushu_2026_nov

Private, mobile-first PWA shell for the 2026/11/21–11/29 Kyushu family autumn trip.

## Architecture baseline
- Static GitHub Pages frontend (`index.html`, `style.css`, `app.js`)
- Firebase Authentication + Realtime Database REST API
- Private trip content root: `trips/kyushu-nov-2026`
- Per-trip browser namespace: `kyushu-nov-2026:*`
- Project-specific CacheStorage prefix: `kyushu-nov-`
- PWA manifest + service worker
- 9-day renderer, Family Day summary card, manual Autumn Watch, decisions, booking/shopping/expense/notes, guide engine, character/easter-egg engine
- Live weather engine: Open-Meteo, 16-day forecast window, 30-minute local cache, offline stale-cache fallback

## Important
The public repo must not contain the private Firebase `content` itinerary payload. Import that payload separately into the protected Realtime Database root.

Artwork in v1.0 is temporary carry-over/placeholder material from the October UI template. Visual replacement is intentionally deferred until after architecture/data validation.
