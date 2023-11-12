'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "3e8de6114208e8cbf0156f5134d5f58c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "c1497bc41ef34702278c11c44646c678",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2711eaeb780f21e8006124db4e0d1455",
".git/logs/refs/heads/master": "1682b9306791d242fd6080e092c57863",
".git/logs/refs/remotes/origin/master": "5622e99a4aeb47839d370312362416e7",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/08/ec228a768a2b307c5bff8b24e8d85d9449a4f2": "7df8ba1612a59788d72550b95a994857",
".git/objects/09/6b090dd5f3e0ea0ccc5937c888183c32dc8f83": "3ce8450a3d177b9705a34508bac07514",
".git/objects/0a/00f63fe98df5edcbdf872cf7e686e082a0cc6c": "c81acb49382ada798f0efa0f16eeaa35",
".git/objects/0b/db2795e51c26f0d39f40e950c08b55de9c2b7f": "55b57e2a12bbd5022fd79c10c23cff9e",
".git/objects/0c/b4efae9b3472a80f5a03f8d65e00a94136facb": "f257afb47e0ebb2f4825791b4c2a3774",
".git/objects/0d/d68f360843dd0e01085e0a0bcddcf373b557f8": "e140a4b707e03c183f98e00cefdfc064",
".git/objects/13/26a7dcf5f3b22e69b0d996e99dae800e71fc68": "c135169e56efcadbd51b3b9eba33750f",
".git/objects/14/11e0713adc2541632518f6afd95277787d75ce": "facb73d44be9d176bd5cf83e496787da",
".git/objects/17/5b96f41048ee497bcde2678d0021f5c5c89adf": "2a1a7c6cb6d3e39b7a95d114f8790120",
".git/objects/1a/a146e3511571833ba7f0bedd09c2868559c6c9": "0b666aeaa05641e430ba0403d34be2d3",
".git/objects/1d/282fbdbb985aa77779d4be6924f70cbb812d13": "ea4a1025a049c7de402183b7ff18c4ca",
".git/objects/1f/98855e5da522cafd07cdd440eae381e99cc850": "432f064d01a35622361afe069d70f1b6",
".git/objects/20/37f4a783f84a94a13e271a07b63c18b4957b73": "f606e1f2bc9d6c1d15175bbb06666a70",
".git/objects/2a/396d4a5aa7ba78f7844a7eee0e8612e05e0635": "ab6ef2f35712a33d2ac4e9255d1602f3",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/32/dacaa60d9fb2ff3cd75790687f94b31600918b": "a5303f04fa709fcd7f08d25fe74fc400",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/3b/4f89d25a0200fd374246bedb36bc3cf66298ff": "7eae369c10d05ef5ac7f5ba3b9b11d1a",
".git/objects/3b/f5605179ca14079eeb5b3b831d29b5b8d0db05": "cf7b5098cf83edfb08d25d4068e4f9b9",
".git/objects/45/9bde1d19ff17ac69bdf4c895531b5b6fa54ee3": "ea95f394936d185d02a6bcb1b2619f07",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/4d/d45bcbc8b7bc033564f070771f6988e9338a5b": "c2b9205501b12817e7d972f475df39c6",
".git/objects/4e/303fedfd00c90e0e12a2d72813ccd4eb7b7497": "1fb7daaf4c08a37220cff51a0b61f7c0",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/57/34973124e2d383fce70dee18df78adaf91f04d": "edc2b0a0fa67bd3ff9dfe601bf99007a",
".git/objects/60/063eab1b59593bf7478027ec73a0cf9960abb5": "94bf4d7048c89fa40b6c8e0f7143e408",
".git/objects/6a/4c99ff95e35b18ff6db89926e9d16b59b88654": "e41ecc2d4fc5b4897fb876b1d8a62f1b",
".git/objects/6f/ec09572352273c88403188071464185c563bca": "fe7219e91ef9b109ac9905f400142f78",
".git/objects/71/1765e6e6bfaecbcd422fe8b819b685273b8a80": "0f4aa266574799ad6b7b8290b0648f20",
".git/objects/77/269755216affac8b99e11685adaf190dd28f90": "91ad020c5ccf76075c425ee54cad94e9",
".git/objects/7a/9294fe6c07119cdafdd5b39e9398749a43bfe8": "36298c93ef671ffb920af23c93bf7c53",
".git/objects/7d/5e56a34d1b94891f26f6c1a654efcf74973eee": "316425b90ffb8d774f88a3b98fa2a8a7",
".git/objects/81/d557c5b26d7ddbfe53a6b275685e264a01b496": "161ea918a7add586c453f22e3d1d4316",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/6134dcfa3c784be09217fe57bf3aac9f059bf2": "5f0760a554ef042e2622fa5103ec4b15",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8a/d41123112dcc05e645c65693277074ac106233": "3de645de309caa9346a728f03e403fdd",
".git/objects/94/11bfbe9801bdde3c7e12fe0af069ad39df5eb0": "2c4aaef84a08f12548d4cf6c36127181",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/96/8e78b9c60b66dd9291782ff7dd2865b4fbd2b2": "1b2a2956972fe2b9c5698a506ee9dec2",
".git/objects/9f/027bf217aab2c6d7f3021290c1ef428dbfa278": "9fb0f6683680f1c399bce56a24aca36f",
".git/objects/a3/003ea0c4e58c6a85a14991b61b3cf1366020ef": "e6c7d1d83e841e131e0d06011b21a9b2",
".git/objects/a4/8bf2f301287c61eb7e10a172cd7c31584048e4": "df76191f80de97832ab9af9e0f149c24",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/5e3de77cf5ab965b4d5ec2493ff55f08d44a4e": "472a904e9801413796a37199c0e08ef6",
".git/objects/b4/65e5a22bdac83e0a70c63421f2fe72a9e22460": "9f188a102b2ca8652af7556408f9f227",
".git/objects/b4/ba5a1fd800a114f44478ccbba94225e6e07564": "5d10f6b9691f0fb940260270f6199cda",
".git/objects/b7/3a272e7248f83bf26670031cb91e0b76b385b9": "cf40fcca83560fcfb4d8bc9569a71a21",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/17c24c17f2bb176ec0829d045b1b4700df5d88": "70f58ae6a2de9ab530ab7d846a220cf7",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/90b1638ee7183b5f3210ab8f366c956baf1f58": "75fbc2d5b259d43253d453e3c116bf9e",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/f474f151a2bac40c0afda821e96b321c73a4d2": "dede80d420a7945bd44a2427a4bcd192",
".git/objects/bf/fce10eb76bf578017a29c25091ffefed90281f": "50d465431c13af1e858173e9c91f8fb8",
".git/objects/c4/7d36c6b11cc8c7fd20a6f2bbb0894a6ff5cc74": "5224ce6023fcbc64742846de3555ec1d",
".git/objects/ce/4a7ea9eff5c3831ece6cad2037fa6337f855c6": "09be90e02c9e65f427ec22a2e26536e5",
".git/objects/d2/0e95f7bc901785c3a42f350feb4403dd329142": "559137af153fca590fdc48efc2c5d188",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d9/eabf95ef4b8ad414b5228f8e823a4068b16586": "96b68e67217904523e65a33ace0227b7",
".git/objects/db/f748904c26cdc6eec14d5cf104a8cc665a0d86": "36caef474872c34f3d2fda8b6ecad43f",
".git/objects/dd/2b24df3efe99ccfbd8db5535eed5ee4d7ce7a8": "a99135ceb24e3c83e9ed1041e7968086",
".git/objects/df/84ddfc6dd95b7cd72e94b6fc8fcd4f0a588a43": "a2c932fea6a8d44195338f345ce4c664",
".git/objects/e0/1d88d9eaef3c143c6a395129e06abf26a645d0": "5aaf885dea2b3016c7b577dff88ddb33",
".git/objects/e2/4c1d61a49f7d9717226f72faad2e4b37e8cc60": "477c07954e71ac7550effda5c4f1c0c6",
".git/objects/e3/7d4c55686996e91e43593d9368fe2c94925d2e": "750d630444ce5fb01f9f4eef216ac597",
".git/objects/e4/7c87563e6b03b472779638c443617e478c3e67": "75b0d725c0b5127b2abdb6e9d9ed9a54",
".git/objects/e6/4c0fef6b20de629b2a1d445521eece99df25c5": "2c550a844367c1e242db7ffb653b5973",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/eccf420ef65de34c56ed94e537d1a05ea76d1e": "b8c9051461b2fd4d181dc6464f82e925",
".git/objects/f1/0a07db7cc295bafe4e9a0ceea8417433ecbb20": "12a7bd69cae2b3a46f4545771c01d159",
".git/objects/f3/b96a4b70a88c4d287fd47877bc99b7364f711c": "31ea7f27c49f728f3eb9ef62d62ffa8f",
".git/objects/f4/ab1149644bd5351ee3665e7154e44095e32633": "726d63176e74e8e87bd644d35fd4696a",
".git/objects/fa/81d0cc454e3cb76ad2b16e97d09d6e390c48ba": "9190dbcf22d3f0b88a877e19fbdd02ae",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/refs/heads/master": "58417a3030a77acc39a56015072f799e",
".git/refs/remotes/origin/master": "58417a3030a77acc39a56015072f799e",
"assets/AssetManifest.bin": "d10b0437f6f5d69285e682f95bfb9f7e",
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
"index.html": "e0807aa956b077546330fe9520c20e68",
"/": "e0807aa956b077546330fe9520c20e68",
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
