if (!self.define) {
  let e,
    s = {};
  const n = (n, a) => (
    (n = new URL(n + ".js", a).href),
    s[n] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = n), (e.onload = s), document.head.appendChild(e);
        } else (e = n), importScripts(n), s();
      }).then(() => {
        let e = s[n];
        if (!e) throw new Error(`Module ${n} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, t) => {
    const i =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[i]) return;
    let c = {};
    const r = (e) => n(e, i),
      o = { module: { uri: i }, exports: c, require: r };
    s[i] = Promise.all(a.map((e) => o[e] || r(e))).then((e) => (t(...e), c));
  };
}
define(["./workbox-588899ac"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/static/chunks/310-0b85f2e60a9ee5a4.js",
          revision: "0b85f2e60a9ee5a4",
        },
        {
          url: "/_next/static/chunks/framework-2c79e2a64abdb08b.js",
          revision: "2c79e2a64abdb08b",
        },
        {
          url: "/_next/static/chunks/main-41c7a067006caf69.js",
          revision: "41c7a067006caf69",
        },
        {
          url: "/_next/static/chunks/pages/_app-e1a5f547d3f6d9c1.js",
          revision: "e1a5f547d3f6d9c1",
        },
        {
          url: "/_next/static/chunks/pages/_error-54de1933a164a1ff.js",
          revision: "54de1933a164a1ff",
        },
        {
          url: "/_next/static/chunks/pages/area/%5Barea%5D-b549ee352651f83f.js",
          revision: "b549ee352651f83f",
        },
        {
          url: "/_next/static/chunks/pages/index-cf399ebad6980e24.js",
          revision: "cf399ebad6980e24",
        },
        {
          url: "/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",
          revision: "837c0df77fd5009c9e46d446188ecfd0",
        },
        {
          url: "/_next/static/chunks/webpack-b8f8d6679aaa5f42.js",
          revision: "b8f8d6679aaa5f42",
        },
        {
          url: "/_next/static/css/226f57cdc8650407.css",
          revision: "226f57cdc8650407",
        },
        {
          url: "/_next/static/vHAmZpr7cycG1Bg0oVwNG/_buildManifest.js",
          revision: "f2dcf664be9bec4aed266c8cbf39e46a",
        },
        {
          url: "/_next/static/vHAmZpr7cycG1Bg0oVwNG/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        { url: "/favicon.ico", revision: "c30c7d42707a47a3f4591831641e50dc" },
        {
          url: "/icon-192x192.png",
          revision: "4d8fd11974b04108e0c0c29fc5b883d9",
        },
        {
          url: "/icon-256x256.png",
          revision: "c8a0b6e43de38aa5d8762bbfec2f9e9d",
        },
        {
          url: "/icon-384x384.png",
          revision: "0dc5fd65f35f0615a743815be66d19dd",
        },
        {
          url: "/icon-512x512.png",
          revision: "e709f547b0c099a81b1e2b222e0640da",
        },
        { url: "/manifest.json", revision: "c4ff147957f56a268c6fad4fc178a4b9" },
        { url: "/next.svg", revision: "8e061864f388b47f33a1c3780831193e" },
        { url: "/thirteen.svg", revision: "53f96b8290673ef9d2895908e69b2f92" },
        { url: "/vercel.svg", revision: "61c6b19abff40ea7acd577be818f3976" },
      ],
      { ignoreURLParametersMatching: [] }
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: n,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET"
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET"
    );
});
