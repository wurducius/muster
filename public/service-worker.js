let CACHE_NAME = "cache",
  CACHE_VERSION = "v1",
  cacheId = `${CACHE_NAME}-${CACHE_VERSION}`,
  urlsToCache = ["index.html"]

self.addEventListener("install", (s) => {
  s.waitUntil(caches.open(cacheId).then((s) => Promise.all(urlsToCache.map((e) => s.add(e)))))
})
