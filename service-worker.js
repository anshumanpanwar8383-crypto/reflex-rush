self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open("reflex-rush-v1").then((cache) =>
      cache.addAll([
        "./",
        "./index.html",
        "./score.html",
        "./style.css",
        "./script.js",
        "./manifest.json",
        "./icon-192.png",
        "./icon-512.png",
      ])
    )
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(caches.match(e.request).then((r) => r || fetch(e.request)));
});
