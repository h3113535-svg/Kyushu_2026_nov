Kyushu Nov PWA v1.5.0

本版重點：
- Hero 移除多餘橢圓裝飾，統一中文字體與標題排版。
- 全站修正多處窄欄位亂斷行。
- 天氣圖在預報範圍外也會以「待預報」視覺顯示；進入 16 日預報後依 Open-Meteo 自動切換晴／陰／雨／雷／雪。
- Autumn Watch 明確改為手動紀錄來源：狀態、最後更新時間、S/A/B 優先級、地圖最近照片與紅葉情報搜尋。
- 新增 DRIVE 卡：顯示當日自駕／包車時間與主要路線。
- D1–D9 主題圖可點擊全螢幕，支援左右切換。
- Booking 卡新增待確認／現場處理／已完成視覺狀態。
- 統一 Cache / asset 版本為 v1.5.0。

Kyushu Nov PWA v1.4.1

修正：和風預設主題下，D1–D9 圖片卡原本誤套 buddy-only-art 而被 display:none 隱藏；v1.4.1 已改成獨立 nov-day-art，並強制 cache bust。

Kyushu Nov PWA v1.4.0

更新重點：
- 套用使用者提供的新版 Day 1–Day 9 主視覺拼貼圖。
- AUTUMN WATCH 改為圖像化狀態貼章（未確認 / 色づき始め / 見頃 / 見頃過ぎ / 不追）。
- App icon / manifest icons 更新為新版楓葉銀杏圓章。
- WA 主題底圖整合新版紙質背景與葉片裝飾。

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

Artwork in v1.1 is temporary carry-over/placeholder material from the October UI template. Visual replacement is intentionally deferred until after architecture/data validation.

## v1.1 architecture hardening
- Added a Japan-time `NEXT UP` card for the actual trip day.
- Firebase Web config is now populated for the shared Kyushu Firebase project while keeping the November RTDB root isolated.
- PWA/cache asset version advanced to 1.1.0.
- Artwork replacement is still intentionally deferred.

## v1.3 visual integration
- WA / 和風秋旅 remains the default November theme.
- Added November-exclusive autumn brand artwork and converted the supplied art assets to WebP for GitHub deployment.
- App icon candidate A is the default November brand mark; candidates B/C are retained as alternatives.
- Main WA Hero uses `nov_hero_main_a.webp`; authentication screen uses `nov_hero_main_b.webp`.
- Added weather-specific WA artwork for sunny, cloudy, rain, thunder/storm and snow, selected from the live forecast code.
- PWA icon derivatives remain PNG (`icon-192.png`, `icon-512.png`) intentionally for broad iOS/PWA compatibility; the supplied icon source candidates are stored as WebP.
- October-style Pompompurin/Usagi artwork remains available only as the temporary Buddy theme and is no longer the November default visual identity.
