self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});

// fetch handler（PWA要件で見られることがあるので定義しつつ、基本は素通し）
self.addEventListener("fetch", (event) => {
  // 何もしない＝ブラウザ標準のHTTPキャッシュ挙動に任せる
});