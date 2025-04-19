const withOffline = require('next-offline')

module.exports = withOffline({
  output: 'export',
  // Use the default configuration
  // The service worker will be generated in public/service-worker.js
})