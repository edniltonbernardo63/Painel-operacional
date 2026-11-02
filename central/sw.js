/* Service worker da Central: guarda só a "casca" (página, ícones, foto) para abrir rápido e funcionar sem sinal.
   Sempre tenta a rede primeiro, então uma versão nova publicada aparece na próxima abertura.
   Os painéis (Google Apps Script) nunca passam por aqui: vêm direto da rede. */
const CACHE = 'central-142-v1';
const CASCA = ['./', './index.html', './manifest.webmanifest', './hero.jpg', './favicon.png',
  './icon-192.png', './icon-512.png', './apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CASCA)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(ks => Promise.all(ks.filter(k => k.startsWith('central-142-') && k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== self.location.origin) return; // Google e fontes: direto da rede
  // A página sempre é guardada sem o "?c=..." (os links ficam no aparelho, não no cache por endereço).
  const chave = e.request.mode === 'navigate' ? './' : e.request;
  e.respondWith(fetch(e.request)
    .then(r => { if (r.ok) { const c = r.clone(); caches.open(CACHE).then(x => x.put(chave, c)); } return r; })
    .catch(() => caches.match(chave).then(r => r || caches.match('./'))));
});
