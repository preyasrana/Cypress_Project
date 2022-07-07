const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    fronturl: 'http://practice.automationtesting.in/',
  },
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  execTimeout: 60000,
  pageLoadTimeout: 60000,
  requestTimeout: 10000,
  responseTimeout: 10000,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: 'report',
    overwrite: false,
    html: true,
    json: true,
    charts: true,
  },
  video: true,
  projectId: '2p9vy2',
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://reqres.in/api',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
})
