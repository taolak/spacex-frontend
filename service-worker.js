"use strict";var precacheConfig=[["/spacex-frontend/index.html","3d00854aa5df43ee97f7bbd955d28056"],["/spacex-frontend/static/css/main.3334b139.css","37a6d0692fd7f6b8f48f9d39ce3418c4"],["/spacex-frontend/static/js/main.71ee18ab.js","e506637b132c999bc3aa2db1b0a7edd0"],["/spacex-frontend/static/media/background.2f525e7a.jpg","2f525e7a4a1ffc94062a1b96467f5239"],["/spacex-frontend/static/media/checkmark.86a30c4c.svg","86a30c4cc08eec9a61283b0263b430a0"],["/spacex-frontend/static/media/geomanist-regular-webfont.15172c44.eot","15172c4485d205a9b749ddff016d8dd3"],["/spacex-frontend/static/media/geomanist-regular-webfont.7da20100.ttf","7da201004f3c567bae2df158acb0b639"],["/spacex-frontend/static/media/geomanist-regular-webfont.a35649b1.woff2","a35649b1d4c9738de84be469ebdf3b2e"],["/spacex-frontend/static/media/geomanist-regular-webfont.deb2e275.woff","deb2e275f84cb3a34faaccd5f0daa4f7"],["/spacex-frontend/static/media/link.57b5d141.svg","57b5d14140600b939dc1d6d985565fd8"],["/spacex-frontend/static/media/refresh.f0734bce.svg","f0734bce64b2dcb5753cc7a5daf83a15"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var a=new Request(n,{credentials:"same-origin"});return fetch(a).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),a="index.html";(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),t=urlsToCacheKeys.has(n));var r="/spacex-frontend/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(n=new URL(r,self.location).toString(),t=urlsToCacheKeys.has(n)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});