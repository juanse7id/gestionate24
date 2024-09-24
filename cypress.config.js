const { defineConfig } = require("Cypress");
module.exports = defineConfig({

  viewportWidth:(1366),
  viewportHeight:(768),

  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
}); 