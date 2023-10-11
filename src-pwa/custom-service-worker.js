import { precacheAndRoute } from "workbox-precaching";
import { registerRoute } from "workbox-routing";
import { NetworkFirst } from "workbox-strategies";
import { CacheableResponsePlugin } from 'workbox-cacheable-response';
/*
 * This file (which will be your service worker)
 * is picked up by the build system ONLY if
 * quasar.conf > pwa > workboxPluginMode is set to "InjectManifest"
 */
// PreCaching
precacheAndRoute(self.__WB_MANIFEST);

self.__WB_DISABLE_DEV_LOGS = true;

// Caching strategies
registerRoute(
  ({ url }) => url.href.startsWith("https://api"),
  new NetworkFirst({
    cacheName: "external-api-cache",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [200],
      })
    ],
  })
);
