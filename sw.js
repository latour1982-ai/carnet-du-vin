/* Carnet du Vin: ホーム画面に追加（インストール）できるようにするための最小限のサービスワーカー。キャッシュはしません。 */
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', e => { e.respondWith(fetch(e.request)); });
