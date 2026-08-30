const CACHE_PREFIX = "kyushu-nov-";
const CACHE = "kyushu-nov-v1.8.0";
const SHELL = [
  "./","./index.html","./style.css?v=180","./app.js?v=180",
  "./manifest.json","./firebase-config.js?v=180","./icon-192.png","./icon-512.png","./icon-maskable-512.png",
  "./nov_app_icon_a.webp?v=160","./nov_app_icon_b.webp?v=160","./nov_app_icon_c.webp?v=160",
  "./nov_hero_main_a.webp?v=160","./nov_hero_main_b.webp?v=160",
  "./nov_weather_sunny.webp?v=160","./nov_weather_cloudy.webp?v=160","./nov_weather_rainy.webp?v=160","./nov_weather_storm.webp?v=160","./nov_weather_snow.webp?v=160",
  "./hero-cover-v51.webp?v=510",
  "./buddy_hero.png","./buddy_celebrate.png","./buddy_chill.png","./buddy_eat.png","./buddy_success.png",
  "./egg-sendoff-v539.png","./egg-cry-v539.png","./egg-home-sleep-v539.png","./duck_gang.png","./seal_gang.png",
  "./purin_peek_edge.png","./purin_walk.png","./usagi_peek.png","./usagi_dash.png","./usagi_success.png","./weather-rain-usagi-v47.webp",
  "./weather-sunny-usagi-v536.webp","./weather-teruteru-usagi-v536.webp","./weather-cloudy-usagi-v536.webp","./weather-thunder-usagi-v536.webp","./weather-snow-usagi-v536.webp",
  "./travel_shopping.png","./travel_ticket.png",
  "./ui-cloud.webp","./ui-coffee.webp","./ui-suitcase.webp","./ui-purin-tip.webp",
  "./mini-purin-clap.webp","./mini-purin-hero.webp","./mini-purin-lie.webp","./mini-purin-surprise.webp",
  "./mini-usagi-point.webp","./mini-usagi-excited.webp","./mini-usagi-success.webp","./mini-usagi-sticker.webp"
,
  "./day-scene-v52-01.webp?v=550",
  "./day-scene-v52-02.webp?v=550",
  "./day-scene-v52-03.webp?v=550",
  "./day-scene-v52-04.webp?v=550",
  "./day-scene-v52-05.webp?v=550",
  "./day-scene-v52-06.webp?v=550",
  "./day-scene-v52-07.webp?v=550",
  "./day-scene-v52-08.webp?v=550",
  "./day-scene-v52-09.webp?v=550",
  "./weather-rain-usagi-v47.webp?v=470",
  "./weather-sunny-usagi-v536.webp?v=536","./weather-teruteru-usagi-v536.webp?v=536","./weather-cloudy-usagi-v536.webp?v=536","./weather-thunder-usagi-v536.webp?v=536","./weather-snow-usagi-v536.webp?v=536",
  "./booking-check-purin.webp?v=460",
  "./booking-dash-usagi.webp?v=460",
  "./hotel-return-duo.webp?v=460",
  "./autumn-status-unknown.webp?v=140","./autumn-status-coloring.webp?v=140","./autumn-status-peak.webp?v=140","./autumn-status-past.webp?v=140","./autumn-status-skip.webp?v=140",
  "./wa-paper-texture.webp?v=160","./wa-leaf-scatter.webp?v=160",
  "./nov_decision_d4_chill.webp?v=160",
  "./nov_decision_d4_ropeway.webp?v=160",
  "./nov_decision_d5_autumn.webp?v=160",
  "./nov_decision_d5_chill.webp?v=160",
  "./nov_decision_d7_crater_open.webp?v=160",
  "./nov_decision_d7_museum.webp?v=160",
  "./nov_empty_autumnwatch.webp?v=160",
  "./nov_empty_expense.webp?v=160",
  "./nov_empty_notes.webp?v=160",
  "./nov_empty_shopping.webp?v=160",
  "./nov_loading_scene.webp?v=160",
  "./day-scene-zh-v17-01.webp?v=170",
  "./day-scene-zh-v17-02.webp?v=170",
  "./day-scene-zh-v17-03.webp?v=170",
  "./day-scene-zh-v17-04.webp?v=170",
  "./day-scene-zh-v17-05.webp?v=170",
  "./day-scene-zh-v17-06.webp?v=170",
  "./day-scene-zh-v17-07.webp?v=170",
  "./day-scene-zh-v17-08.webp?v=170",
  "./day-scene-zh-v17-09.webp?v=170",
  "./chapter-v18-d1-3.webp?v=180",
  "./chapter-v18-d4-6.webp?v=180",
  "./chapter-v18-d7-9.webp?v=180"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k.startsWith(CACHE_PREFIX) && k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate") {
    event.respondWith(
      fetch(event.request, {cache:"no-store"})
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put("./index.html", copy));
          return response;
        })
        .catch(() => caches.match("./index.html"))
    );
    return;
  }

  event.respondWith(
    fetch(event.request, {cache:"no-store"})
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request,{ignoreSearch:true}))
  );
});
