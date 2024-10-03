const { defineConfig } = require("Cypress");
module.exports = defineConfig({

  viewportWidth:(1366),
  viewportHeight:(768),

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    baseUrl: 'http://192.168.100.134:8080/gestionate/app/#/login'
  },
}); 