importScripts("precache-manifest.4ddb7ae3aad2c88ad464889825ae1372.js", "https://storage.googleapis.com/workbox-cdn/releases/4.0.0/workbox-sw.js");

var cacheName = 'weatherPWA-step-6-2';
var dataCacheName = 'weatherData-v1';

var filesToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/styles/inline.css',
  '/images/clear.png',
  '/images/cloudy-scattered-showers.png',
  '/images/cloudy.png',
  '/images/fog.png',
  '/images/ic_add_white_24px.svg',
  '/images/ic_refresh_white_24px.svg',
  '/images/partly-cloudy.png',
  '/images/rain.png',
  '/images/scattered-showers.png',
  '/images/sleet.png',
  '/images/snow.png',
  '/images/thunderstorm.png',
  '/images/wind.png'
];

workbox.routing.registerRoute(
  /\.(?:png|gif|jpg|jpeg|svg)$/,
  new workbox.strategies.CacheFirst({
    cacheName: 'images-v2',
    plugins: [
      new workbox.expiration.Plugin({
        maxEntries: 60,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  }),
);

workbox.routing.registerRoute(
  /\.(?:js|css|html)$/,
  new workbox.strategies.StaleWhileRevalidate(),
);

function matchCallForecast({
  url,
  event
}) {
  let ismatch = url.href.startsWith('https://weather-ydn-yql.media.yahoo.com/forecastrss');
  console.log(url.href, 'is match', ismatch);
  return ismatch;
};

workbox.routing.registerRoute(
  //matchCallForecast,
  /^(https:\/\/weather-ydn-yql\.media\.yahoo\.com\/forecastrss)/,
  new workbox.strategies.NetworkFirst({
    cacheName: dataCacheName,
  })
);



workbox.core.skipWaiting();
workbox.core.clientsClaim();
self.addEventListener('push', (event) => {
  const title = 'Get Started With Workbox';
  const options = {
    body: event.data.text()
  };
  event.waitUntil(self.registration.showNotification(title, options));
});

workbox.precaching.precacheAndRoute(self.__precacheManifest);
