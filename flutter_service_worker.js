'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d833869727b666a07ff93ecede02fc9b",
"assets/AssetManifest.json": "ca17ff6abc48f3f8ef3e61658160a12c",
"assets/assets/fonts/ClashDisplay-Bold.ttf": "845b81eb8251429424eadff3ad713e4a",
"assets/assets/images/arrow.png": "01eb14a0c27e2ba12d5ab19f73e3063c",
"assets/assets/images/bronze_medal%25201.png": "52fc703147130902cdf8c7af5c481483",
"assets/assets/images/Bulb.png": "3621a7f92ac39bcb34a5a2e249a04a92",
"assets/assets/images/call.png": "8a4cee5fd62ed9fe8ac4a8a031cad33a",
"assets/assets/images/casual.png": "2267534d7e9ee57f7f985b447b8c72d2",
"assets/assets/images/chain.png": "5c24f58f86fd12d675476b2c51a60071",
"assets/assets/images/cup.png": "31002e1a812bbc91e2e4e7c9357e0a44",
"assets/assets/images/designer%2520(1).png": "e6007ed028b133dce7f5724621cd34b9",
"assets/assets/images/designer%2520(2).png": "e9079ae7e9cd34139c6785a24d0b7452",
"assets/assets/images/designer%2520(3).png": "0ee33b6342fcf6582e7af64b17e0d9d8",
"assets/assets/images/Ellipse%25201.png": "c9f7cc4b1e6891fdf6314b229aa58bf3",
"assets/assets/images/facebook.png": "e2147667b77e97bcceba01d23af4e402",
"assets/assets/images/flare_len01.png": "8abe47ee58e3c744b9b2cdf65f1ecf2a",
"assets/assets/images/girlWalk.png": "036e8073689fa006ce4552b97d7abc6d",
"assets/assets/images/gold_medal%25201.png": "123394acd1f2a3897ea8bfb7318836f2",
"assets/assets/images/instagram.png": "c84e16d5647b4c1746822866d6e78adf",
"assets/assets/images/Lens-left.png": "395d6cc57eb8424a3798899522873c3d",
"assets/assets/images/Lens-right.png": "399118f7d9f7ad6944cb13d906342820",
"assets/assets/images/Liberty%2520company.png": "a7204c018fffee54acdd846d805b5331",
"assets/assets/images/Liberty.png": "03e8e6841aa4e839ecd326c3120ae609",
"assets/assets/images/light.png": "af0c58afe8f5036a4d29f36529c7c616",
"assets/assets/images/line.png": "fb7899fd471f9d466abc7e6c715cbc45",
"assets/assets/images/linkedin.png": "d1f54608ea3fdb8d10691fccd5a0c09c",
"assets/assets/images/location.png": "90c0b5096af0dd246b01d5f37feacc4b",
"assets/assets/images/logo.png": "d9eca5c8c6a68d65f211e5c1180ce143",
"assets/assets/images/man.png": "cefa75f2c0e0d31fcf7c1cebaaa8c231",
"assets/assets/images/manLock.png": "8612bf5da94f34a913e9991e5a5194cc",
"assets/assets/images/manWalk.png": "409679e411eb4b615899881b9c9d355e",
"assets/assets/images/mark.png": "0f9fcf21c47324f578fb9c9a74dcb71f",
"assets/assets/images/metrix.png": "24d70b6a8b2f3db86188d362c493d124",
"assets/assets/images/network.png": "012d6d8b5addbcf804e06acb2275a0a2",
"assets/assets/images/Paybox.png": "964add6c5eeaf957fab26bc0e795e743",
"assets/assets/images/Purple-Lens.png": "4492c87e69a379dd28d8efc196d1a1de",
"assets/assets/images/que.png": "882d58d314d7c5fb2b0279a79eedee2b",
"assets/assets/images/que1.png": "b850df576463f8dd81b0f7800f5542b9",
"assets/assets/images/sales.png": "b423e7c4c85dbf70f6f20a58fbcd7d35",
"assets/assets/images/sata%2520gra.png": "876dee188fa8c8ab7ca868f4c95a61a9",
"assets/assets/images/silver_medal%25201.png": "ca0d346f48202de6b8f10b42200b1911",
"assets/assets/images/star%2520pu.png": "2941fd3b3799891c03b41669d8e1e2c3",
"assets/assets/images/star.png": "a86c8725abfd8a07af1bb2fb24ce8914",
"assets/assets/images/star2.png": "3ecd44c486d4e6387e2d4e218e997508",
"assets/assets/images/Straight-Lens.png": "eb5e4b1ff06e438323ede263dd8b85f8",
"assets/assets/images/the%2520big%2520idea%25201.png": "adfe537164518cc65af48e17df079ca5",
"assets/assets/images/Title.png": "12d768b9cd30561c91cc71dcdf19b5f9",
"assets/assets/images/Vector%25204.png": "bb03108581317b7637f6cb4ba1c19ef8",
"assets/assets/images/Vector.png": "8455210c48c769066ecd338f26743d00",
"assets/assets/images/Vizual.png": "9738e7ed499a501387077e8640570ebf",
"assets/assets/images/Winwise.png": "f2708c24ffd15f91a594e440c3ad9b13",
"assets/assets/images/wisper.png": "dbed175289847b6d962d7b1438b26f98",
"assets/assets/images/woman.png": "1cf38778be0520abaa7d728a4b52e5a7",
"assets/assets/images/x.png": "5f5c5bc0e2d7eb4c9a0d3814324e9a52",
"assets/FontManifest.json": "78e79bdcd0f235c0cf36125db8530d16",
"assets/fonts/MaterialIcons-Regular.otf": "36b07e240fda895a37d9044cb6ee8ae4",
"assets/NOTICES": "4a9b4282a478923aeeaad7e4f346291a",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "d810f875bd27a89b51d33ebd9b26d8e7",
"/": "d810f875bd27a89b51d33ebd9b26d8e7",
"main.dart.js": "be08f981096f03cea25a8ca7c94e1a22",
"manifest.json": "1097fdba7ab0a0fd651910d8f406cf31",
"version.json": "b3de88d3f293560845584e8b892b33ff"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
