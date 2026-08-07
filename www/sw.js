const CACHE = 'mellalchem-v36';
const FILES = ['./', './index.html', './manifest.json', './assets/icon.png', './assets/icon-192.png', './assets/icon-512.png', './assets/splash.jpg', './assets/dev-photo.jpg', './assets/B-NAZANIN.TTF', './assets/B_Titr_Bold_0.ttf', './assets/share-template.jpg', './assets/theme-icons/aghaghia-backup.png', './assets/theme-icons/aghaghia-costs.png', './assets/theme-icons/aghaghia-formulas.png', './assets/theme-icons/aghaghia-materials.png', './assets/theme-icons/aghaghia-produce.png', './assets/theme-icons/aghaghia-settings.png', './assets/theme-icons/mavara-backup.png', './assets/theme-icons/mavara-costs.png', './assets/theme-icons/mavara-formulas.png', './assets/theme-icons/mavara-materials.png', './assets/theme-icons/mavara-produce.png', './assets/theme-icons/mavara-settings.png', './assets/theme-icons/perspolis-backup.png', './assets/theme-icons/perspolis-costs.png', './assets/theme-icons/perspolis-formulas.png', './assets/theme-icons/perspolis-materials.png', './assets/theme-icons/perspolis-produce.png', './assets/theme-icons/perspolis-settings.png', './assets/theme-icons/ruhparvar-backup.png', './assets/theme-icons/ruhparvar-costs.png', './assets/theme-icons/ruhparvar-formulas.png', './assets/theme-icons/ruhparvar-materials.png', './assets/theme-icons/ruhparvar-produce.png', './assets/theme-icons/ruhparvar-settings.png', './assets/theme-icons/sepahan-backup.png', './assets/theme-icons/sepahan-costs.png', './assets/theme-icons/sepahan-formulas.png', './assets/theme-icons/sepahan-materials.png', './assets/theme-icons/sepahan-produce.png', './assets/theme-icons/sepahan-settings.png'];

self.addEventListener('install', e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));
  self.skipWaiting();
});
self.addEventListener('activate', e=>{ self.clients.claim(); });
self.addEventListener('fetch', e=>{
  e.respondWith(
    caches.match(e.request).then(res=> res || fetch(e.request).then(fresp=>{
      return caches.open(CACHE).then(c=>{ c.put(e.request, fresp.clone()); return fresp; });
    }).catch(()=> caches.match('./index.html')))
  );
});
