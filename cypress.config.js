const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'ybnyhg',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
