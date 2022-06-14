'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c7ebe1b77f5462f09cca41f5460ec2db",
".git/config": "a731e179a0e5dd75c1865dfd03b1380d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "8f1f555a743a9c46c104970c4c4fef54",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
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
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "53db982cfd0fdd6ff623688c34a34b1c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5708357b9946ba383eb604183c8fa1ba",
".git/logs/refs/heads/main": "5708357b9946ba383eb604183c8fa1ba",
".git/logs/refs/remotes/origin/HEAD": "1e5de33722472a35a1fb5f30f9b43161",
".git/logs/refs/remotes/origin/main": "010d3aa2866166c4fe97b5ec8cbc32c0",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/10/1511a69216f487c3e8b1f50f3e789915329965": "b5558cd2467a1c768d2383ba0894c829",
".git/objects/15/8eea9df5399f6988a7744b55eb1460a6b8665b": "87c1f893d409131d448a1b8ccec24978",
".git/objects/18/4f81d8b6ffaacadce87806bc100dc39295f5ed": "4de9200dec04a1faf71535a5bc5da3c2",
".git/objects/24/3bfd0e78c2a44abb41f4ea2ad5fe3fd2cd1a58": "24c5abe4192a8ac40944314bf4a1b6f0",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/33/f9727c2a123c20d56d091bc2acaa902eb09755": "c4f2c9e9d50b219a90ff6d25a0b68288",
".git/objects/34/96dc640fd8ef21d249799a9d83c0c90b191592": "b180dd20303fe7836f73e68bb96fb47d",
".git/objects/36/60d1b0f93b61cd4e415c37b7c639423a173d8c": "543109bfff6d300ffa377bbf17bffbe9",
".git/objects/3d/9dedae18fec41a5b03e68f94ce85524d2baf89": "7958ecef88776b74e380bcb17ce6f636",
".git/objects/3e/6a8da1acae2f1fc5fe6f4e06b38a706fec9948": "b2db83a6e32aeb63b798c09fdcade94a",
".git/objects/3e/e6f5a539bae9b6c8e7c188ea1dcf536aab2db3": "1d749ce4be415616c8907d3a4ad73bc3",
".git/objects/41/6b56c334e1d85ce5f6b70cbc264c4a1d09a5f6": "f552e5bca61a2bb25e7caab7d283af31",
".git/objects/41/a2a1d48f74c58fd7a3078a7789f623930607b8": "090929043bcb1cb6d3abd42549f54f9f",
".git/objects/4a/7c564c20d45ebcca21068e0688e28f859e97b6": "a127f93a879523011abf5a17323929dd",
".git/objects/4c/1fff83886470b3b2a751554c75116f494bed9a": "c8f2717cefa8bfc3b1fe7c6052e9f131",
".git/objects/52/cf56e19f43be6372f244891d1849e9736132b4": "809f60f64477b5ff5e1497910e1e0d15",
".git/objects/53/6ad161003172498dd6ae734e521c59d6b72e3e": "ece36a4b3692e4489c24f11266e5c23a",
".git/objects/5d/aa285ff13f14ff02012e38cdc4d8daee7cdbf7": "b1a89a0f81dd3d4262d467f3433d06e6",
".git/objects/62/b02899d4fe85d3bfd01add937560e5a61c060f": "e09e0d3290c144673e6630055f9f51fa",
".git/objects/63/dfc1f5fa602057ae8fb50e4a306b6dfeaf25c4": "96280ed635cca72272701e50fa22f0b1",
".git/objects/64/2eb0fa8a81bca69f3ae3b40e2b026c5744eacf": "fe8be6c074c6e22622e3f78ce32edef6",
".git/objects/6d/246ab39f71410ebf5fed2332852cc913aaaf25": "d7ed87707e778b4a3005cd0809ade854",
".git/objects/70/f2913d5bb854580a074f7eeca35c2b5da48317": "5133e56b76915d30fd13558bd2025aa3",
".git/objects/72/ec483c0a208eadbae43bfd41ee5ada55fa7339": "06965407518c5de19cc01d76167332ab",
".git/objects/75/c096ecec1d173a74ad8ed8eb45f680b96c0492": "6d4c9938aea0fd9b4d3a8edee642c45c",
".git/objects/77/2fee1abe6f5161a29bec50cd33983b1b6b0a9a": "806c1b70de09b096974092f4b023f648",
".git/objects/79/554149f5e3eb2487ce72831377e58f261507ba": "b961f01aa3c43ba4c2ad8e28c7143e05",
".git/objects/7a/97bc4367c0d84a281831f9be489b91da1ec35a": "94bcaff7525798168a0094a67c1b461a",
".git/objects/82/b94212803a6e5c7a8d92e1b4abda7ca8abb6aa": "3c799ed215d7419eb6ff607f0d8e6a55",
".git/objects/85/d15151066c5ea97374840796aa381e6678a57c": "203035879040e4b6ed89300d565ad90b",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/8e/8400975c8bef0e36c49f476fbded867ed5e0c7": "d19e23c93166ed80f7c2c9fa043f7c77",
".git/objects/90/13c2771d38d1952c0552b1ac642aecbd6b5623": "f719fd5e1a4a2cc79f8c02cbfdf3b6b0",
".git/objects/93/918b4a5392ea1a126e3d73826029e8dfd09c95": "c3156f54478f4cb743d59447482690c5",
".git/objects/a2/1f6b69c6f26d0e5b214b547e7a38eef8cbe135": "54857893638ffdcfd4f098b071bc9e13",
".git/objects/a2/f876f827fba6c8aca579b4b0810829d0bb5272": "126e3dfef9bf3e8789d68aa972436408",
".git/objects/a8/589fb6cbb240c736dcb1b9379e4724cf39a139": "212515ec3000461cc109c0ccf9576658",
".git/objects/aa/5e8f8aa853082d0c860b210dc0f8621171008e": "55ae904cafccd303873d10dd5a9806df",
".git/objects/b2/27d0a814d6f4e93ff8e0ba76a34d15e64e2e32": "16ad51a340b138674976f6226aa7d26e",
".git/objects/b4/e5ece0917190f5a2c28f12aed010559913b350": "4559a2425efbc6d5a259fa5696baae3c",
".git/objects/b4/f33a9e3a78cc053029e43cc47ae79c2f289850": "f239b3834e9a2c61e5fe94b58fe8394b",
".git/objects/b7/07b81664b661c063b68441d96ca510195d57a9": "62fdca5920873efc22ca5fd896b39466",
".git/objects/b7/c1369c0d64805d362c9241762f017832d32acb": "ffab478c9bd7a3c3ca1ef7ef3c1de595",
".git/objects/b8/3ba54aa4b580859688df618831f4bf996f7af0": "babe0174235dca29ddc2cf511ae50072",
".git/objects/b9/9417d9c9a0f39f4756ecb6efc990cfb20810ae": "46ff1b00451ba5e5600ae7afb4a97d70",
".git/objects/be/75da2539cab86e4a7a2720e9058f935c0ac666": "c3a5f804975e53b68e9102e624c7f0d3",
".git/objects/be/dae75b60cfd54223c8da5be00186cf5a732fdb": "fbaa9e874e03538120bebe828c4b1c89",
".git/objects/c2/802382f1f8930b9eaf0c30e9b0ad3d05c9310d": "886df0810be66fc1ef431368dbcc8511",
".git/objects/c4/6a5cc15fbed291318a58a9de8002709a6a8f43": "807842e4919738f5167523ba1bab50cc",
".git/objects/c7/ae9099d190aff1a407d820badfc1b4b38ef58e": "cd03d9b9bc86cdd5fdc69793f85d064a",
".git/objects/c8/72d82d27dfb512116acb43eb37057afad0fb67": "f08fe21f83f1a485b91f69e2646c1bc6",
".git/objects/c8/feb9c8d529371fcedbf8d41452062befb6c7ad": "25d0df0cc97fa063e83b741323c8d8f4",
".git/objects/cc/fbc72f064af82191c892a2f3dd6ec79d24f150": "9f3ce4c628dfa605f01f89b298140f1a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d0/e5d0b16ef0535e6d6eface2b8ea9b72518a0ac": "b08eaffc24af14d3aea647140e6a00fa",
".git/objects/d1/9333981d5bc9218bea1b3747472f5a3da97780": "d53a81da3cd9059c3f60ccfbdbf01f68",
".git/objects/d6/540f2b42d43172e179757cf7d7a1cd8eef05f2": "59505379e3faad002583e8574d4a980f",
".git/objects/d7/60e1f7f231d3e6ef914a382f529d05612f5b2e": "1e848cfba61f3fa2f10797371b6957bc",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/658c77ae7ab8586352925e4dd381b46b2053e4": "eb117e59ae2b0574fc32647db6580d8a",
".git/objects/e8/1967404802220eca967541714c16c2bffefa43": "856532aa4d08d48ab4e80ca1eac2d533",
".git/objects/e9/3aa8479f8d25113ee4c6106c5693ae13d0366b": "d6cbfe911eafd6179219da9d7678bb37",
".git/objects/eb/d018ddc17625749758af947e689c791a82fc57": "1f94f122303a88b16fa59b30b8204101",
".git/objects/ec/ee2ea7246dcda744a62bd833225d24df275c1e": "74c399b1619732845bb6d744b28c23c7",
".git/objects/ed/537a9cbc0f5a9a81bbfe7c554dbbe361d61fdc": "7f7e608c554724c2fe52f2be6868147d",
".git/objects/f1/49c3d835c1b35ef78dc8284ea4bc4d7e1d57ad": "45fc51b45532b0c2f95538add2f57285",
".git/objects/f3/379f870b9811fdf5fffe47ba8f37c54a8191f3": "a021a8a5c2202fe0fe057c5621bbc8fc",
".git/objects/fa/8375adbc70e2fe4e254d096844b465961561b6": "3f0bc13480dc26186ace9ca533684e19",
".git/objects/fa/9750c91815d8d79a8a6c747b964bca59af2fdd": "5c3ed132834113a61efe633ffa901e14",
".git/objects/fb/a2f6b07b0e1dd41e93a441303289eced40e764": "a6472f402509ecb9451f3a216b52e464",
".git/objects/ff/025944d336f2965a7f9dd8682975562fa88ec0": "e23edb096e9f86228d49ffcea7ae11db",
".git/objects/pack/pack-ed757971d74ad176a6821671d6492e69892dcd4a.idx": "d4e9fae332b4ac66d143e96ce1db3b9d",
".git/objects/pack/pack-ed757971d74ad176a6821671d6492e69892dcd4a.pack": "a8f0d9e335e7dc8f34c2ccca14eca8cc",
".git/ORIG_HEAD": "f4b761d65648b5319c8f5519d3133fdc",
".git/packed-refs": "0ae815cb8deec3ea071b5d2214abfee8",
".git/refs/heads/main": "076e990f37c9ca614a8aa5c0b558c1ae",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "076e990f37c9ca614a8aa5c0b558c1ae",
"assets/AssetManifest.json": "0fc2a6e2cb36d4e10c71d2053253278c",
"assets/assets/jsons/sahukadrolar.json": "bd04c91664733b214a9e114535dfabe1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "370de211e6de5c6663cd6d9147906818",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "766c8cc582887d79fd06bb0d7caf09e0",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7fd1975d3d1914595528455f6aa8ad3d",
"/": "7fd1975d3d1914595528455f6aa8ad3d",
"main.dart.js": "28ee6dd618bd697738e2e8c073608acd",
"manifest.json": "88926f920536e8729d6c4653f8cd8b2c",
"privacy.html": "1b20d988db249bb05b4032bb38e75f69",
"version.json": "3132b09e0322072950ccda74f25b951e"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
