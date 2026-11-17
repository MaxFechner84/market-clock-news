/* NextBell service worker: works offline, always tries fresh news first. */
var CACHE = "mc-v3";
var SHELL = ["./", "index.html", "week.html", "manifest.webmanifest", "icon.png", "icon-192.png", "icon-512.png"];
self.addEventListener("install", function (e) {
  e.waitUntil(caches.open(CACHE).then(function (c) { return c.addAll(SHELL); }).then(function () { return self.skipWaiting(); }));
});
self.addEventListener("activate", function (e) {
  e.waitUntil(caches.keys().then(function (ks) {
    return Promise.all(ks.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
  }).then(function () { return self.clients.claim(); }));
});
self.addEventListener("fetch", function (e) {
  var req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  /* network first for pages and news, cache as fallback */
  e.respondWith(fetch(req).then(function (res) {
    if (res && res.ok) { var copy = res.clone(); var key = req.url.split("?")[0]; caches.open(CACHE).then(function (c) { c.put(key, copy); }); }
    return res;
  }).catch(function () {
    return caches.match(req.url.split("?")[0]).then(function (r) { return r || caches.match("index.html"); });
  }));
});
self.addEventListener("notificationclick", function (e) {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: "window" }).then(function (cs) {
    if (cs.length) return cs[0].focus();
    return self.clients.openWindow("./");
  }));
});
