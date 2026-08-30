const CACHE_PREFIX = "kyushu-nov-";
const CACHE = "kyushu-nov-v1.9.11";
const SHELL = [
  "./","./index.html","./style.css?v=1911","./app.js?v=198",
  "./manifest.json","./firebase-config.js?v=198",
  "./icon-192.png","./icon-512.png","./icon-maskable-512.png",
  "./nov_loading_scene.webp?v=160",
  "./nov_hero_main_a.webp?v=160",
  "./wa-paper-texture.webp?v=160","./wa-leaf-scatter.webp?v=160"
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
        if(response && response.ok){
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(event.request, copy));
        }
        return response;
      })
      .catch(() => caches.match(event.request,{ignoreSearch:true}))
  );
});
