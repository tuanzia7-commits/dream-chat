// 这是一个基础的运行脚本，让浏览器认为这是一个 APP (Version: 2026-04-28-v3-FORCED-REFRESH)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('PWA 脚本已激活');
});

self.addEventListener('fetch', (event) => {
  // 保持联网正常运行
  event.respondWith(fetch(event.request));
});
