var version = 'v1';
var pupil_docs_cache = 'pupil-docs-cache' + '-' + version;
var urlsToCache = [
  '/'
  // '/slate/stylesheets/screen.min.css',
  // '/slate/javascripts/all.min.js',
  // '/slate/javascripts/plyr.min.js',
  // '/videos/calibration/pupil-detection/pd.jpg',
  // '/videos/calibration/calibration-headset/clb-hd.jpg',
  // '/videos/calibration/calibration-screen/clb-s.jpg',
  // '/videos/recording/rec.jpg',
  // '/videos/visualize/pp_vis.jpg',
  // '/videos/headset-adjust/worldcam-lens.jpg',
  // '/videos/headset-adjust/nosepad.jpg',
  // '/videos/headset-adjust/eyecam-slide.jpg',
  // '/videos/headset-adjust/worldcam-rotate.jpg',
  // '/videos/hea dset-adjust/eyecam-rotate.jpg',
  // '/videos/headset-adjust/eyecam-screw.jpg',
  // '/videos/headset-adjust/eye-adjust.jpg',
  // '/videos/headset-adjust/worldcam-focus.jpg',
  // '/videos/capture-selection/pc-select.jpg',
  // '/videos/calibration/calibration-mobo/clb-mobo.jpg',
  // '/videos/calibration/calibration-manual/clb-man.jpg',
  // '/videos/calibration/calibration-natural/clb-natural.jpg',
  // '/videos/pupil-remote/pr.jpg',
  // '/videos/surface-tracking/srf-tracking.jpg'
];

self.addEventListener('install', function(event) {
  // Perform install steps
  console.log('SW: Installing... ')
  event.waitUntil(
    caches.open(pupil_docs_cache)
      .then(function(cache) {
        // console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(function() {
        console.log('SW: Install completed');
      })
  );
});

// self.addEventListener('activate', function(event) {
//   console.log('SW activated. Now ready to handle fetches!');
// });

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(pupil_docs_cache)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});

self.addEventListener('activate', function(event) {

  var cacheWhitelist = [pupil_docs_cache];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});