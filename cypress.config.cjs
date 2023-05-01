const { defineConfig } = require ("cypress");
const vitePreprocessor = require("cypress-vite")
module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5555',
    setupNodeEvents(on, config) {
      on('file:preprocessor', vitePreprocessor());
      require("@cypress/code-coverage/task")(on, config);
      return config;
    },
  },
});
