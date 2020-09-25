const withOffline = require('next-offline');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const withTranspileModules = require('next-transpile-modules')([
  '@rauleite/components',
  '@rauleite/utils',
]);

const webpack = (config, { dev, isServer }) => {
  // const optimization = isServer ? { ...config.optimization, minimize: true } : config.optimization;

  const newConfig = {
    ...config,
    // optimization,
  };

  // console.log('webpack -> newConfig.optimization', newConfig.optimization);

  return newConfig;
};

// const generalConfig = {
//   performance: {
//     hints: 'warning',
//   },
// };

const offlineConfig = {
  target: 'serverless',
  transformManifest: (manifest) => ['/'].concat(manifest), // add the homepage to the cache
  // Trying to set NODE_ENV=production when running yarn dev causes a build-time error so we
  // turn on the SW in dev mode so that we can actually test it
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
};

// withTranspileModules showuld always be the last param
module.exports = withBundleAnalyzer(
  withOffline(
    withTranspileModules({
      ...offlineConfig,
      // ...generalConfig,
      webpack,
    }),
  ),
);
