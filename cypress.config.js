const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "a5njh3",
  viewportWidth: 1920,
  viewportHeight: 1080,
  e2e: {
    baseUrl: 'https://portalblazor.compulog.com.br/',
  },
});

