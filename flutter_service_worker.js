'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d10b0437f6f5d69285e682f95bfb9f7e",
"assets/AssetManifest.json": "d61970358ef9960e1f1d2e70d27bbca1",
"assets/assets/fonts/Nunito/Nunito-Italic-VariableFont_wght.ttf": "14e83abff83f855acdf3bfd30da3ad79",
"assets/assets/fonts/Nunito/Nunito-VariableFont_wght.ttf": "ea0ad4c72a135f9a43ec7bb83f2469aa",
"assets/assets/fonts/Nunito/static/Nunito-Black.ttf": "27ee28fd596c0bd4235fa792d0d8b1ce",
"assets/assets/fonts/Nunito/static/Nunito-BlackItalic.ttf": "47e66b00cd98f1925da80dd6b7ff29a1",
"assets/assets/fonts/Nunito/static/Nunito-Bold.ttf": "ba43cdecf9625c0dcec567ba29555e15",
"assets/assets/fonts/Nunito/static/Nunito-BoldItalic.ttf": "dc69781f4856bdb711087d1ae07ca208",
"assets/assets/fonts/Nunito/static/Nunito-ExtraBold.ttf": "5b5a206f5cd32fa496c93925d0caf609",
"assets/assets/fonts/Nunito/static/Nunito-ExtraBoldItalic.ttf": "e01118312e526f062fc8ad8f3c64de0e",
"assets/assets/fonts/Nunito/static/Nunito-ExtraLight.ttf": "ef7ff1b92707646c2e02a39067aab385",
"assets/assets/fonts/Nunito/static/Nunito-ExtraLightItalic.ttf": "f9088a8e7dae2fc4e88975f6e1726c93",
"assets/assets/fonts/Nunito/static/Nunito-Italic.ttf": "fac5c8ffb51e06094affdbb7fff9000e",
"assets/assets/fonts/Nunito/static/Nunito-Light.ttf": "7de99c591b88e33ceda578f9ee140263",
"assets/assets/fonts/Nunito/static/Nunito-LightItalic.ttf": "cdf25a6c9cbb6def64afcc30d3e511b9",
"assets/assets/fonts/Nunito/static/Nunito-Medium.ttf": "d26cecc95cdc8327b337357e6c5c1f5b",
"assets/assets/fonts/Nunito/static/Nunito-MediumItalic.ttf": "bd282ec988480f875b2f7cb0465ff7fa",
"assets/assets/fonts/Nunito/static/Nunito-Regular.ttf": "b83ce9c59c73ade26bb7871143fd76bb",
"assets/assets/fonts/Nunito/static/Nunito-SemiBold.ttf": "38257ec36f55676f98fcdf1264adb69d",
"assets/assets/fonts/Nunito/static/Nunito-SemiBoldItalic.ttf": "4c2772c15392fbfdb077342b7851f66c",
"assets/assets/images/behavior01.png": "1e53f2b0b17a7f3ab3261321db29f643",
"assets/assets/images/behavior02.png": "19bee5124eebf030c61a39064f030495",
"assets/assets/images/location/location.png": "69b3ba8b0fbe7a3bd9267171e6a42c86",
"assets/assets/images/location/map_world.png": "a3dff246d77211de05dd6a598ee0b094",
"assets/assets/images/logo/appstore.png": "55deb5a225ec145ec56541df8a51f6c9",
"assets/assets/images/logo/googleplay.png": "211f37e477404089cb5651e4557a06cf",
"assets/assets/images/logo/little.png": "974bb4385c10f6c7ed2f1115044ee09b",
"assets/assets/images/logo/movil-app.png": "2af3bf70f6e595565df98a7b8c3c569f",
"assets/assets/images/staff/profile-circle.png": "262c399cc6ce2a8f2becc8b3a00f2804",
"assets/FontManifest.json": "a54c4e6cd5177365feb9e8f5c69be408",
"assets/fonts/MaterialIcons-Regular.otf": "32fce58e2acb9c420eab0fe7b828b761",
"assets/NOTICES": "4c9ae7a7dfc7aab6f63204694cff40fe",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "f25e8e701660fb45e2a81ff3f43c6d5c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "a5d7457fda15b7622c14f432ba63039a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "b72c617acdf2227c8b1413215f620711",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "757f33cf07178f986e73b03f8c195bd6",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "9aa5638cec1bb0c4c3ee23b826c20df4",
"/": "9aa5638cec1bb0c4c3ee23b826c20df4",
"main.dart.js": "9144fb64afa1e4bbf0d554b699b2d8ba",
"manifest.json": "cb0627c978f472078e520fc6b8e32ced",
"version.json": "42759fed2bee5e4374cc5550175126b4"};
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
