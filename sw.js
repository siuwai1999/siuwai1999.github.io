/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2021/3DModelingTexturing-Taxi/index.html","740131ee47e3acf0aee9a95d472f19c3"],["/2021/ASPandC-DynamicWebPage/index.html","9b3a2000eb2688f5e43185b94d7e521d"],["/2021/UnrealEngineSceneDesign-HongKong/index.html","7f84994c8446ba7f772b97623800cbdc"],["/2021/live2DModeling-Aoi/index.html","0c5c695574e6ce20eed6fd66825e8a0d"],["/about/index.html","521896ea8651a706eb5e376079bf9cae"],["/archives/2021/04/index.html","c7cfd09c76bdec2a8df64f7ca7459351"],["/archives/2021/05/index.html","149e5d4be1d0ff224e5c4919116de695"],["/archives/2021/index.html","3beed7d3d6a7ee3b332b2ba3d7d7745b"],["/archives/index.html","3beed7d3d6a7ee3b332b2ba3d7d7745b"],["/categories/2D/index.html","4b82817788991d6338b855921f5b9e82"],["/categories/3D/index.html","c1afdb9167340003cb8288bd14b2114c"],["/categories/程式開發/index.html","c7cfd09c76bdec2a8df64f7ca7459351"],["/css/backcss.css","a27b5265d5f43e69530abbac7d17f865"],["/css/dropdownMenu.css","759aa87203962ef737d2000889b1f845"],["/css/font-awesome.min.css","d96cb70981f41365e78382b4cd5692b6"],["/css/gallery.css","6e444192a0a84075ff1d63cfbdc0f727"],["/css/gallery.min.css","a62dc56ec5981c978cddcba32f2dc875"],["/css/iframe.css","368152cbde7ed26ce5628967fea2ca15"],["/css/images/arrow-small.svg","b533e494e6e3a12c4c9d235a5511941a"],["/css/images/arrow.svg","b81558de2f8ad95c3241af72b5e75cb2"],["/css/images/close-small-alt.svg","67b0ce6b3b2e6c52a30703ae0d4a1fc9"],["/css/images/close-small.svg","d0a48b5f9fe9b8a3daf9748276dc2005"],["/css/images/close.svg","7f8fecc1a2cf927df8c366216e032ee6"],["/css/images/open-small.svg","80f5d7c853849f7f585e8b01c0a85c2c"],["/css/images/open.svg","87758d058b3c6585ffc82ce91a59ebe7"],["/css/images/spinner.svg","9da18585517e24318d29d6b78b8a69ab"],["/css/item.css","edc954b8251771cf32079677f47e4e15"],["/css/mic_gallery.css","86fcc64436d45be1440e805898a91f13"],["/css/mic_main.css","36312150065dbae65501bb2c183a412f"],["/css/mic_main_backup.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/my_link.css","fb02415781e14a480272362cebe322b6"],["/css/normalize.css","f7778a924093c3a150106f61446fc4b6"],["/css/noscript.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/ok_prism.css","53e9348a76c90e0845c77157b5ca35b7"],["/css/prism.css","2b635e0dc87efd54db4e46ecb221ae53"],["/css/prism_coy.css","d02376f683f3af8f3d0627e8b49d86a1"],["/css/prism_dark.css","4d58852e79d6f29fa164ae188b9ec277"],["/css/prism_default.css","33d4bfb4e8f5a2660aa6d39ddd0073e4"],["/css/prism_funky.css","5ad2c322a963b10dd62c0f0fbba45a0a"],["/css/prism_okaidia.css","53e9348a76c90e0845c77157b5ca35b7"],["/css/prism_solarized.css","a4479e7ea705bbf7faacbc528e225987"],["/css/prism_twilight.css","a025ddad1819da8d1261c50442a911f9"],["/css/typo.css","6bfea7dbee46405fc35c82f781fce447"],["/fonts/FZLT.ttf","a58a499bddbda398e1275972e56b06f6"],["/fonts/fontawesome-webfont.eot","25a32416abee198dd821b0b17a198a8f"],["/fonts/fontawesome-webfont.svg","d7c639084f684d66a1bc66855d193ed8"],["/fonts/fontawesome-webfont.ttf","1dc35d25e61d819a9c357074014867ab"],["/fonts/fontawesome-webfont.woff","c8ddf1e5e5bf3682bc7bebf30f394148"],["/fonts/fontawesome-webfont.woff2","e6cf7c6ec7c2d6f670ae9d762604cb0b"],["/gallery/index.html","6392860e1454f72b1bb12b3566f7e9c4"],["/googlead7d95965be727de.html","2ca427c340475d14195230e58cd627b1"],["/images/12.jpg","063f15d7d753f8a1cb66d896406730c9"],["/images/21.jpg","e46e364f8f95d98560a7434e6ff23ed8"],["/images/3123.jpg","ad0eaf3e886a044295aba5d3f5bb91e0"],["/images/fulls/01.jpg","c8a7312b3ca1e9f153a138a7ce1527e8"],["/images/fulls/02.jpg","506c2e45453a53524c699d2854be80ec"],["/images/fulls/03.jpg","04b92949f6264af0504a9dad185c28e5"],["/images/fulls/04.jpg","c71d55db77950b48f1e0be787b9bff47"],["/images/fulls/05.jpg","a33544f13eae99055db9023eb6f3aca9"],["/images/fulls/06.jpg","30620e37375cb828ec76ae7af50c36bf"],["/images/fulls/07.jpg","be66077687b72be05328ab1a99dd888d"],["/images/fulls/08.jpg","82e3b23903381d05c19a82098995b11b"],["/images/fulls/09.jpg","d251e85896ef98a1f49a87938ce48392"],["/images/fulls/10.jpg","a7d9057e096faa3fb6bf4035201eb9bd"],["/images/fulls/11.jpg","017c093be9b7228f5d9dea2a6ba2b461"],["/images/fulls/12.jpg","5d552f169f67c6d870695ead6c216da5"],["/images/overlay.png","aff0992faef6ad79b50ec21e2225a881"],["/images/pic01.jpg","5f1e31e56b332bd5f0b315b45b7204fb"],["/images/pic02.jpg","8c20e039b8ea7c4a90cafb95d2c1b498"],["/images/pic03.jpg","0cd4c9ac02964e7a96b264994670600f"],["/images/pic04.jpg","1cf94a5ef0dc43c4fa7c63e7aaea252f"],["/images/pic05.jpg","8212f9a3928223bbf9d952946cd7492e"],["/images/pic06.jpg","43b89b2eac7888441a47d537b6024e4d"],["/images/pic07.jpg","3b551384c703206ac7330a61ceedef2d"],["/images/pic08.jpg","0e1004b210354f71dcac4334f9872864"],["/images/pic09.jpg","0f3e6cca6c792f7a754df48fde7d6d3b"],["/images/pic10.jpg","aa9397310c794b5f3a09c68382ca2770"],["/images/pic11.jpg","ba7bf856c45343791163833746d0f4b8"],["/images/pic12.jpg","51b5ad0c7762d954b22952ef86b29c3c"],["/images/picx03.jpg","c2e220dfa740f6276f38d399e04412f3"],["/images/thumbs/01.jpg","36a0adce2d218008a56d28240a55920d"],["/images/thumbs/02.jpg","71a93e8ccee1914c4fed2b14b2048c26"],["/images/thumbs/03.jpg","9bf32c8a9d000bc51fd67216d3bb0087"],["/images/thumbs/04.jpg","077b2a375f0251339ebea289b4d28e9e"],["/images/thumbs/05.jpg","dc767c675d8c93a28df27471772c265d"],["/images/thumbs/06.jpg","6f6d111464d45eb548e0343cee8ea848"],["/images/thumbs/07.jpg","84ca89fb3ee0a26effbb0e69ce59709e"],["/images/thumbs/08.jpg","5bc1d1921f0de35b81862b722d481901"],["/images/thumbs/09.jpg","1b14d2e13a6e24a20d2664711b27cca9"],["/images/thumbs/10.jpg","cfae7c322ca3c75d2703f97361441016"],["/images/thumbs/11.jpg","4c763bbbf4fb53986e4c0c5074fd3a6d"],["/images/thumbs/12.jpg","33fa13356921680b4e21c10f7e909753"],["/img/hk.png","8b38cc26d39695895d370242d793e54b"],["/img/hk2.png","9538774931cf2de95d139cbca4d03964"],["/img/hk3.png","07e62fe7286607e7dc91433c6e09086e"],["/img/hk4.png","237ef22412954b05bdaca9a441a7455d"],["/img/hk5.png","c5b36acf384206acde251692fae909de"],["/img/hk6.png","0c653005e9ffc9aa3eddf48e0b05387e"],["/img/hk7.png","ec1ec299253b70ff468a0f9f2588ca9a"],["/img/hkoverview1.png","be49cc116343c23f258bd9e584f64525"],["/img/hkoverview2.png","73bb3ba1c5df807b6724ef73655282d1"],["/img/hkscene.png","2ad8f9253cedcc921b1f7f7369231811"],["/img/hksm.png","291bb90e186fedfd0287f3be5e02655e"],["/img/hksm1.png","b0e0ed6247b65ef737a43e1f2762319f"],["/img/hksm2.png","80648be7321dd1254ebbf7d61890f2b6"],["/img/hksm3.png","4b147cd84e464efa48bd65ef996b6183"],["/img/hksm4.png","f34e5e7bf6e47a981c6b65e617af9cfe"],["/img/hksm5.png","17285e6811311bd18b2db8eb6f055834"],["/img/icons-192.png","ab1f5521bdfd8ef06fb6dece04751a53"],["/img/icons-512.png","c7877f159c06ba8d48ce37098dc9b375"],["/img/live2daoi.jpg","5d0b3e9b59559258a5a8b55efa90bb0d"],["/img/live2daoiexp.png","ecbec158156295d3b410d0c6101c6533"],["/img/live2daoioverview.png","ab741f9da08f92351ea1d1d0fcd97e0f"],["/img/screenshot1.png","b48ed19e1c09b839b9986b51883399d1"],["/img/taxi.jpg","5338decce54c773b72979cc5a90ffaa8"],["/img/taxi1.png","8f59ba82a357ecbe015ecc7a7d234495"],["/img/taxi1wireframe.png","3bc57c6cea75fda939940d6a9cd45a9b"],["/img/taxi2.png","0357f3057825de7dade1dd701af66e13"],["/img/taxi2wireframe.png","806cb03e85db448af22e98b214e3f254"],["/img/taxi3.png","3af18d91c601a17ef2dd87f4d17e555e"],["/img/taxi4.png","724f469e785377ccff9b80849af3349b"],["/img/taxi5.png","d9fa7fd4700a2a63a1827e3aacdb215f"],["/img/taxitexture.png","890897a19c8119b2793cd78d4bb438b1"],["/index.html","6099e7962499bb4ab5e8f0e924542c0a"],["/js/gallery/gallery.js","54dbd709efe8893194901af3fce1379d"],["/js/gallery_skel.min.js","df4f8930f3747bbadcdeb7dfe326ed73"],["/js/install.js","fb725bc57002bf64ff97ccecf4376d19"],["/js/jquery.min.js","8fb8fee4fcc3cc86ff6c724154c49c42"],["/js/jquery.scrollex.min.js","830ab00c7d7a5be0c57f91e35bd32376"],["/js/jquery.scrolly.min.js","cdaa947ce14cf917fd3fbb34bbf69292"],["/js/lazyload.min.js","d4171fcee357a95fa7b45ea0abee57dd"],["/js/main.js","0021bd9fff08e4c82dbea37180eaf1b8"],["/js/mic_gallery.js","b586d86e9514fea46595c272a35dd8e8"],["/js/prism.js","dba8b9fa138014d5ea1c37f7be2a2e20"],["/js/skel.min.js","df4f8930f3747bbadcdeb7dfe326ed73"],["/js/util.js","31f3e8b0cbedca627878a2b6d868bc14"],["/sw-register.js","39aa11b2a1eb0b99310716aff7a409ca"],["/tag/index.html","666592e65afcb15fb4082cad1b9907de"],["/tags/2D/index.html","4b82817788991d6338b855921f5b9e82"],["/tags/3D/index.html","c1afdb9167340003cb8288bd14b2114c"],["/tags/ASP-NET/index.html","c7cfd09c76bdec2a8df64f7ca7459351"],["/tags/C/index.html","c7cfd09c76bdec2a8df64f7ca7459351"],["/tags/Live2D/index.html","4b82817788991d6338b855921f5b9e82"],["/tags/Maya/index.html","c1afdb9167340003cb8288bd14b2114c"],["/tags/Substance-Painter/index.html","c1afdb9167340003cb8288bd14b2114c"],["/tags/Unreal-Engine-4/index.html","f57e9b92e49e676b459f7cd5fbaa0804"],["/tags/動態網站/index.html","c7cfd09c76bdec2a8df64f7ca7459351"],["/tags/建模/index.html","149e5d4be1d0ff224e5c4919116de695"],["/tags/材質/index.html","c1afdb9167340003cb8288bd14b2114c"],["/tags/渲染/index.html","c1afdb9167340003cb8288bd14b2114c"],["/tags/電子商務/index.html","c7cfd09c76bdec2a8df64f7ca7459351"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });



// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache 配置转换后的 toolbox 代码.

toolbox.router.get("/**/*", toolbox.cacheFirst, {"origin":"siuwai1999.github.io"});





/* eslint-enable */
