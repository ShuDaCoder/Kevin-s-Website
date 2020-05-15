'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "index.html": "e49a9d5da4e89eb9eb7e59119a7552a2",
"/": "e49a9d5da4e89eb9eb7e59119a7552a2",
"main.dart.js": "d020063c379c11c562e80539d0dece13",
".git/config": "fc7cfde68f303ab4509fbba5144d256a",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/50/5abbf1f347f6c6b21b2af9a24c80b39d8b358b": "ad1468052c73f08f34e15d7a6f5132b7",
".git/objects/57/e659bb79954ad9771ed37e35e4fa351033595b": "6df460a0801cad1b008deccbcc3dd17f",
".git/objects/51/2a000a5cf8a76768557850b42ac2b54347bd0f": "a83e72fedcf3ae97f75a4794c317dd72",
".git/objects/67/5381a58c080fcd29718cadf9cea1bed26fd4cb": "520cbeb27d99ba47c23cf63ac5fc45b0",
".git/objects/b5/e8af3cdce5620b90d368351df6c4104c7b152a": "36434f7227d88914f195e36d30824e08",
".git/objects/d9/e4714eca2efcdcbb0f92124c44fbba87e8c4c6": "538feca48a40906172392d05ea403f43",
".git/objects/ac/19b329149abc2af5022ff4a0d870df6deb8800": "d5d17af325de4deccb03b8d79486c6bc",
".git/objects/bb/4bf2f30130922a672fe62d4b4df4a6da1cac2e": "a4414f163627f190e96eea0e188e9c90",
".git/objects/d0/a89ff8ba1f31798716689bcd45782f355bcf80": "2bf862c4291fb632550b5b6bb5c0af0e",
".git/objects/be/f84be6e6a4f91ed3a78a589ffa2f54e675a7d9": "608b103d8cf06950c47af63ae3aad4d1",
".git/objects/da/317d8f6481980203769692dd7161a4710acd0a": "e924fb3d81550d81f6ef098a99d213ac",
".git/objects/ab/605f9e2e3c347708a810435ba3a7debc52e1df": "6625299185704ce425994aa2ca00c523",
".git/objects/eb/76313e82b9e5d8e81baf50e919ed867d9d3f1d": "4109840b8648777d761bc05b92ab4f2a",
".git/objects/f5/bea1b3ecbaef4b569bca7c052b490c657b5675": "efe15036e6dd7fd49baa9ed6dca61c43",
".git/objects/cf/49b26956010b2fc24fc1d79005f3597b4d5a02": "405d4f21f03cb7520ddef69d3afbb05e",
".git/objects/ca/2b517982400971f63237aba8b9d1648f78bc69": "eb930262829be368cac096029f86c10d",
".git/objects/ed/5678990300772db1b361e912350d22723e6d49": "6053bfc950c04ce9e52eb3603fb843a8",
".git/objects/29/43882dfe0c2d36abd50e33d0671f880962261c": "ef1d2ddb11d4e331d1b0b51c840f865c",
".git/objects/1a/a98304e59ade84a3ea585ce80918f4f2fcd1fc": "8e1a81deb89a0251cec7fc6cc3af5ce4",
".git/objects/2a/494122ea0490f7fc5f1706cbcb18a225c26d2c": "836be2d319c556b014f56e8d98f2a12f",
".git/objects/00/01de66121139f5dd287bcad6845f2b78229f53": "aa4391bbe039d2fd9dfdd023adff3c21",
".git/objects/36/2d18c82c732bc22ebf17705cea3d830c13ba27": "4ea9c12ccb4b1340411c5109443ab4f8",
".git/objects/65/734597efd133012e3d61b6b5c0976b35749ebc": "197b25a5b7df75e55080408ee40b8e04",
".git/objects/3f/2f8d3fc65f3f15aba093933055f7af811f94a0": "c6de2663f2101d7a48de29288d5a2eae",
".git/objects/97/50fb180d57a24500e1fd94263928f16f2e5876": "b75ce588fb1bbf56e2b57b7f377e12ed",
".git/objects/0f/fdce26a73686b6e6bf625f29afe782a7b7740a": "9dbe2bfdfdedf9516b0f94c843ab74cf",
".git/objects/90/d2380fb446c29de863724008ed10565043a629": "d0a7f9fc54b1936a46a7d0c1753c5ed5",
".git/objects/bf/fa93b51adb6ddb08ea212a2d8ffd4c0d516cab": "ae782e814484840c8156d2792ad6a2b1",
".git/objects/d3/ed6eb2db8dab79bd06e6a2d0f68be36a98b9cc": "dccb2d965ba4d29b9c4c17603437bc92",
".git/objects/ba/4bc5de3a11f52e04ca5bc0277c9c05a8358401": "82bd1a05ca59703c28f253d11557aade",
".git/objects/a7/5fde4ce6ede2b26811d099f864236b74d6d0e5": "6d61afd95995fbe8cfe1096553491f79",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/b9/fc67ea0e40c499463477af5736c1d47aa7fbd4": "cbaa0573be06093203b2fc30e3d82d6f",
".git/objects/f9/3cd37698964bd2ec9547b5417c4541707775ae": "2243e871a4f0997deaf312bd4f353ecb",
".git/objects/f7/271773fc260fd2cda1bda314b676e53f7e4317": "7e390835bb4cd0855278f52983b932ec",
".git/objects/f7/47014284088fcb0d1089092a7a8068d0479bad": "a72ca724095ec06bfda3344d423a7927",
".git/objects/e8/e9b059c16b9c55b2f54363aea389e8b772133c": "aaa53da768e7eb7c565b32b548703903",
".git/objects/e7/2dfd0875bb2bd3d128b4e308ca004732b57630": "7ab24f6e3bb9e63f385494ca5e45f558",
".git/objects/48/c221cf1202519b5c9c9005ddd9f012d6cb1060": "053e67cedb372e207c7b0003c48f6718",
".git/objects/4a/aa5ac54b81c0a50594b5985c988e286411eda3": "820d0841f590011d6513e94db95ef6b0",
".git/objects/85/39e36a597505e69cf4e6a9aa3327af6642546d": "f73e7a47012ec0ae2f88317714a984c1",
".git/objects/8b/149fe7c3a9f36a87621007037bb3c335ccd882": "dcb058da0832f9564f37944219afff17",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "0aebccfd5866bfc3e7c8f625230c22f7",
".git/logs/HEAD": "ad4982963c4fec3e172ca84783a45f6b",
".git/logs/refs/heads/master": "ad4982963c4fec3e172ca84783a45f6b",
".git/logs/refs/remotes/origin/master": "fd70ced2e206bc3f3dc1c2b99f2664ea",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/refs/heads/master": "64e841a932340ef0bcc1a25e1ea548a6",
".git/refs/remotes/origin/master": "64e841a932340ef0bcc1a25e1ea548a6",
".git/index": "86b27b07e1cf8f8eb018f718adcccf80",
".git/COMMIT_EDITMSG": "68d1907d65ed2a5cdd40ecfdae963e5b",
".git/FETCH_HEAD": "a5fcf84c9aa2c69bd552d3e479d6724a",
"assets/LICENSE": "2b1033f7b254a5088eebbdae91121e82",
"assets/AssetManifest.json": "e22563ad57754e29f567ef7a3604001c",
"assets/FontManifest.json": "592290621294619b16740a9d89232ba6",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/assets/podcast.jpg": "c7689cc7de99893bbfb90e12c8bdd058",
"assets/assets/about.html": "cca535e84bb3f1ad20cd1423638d0253",
"assets/assets/instagram.png": "26631a4043b14dff84180bdf51c3cacb",
"assets/assets/github.png": "d22ee3727a7216019c3848df6eafa024",
"assets/assets/medium_light.png": "bd516690c99267a778885736015befe8",
"assets/assets/medium.png": "fb86f4060325caef8ea1f0fad0d25f40",
"assets/assets/moon.png": "a270b8a10d1a9a52441bf5a322dd1b86",
"assets/assets/avatar.jpg": "204d173b8350ca0c59ab4390f79c067e",
"assets/assets/GoogleSansRegular.ttf": "b5c77a6aed75cdad9489effd0d5ea411",
"assets/assets/works/mynewcar.png": "a856c91717e8817762660e95e591a10f",
"assets/assets/works/mydealer.png": "14f62eb3413897290d2b2a248dcd8931",
"assets/assets/works/messio.png": "827f062f04c16a164d9d7e9d13f24916",
"assets/assets/works/cocoapay.png": "1a116679a577ef4af05f6e3c7f6f23be",
"assets/assets/works/facelyt.png": "9c21f203fc4d3a9ca53455c525b63f94",
"assets/assets/works/savaari_partner.png": "05e90af963f924eeac54490a5a2dcd38",
"assets/assets/works/wheelie_repairs.png": "cd0c2be230c6e7b9cb6224da0726d7ca",
"assets/assets/works/stattion.png": "3e39fc6c1f96b3201cb661452edc6d7f",
"assets/assets/works/savaari_consumer.png": "480950a09ee167d32cdabea4b45b676f",
"assets/assets/works/trivz.png": "4fc7b4922689e1508fdbd35a9b1785ee",
"assets/assets/works/vdrone.png": "f9817772bfa75c8d65c62810d83be284",
"assets/assets/works/railenq.png": "7982d54f1972d96a8f10a389ad354db2",
"assets/assets/works/kharedi_now.png": "d0c478d3e7e33419a8f48b34bf1207e3",
"assets/assets/works/rajasthan_tourism.png": "d7e838f9f73511fc7038a05b60859356",
"assets/assets/works/truelancer.png": "1126f584894fa84c5c052ec625ebf54e",
"assets/assets/FontManifest.json": "59c37979205b4b43589051e92e27cbcd",
"assets/assets/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/linkedin.png": "926e2dcf5ab4220a359867614556df68",
"assets/assets/youtube.png": "76a1053524ef89072062f2b78f92b9e6",
"assets/assets/facebook.png": "021ada146ffb7c1753557ff29618d04c"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
