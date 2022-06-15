'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "e7d0d6d3ef039eecf584d6ea86a56cee",
".git/config": "a731e179a0e5dd75c1865dfd03b1380d",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "72361a12ae9c82481c03e7d1b8fc4c7d",
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
".git/index": "edc3d4c5f2b4ba38c5f63f6f8d1b863e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b81b21a31a493ef3a9093faa719556ff",
".git/logs/refs/heads/main": "b81b21a31a493ef3a9093faa719556ff",
".git/logs/refs/remotes/origin/HEAD": "1e5de33722472a35a1fb5f30f9b43161",
".git/logs/refs/remotes/origin/main": "995930b1ed8286f232e451ebbcff0dbb",
".git/objects/06/7af922eb35443831f17272f65900c48becb286": "87047398ac78559cdad65f9b9d03ed6a",
".git/objects/08/91d6d53868733c9b1bf3eb53e8d6b4d53ad3d4": "7af19ac47a1f70c552b1e0e56bd551f9",
".git/objects/09/24de8a1b6a7ed4187d062efdc761f6cbd2522f": "786796f60459d41e817423c9b438e411",
".git/objects/0a/136410f4a83174facf227d035a2eb0f97631ce": "bf94b2045a9d01da0b673b391d7e40fe",
".git/objects/0b/e38b233be6dca3544b989e88525e865af91e41": "107f7d830a25b509cd59ded2b785e4d5",
".git/objects/0b/ee8085196ae973e15fec257ce7f6e95c131af1": "0cfdff5af6dd43ef440d6d909945dbd2",
".git/objects/10/1511a69216f487c3e8b1f50f3e789915329965": "b5558cd2467a1c768d2383ba0894c829",
".git/objects/11/8e0c9239d74bc8ca1984951354bb2d93f9984d": "32e3a63760d650bc1f506eb00b4d2e38",
".git/objects/15/8eea9df5399f6988a7744b55eb1460a6b8665b": "87c1f893d409131d448a1b8ccec24978",
".git/objects/15/ef19bc6564df87a3b9436f8fd7df291336cd54": "0c113da69bf40efc8ad6d56901927e0d",
".git/objects/18/4f81d8b6ffaacadce87806bc100dc39295f5ed": "4de9200dec04a1faf71535a5bc5da3c2",
".git/objects/18/b1a3fd13bef0b2a82cd109b362be83fa7f408b": "da4601b5ec06673c46e9a769aca38b52",
".git/objects/19/a8f4afb0687b39102d0099b8b6a74cdc851180": "b3d824110a5d4743c64094dd34471b00",
".git/objects/1c/813451cc36ee30467840e52653702b28e96404": "a4211807ca8ce8798a55bd57b25c0a99",
".git/objects/20/c28467f05cb204ab77a759c3a3faadf03e36fb": "b05583a5ce442a2ea42fdad53cea8249",
".git/objects/20/d57e519f49786d0d0bbcd2af9e81b02d0275cc": "5190334cd53d591c7cce3ce27689e818",
".git/objects/24/3bfd0e78c2a44abb41f4ea2ad5fe3fd2cd1a58": "24c5abe4192a8ac40944314bf4a1b6f0",
".git/objects/26/ae44d1bd36e2dbff5f2cdeacf6a43dc02afdf1": "5565d88b57f7ef30de262e7756021386",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2d/9bc4266c970bf7a8d5b54e3d849c86d8d6cec4": "939a54c4751b93f698a380f08742a341",
".git/objects/30/ebd7336e66bd0d609f47fe3cf492cd1021f1cc": "12ac8064567662dab7cea73cf9279140",
".git/objects/32/a4f8ba33bf1138a70e128b3e0eded3ec1b6e79": "4359e75541431e2be31d4d5c1e99bb48",
".git/objects/33/f9727c2a123c20d56d091bc2acaa902eb09755": "c4f2c9e9d50b219a90ff6d25a0b68288",
".git/objects/34/96dc640fd8ef21d249799a9d83c0c90b191592": "b180dd20303fe7836f73e68bb96fb47d",
".git/objects/36/60d1b0f93b61cd4e415c37b7c639423a173d8c": "543109bfff6d300ffa377bbf17bffbe9",
".git/objects/37/063e5ccf5f63069505cca15faae6780647fc09": "e75bb6075cacd2042f9ab90e682c1fc0",
".git/objects/38/15f9cb87638863b2360b11335bad5ef01dde08": "5d989dd98415eeb6fba4b22f44c88621",
".git/objects/3a/3c9aaa5985ad4c322fd818e3ae5b6b1834fc3e": "5d15abb71795ba5a2960411e08d657ae",
".git/objects/3d/9dedae18fec41a5b03e68f94ce85524d2baf89": "7958ecef88776b74e380bcb17ce6f636",
".git/objects/3e/6a8da1acae2f1fc5fe6f4e06b38a706fec9948": "b2db83a6e32aeb63b798c09fdcade94a",
".git/objects/3e/e6f5a539bae9b6c8e7c188ea1dcf536aab2db3": "1d749ce4be415616c8907d3a4ad73bc3",
".git/objects/41/6b56c334e1d85ce5f6b70cbc264c4a1d09a5f6": "f552e5bca61a2bb25e7caab7d283af31",
".git/objects/41/a2a1d48f74c58fd7a3078a7789f623930607b8": "090929043bcb1cb6d3abd42549f54f9f",
".git/objects/42/2536883602105204318dfcc132fa315d31f014": "6515c837b55ffcd2f8d97d141a1b54f0",
".git/objects/49/834db1e771df41df92bc0d5694ec08b1fba3c8": "f40000d03c7843696a0357b2da5442fa",
".git/objects/4a/7c564c20d45ebcca21068e0688e28f859e97b6": "a127f93a879523011abf5a17323929dd",
".git/objects/4c/1fff83886470b3b2a751554c75116f494bed9a": "c8f2717cefa8bfc3b1fe7c6052e9f131",
".git/objects/4f/4fb8b422488508a5edcc89c04c852687f78c4e": "0d212a3a2ce9107b57fbb928898c1f17",
".git/objects/50/5d735245145c1065cec80503fb60d0e4f143e8": "79da90ccbd9459851e0f85ee466dbb57",
".git/objects/52/cf56e19f43be6372f244891d1849e9736132b4": "809f60f64477b5ff5e1497910e1e0d15",
".git/objects/52/e860681726826c0a9e54e73dfb061bd77bb35b": "529802a2511fe44713baeafa865e649d",
".git/objects/53/6ad161003172498dd6ae734e521c59d6b72e3e": "ece36a4b3692e4489c24f11266e5c23a",
".git/objects/5d/aa285ff13f14ff02012e38cdc4d8daee7cdbf7": "b1a89a0f81dd3d4262d467f3433d06e6",
".git/objects/60/0d27f0726cc5d4e944dfaffa8612b04ebeef54": "a344ad38ba8c15ec8a93b93a3836a8fd",
".git/objects/62/b02899d4fe85d3bfd01add937560e5a61c060f": "e09e0d3290c144673e6630055f9f51fa",
".git/objects/63/dfc1f5fa602057ae8fb50e4a306b6dfeaf25c4": "96280ed635cca72272701e50fa22f0b1",
".git/objects/64/2eb0fa8a81bca69f3ae3b40e2b026c5744eacf": "fe8be6c074c6e22622e3f78ce32edef6",
".git/objects/69/d2c149201acdf29de72e2a54c8be4b2318a5e2": "faf258315f79fd4988c5bc63c96c2f34",
".git/objects/69/ec0234f3c1522157a633884f4025ca8ccf6f8e": "184210e193d3fbd8ac1eba3d053f5eb2",
".git/objects/6d/246ab39f71410ebf5fed2332852cc913aaaf25": "d7ed87707e778b4a3005cd0809ade854",
".git/objects/70/f2913d5bb854580a074f7eeca35c2b5da48317": "5133e56b76915d30fd13558bd2025aa3",
".git/objects/72/ec483c0a208eadbae43bfd41ee5ada55fa7339": "06965407518c5de19cc01d76167332ab",
".git/objects/75/c096ecec1d173a74ad8ed8eb45f680b96c0492": "6d4c9938aea0fd9b4d3a8edee642c45c",
".git/objects/77/2fee1abe6f5161a29bec50cd33983b1b6b0a9a": "806c1b70de09b096974092f4b023f648",
".git/objects/79/554149f5e3eb2487ce72831377e58f261507ba": "b961f01aa3c43ba4c2ad8e28c7143e05",
".git/objects/7a/97bc4367c0d84a281831f9be489b91da1ec35a": "94bcaff7525798168a0094a67c1b461a",
".git/objects/7b/1db8dca42b03fd061feac168a3e60e55d9d08d": "106f8fb36ecfe29519259cac93cbb680",
".git/objects/82/2750fb6df58da8508328b3a71148672eafb1d8": "b26799f1c1345ca25710683d40c01edc",
".git/objects/82/b94212803a6e5c7a8d92e1b4abda7ca8abb6aa": "3c799ed215d7419eb6ff607f0d8e6a55",
".git/objects/83/7b943a993dd0c63f9439c304a8fed1b20fd50e": "012a36db0affb42ce0cdd70e17e24220",
".git/objects/85/1608eab9c198452562606de89cf7d45596616d": "5fc048047155cab2828b22833165cb51",
".git/objects/85/d15151066c5ea97374840796aa381e6678a57c": "203035879040e4b6ed89300d565ad90b",
".git/objects/88/b4fac2494af456ca8098d08fcdf85723042a7a": "deedf4c5309d86ba95daa4ffd5916e7f",
".git/objects/8a/f6357a1cea8a2277a434b56d3b20dc7cd0cb0b": "6a382b0c6929dd046965e618c959d71a",
".git/objects/8e/8400975c8bef0e36c49f476fbded867ed5e0c7": "d19e23c93166ed80f7c2c9fa043f7c77",
".git/objects/90/13c2771d38d1952c0552b1ac642aecbd6b5623": "f719fd5e1a4a2cc79f8c02cbfdf3b6b0",
".git/objects/93/918b4a5392ea1a126e3d73826029e8dfd09c95": "c3156f54478f4cb743d59447482690c5",
".git/objects/96/5cc517d39ea2e214c47bc4887f0073dd5ee7f8": "d3423f605d7d344dd0a7bf976d3877ca",
".git/objects/9d/a95040c1dbb958cab32e17978f5fec79a6b9bb": "f3d0ff603f6c79a02e9c17be2348a8a4",
".git/objects/a2/1f6b69c6f26d0e5b214b547e7a38eef8cbe135": "54857893638ffdcfd4f098b071bc9e13",
".git/objects/a2/f876f827fba6c8aca579b4b0810829d0bb5272": "126e3dfef9bf3e8789d68aa972436408",
".git/objects/a8/589fb6cbb240c736dcb1b9379e4724cf39a139": "212515ec3000461cc109c0ccf9576658",
".git/objects/a9/0db44c5e50251cb4520808a5007d39bc769ec3": "eae4e75eaa9f47b693ca7044ecfeccb6",
".git/objects/aa/5e8f8aa853082d0c860b210dc0f8621171008e": "55ae904cafccd303873d10dd5a9806df",
".git/objects/ab/95566c19f14316f329cb85fda790105b6be2d8": "a21c43a617c8223149454fd1b6d079b4",
".git/objects/b2/27d0a814d6f4e93ff8e0ba76a34d15e64e2e32": "16ad51a340b138674976f6226aa7d26e",
".git/objects/b4/e5ece0917190f5a2c28f12aed010559913b350": "4559a2425efbc6d5a259fa5696baae3c",
".git/objects/b4/f33a9e3a78cc053029e43cc47ae79c2f289850": "f239b3834e9a2c61e5fe94b58fe8394b",
".git/objects/b7/07b81664b661c063b68441d96ca510195d57a9": "62fdca5920873efc22ca5fd896b39466",
".git/objects/b7/c1369c0d64805d362c9241762f017832d32acb": "ffab478c9bd7a3c3ca1ef7ef3c1de595",
".git/objects/b8/3ba54aa4b580859688df618831f4bf996f7af0": "babe0174235dca29ddc2cf511ae50072",
".git/objects/b9/9417d9c9a0f39f4756ecb6efc990cfb20810ae": "46ff1b00451ba5e5600ae7afb4a97d70",
".git/objects/bb/52ee1a298b4e8b9e9aaf8c5bb29e711dbb27ea": "efa452152200c67e98c5ba7bfbd494db",
".git/objects/be/75da2539cab86e4a7a2720e9058f935c0ac666": "c3a5f804975e53b68e9102e624c7f0d3",
".git/objects/be/dae75b60cfd54223c8da5be00186cf5a732fdb": "fbaa9e874e03538120bebe828c4b1c89",
".git/objects/c2/802382f1f8930b9eaf0c30e9b0ad3d05c9310d": "886df0810be66fc1ef431368dbcc8511",
".git/objects/c4/6a5cc15fbed291318a58a9de8002709a6a8f43": "807842e4919738f5167523ba1bab50cc",
".git/objects/c7/ae9099d190aff1a407d820badfc1b4b38ef58e": "cd03d9b9bc86cdd5fdc69793f85d064a",
".git/objects/c8/72d82d27dfb512116acb43eb37057afad0fb67": "f08fe21f83f1a485b91f69e2646c1bc6",
".git/objects/c8/feb9c8d529371fcedbf8d41452062befb6c7ad": "25d0df0cc97fa063e83b741323c8d8f4",
".git/objects/cc/fbc72f064af82191c892a2f3dd6ec79d24f150": "9f3ce4c628dfa605f01f89b298140f1a",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cf/47f3157f3e4c39ebdeb668fe45ea84ec84abbc": "300ce38bb04099116c5bce0a591736db",
".git/objects/cf/d5e85c5dde9376d27fe2fcd634c2f57192712e": "51b99b9b969e2e6a5dba82462caefad0",
".git/objects/d0/e5d0b16ef0535e6d6eface2b8ea9b72518a0ac": "b08eaffc24af14d3aea647140e6a00fa",
".git/objects/d1/9333981d5bc9218bea1b3747472f5a3da97780": "d53a81da3cd9059c3f60ccfbdbf01f68",
".git/objects/d6/540f2b42d43172e179757cf7d7a1cd8eef05f2": "59505379e3faad002583e8574d4a980f",
".git/objects/d7/60e1f7f231d3e6ef914a382f529d05612f5b2e": "1e848cfba61f3fa2f10797371b6957bc",
".git/objects/db/85d37d2176be790f35faf5a0cfcf26903e89a8": "5c37b3c9127663e9fcf0ebc731ae9a22",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/658c77ae7ab8586352925e4dd381b46b2053e4": "eb117e59ae2b0574fc32647db6580d8a",
".git/objects/e3/68eca481497a7ad350ba4b1135e1bc9501b2b4": "42be441e3cae8ccdd457c592a0a280bd",
".git/objects/e4/600cdc9c20c9ba9653bfb56ab57f1ec0b80f95": "91c449711dea77c6a9807957b1fb0349",
".git/objects/e8/1967404802220eca967541714c16c2bffefa43": "856532aa4d08d48ab4e80ca1eac2d533",
".git/objects/e9/3aa8479f8d25113ee4c6106c5693ae13d0366b": "d6cbfe911eafd6179219da9d7678bb37",
".git/objects/eb/d018ddc17625749758af947e689c791a82fc57": "1f94f122303a88b16fa59b30b8204101",
".git/objects/ec/7f8e3598a219a1e9f7bdc5153e8115f52793e1": "288b22f5aac90dafa0e36d93332ef846",
".git/objects/ec/ee2ea7246dcda744a62bd833225d24df275c1e": "74c399b1619732845bb6d744b28c23c7",
".git/objects/ed/537a9cbc0f5a9a81bbfe7c554dbbe361d61fdc": "7f7e608c554724c2fe52f2be6868147d",
".git/objects/f1/49c3d835c1b35ef78dc8284ea4bc4d7e1d57ad": "45fc51b45532b0c2f95538add2f57285",
".git/objects/f3/379f870b9811fdf5fffe47ba8f37c54a8191f3": "a021a8a5c2202fe0fe057c5621bbc8fc",
".git/objects/f5/2c1c17f952b894e7568adc8f4e9171db7b1621": "cc60f92365f4935fe277ac973117cb2f",
".git/objects/fa/8375adbc70e2fe4e254d096844b465961561b6": "3f0bc13480dc26186ace9ca533684e19",
".git/objects/fa/9750c91815d8d79a8a6c747b964bca59af2fdd": "5c3ed132834113a61efe633ffa901e14",
".git/objects/fb/a2f6b07b0e1dd41e93a441303289eced40e764": "a6472f402509ecb9451f3a216b52e464",
".git/objects/ff/025944d336f2965a7f9dd8682975562fa88ec0": "e23edb096e9f86228d49ffcea7ae11db",
".git/objects/pack/pack-ed757971d74ad176a6821671d6492e69892dcd4a.idx": "d4e9fae332b4ac66d143e96ce1db3b9d",
".git/objects/pack/pack-ed757971d74ad176a6821671d6492e69892dcd4a.pack": "a8f0d9e335e7dc8f34c2ccca14eca8cc",
".git/ORIG_HEAD": "6809f655119890df091881f24d93abdc",
".git/packed-refs": "0ae815cb8deec3ea071b5d2214abfee8",
".git/refs/heads/main": "25e87c14350c253bd5ecadf8e2c38da4",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "25e87c14350c253bd5ecadf8e2c38da4",
"assets/AssetManifest.json": "0fc2a6e2cb36d4e10c71d2053253278c",
"assets/assets/jsons/sahukadrolar.json": "bd04c91664733b214a9e114535dfabe1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "818de307d523d9d05d821e9a9252f4a0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/shaders/ink_sparkle.frag": "c94b92fd65fba94f95b0209861ac652b",
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
"index.html": "6d2f28c24867b3e98d2f22cabff50329",
"/": "6d2f28c24867b3e98d2f22cabff50329",
"main.dart.js": "87e1b5a33c06c382c03c42bcc2817da1",
"manifest.json": "b04a7c1518968b5c109da855ce33243c",
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
