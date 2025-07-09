const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor").default;
const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000", // Change if needed
    specPattern: "cypress/e2e/**/*.feature", // Point to your .feature files
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      
      // ✅ This is where the error was: ensure you use `.default`
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin(config)],
        })
      );

      return config;
    },
  },
});
