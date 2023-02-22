self.addEventListener("install", function (event) {
  /**
   * This will skip waiting state and activate the new service worker on next load.
   * The new service worker will then fire the `activate`.
   * Otherwise, the new service worker will only take control when pages are closed
   */
  self.skipWaiting();

  // no-op at the moment
});

self.addEventListener("fetch", function (event) {
  // no-op at the moment
});

self.addEventListener("activate", (event) => {
  // no-op at the moment
});
