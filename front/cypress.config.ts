import { defineConfig } from 'cypress';

export default defineConfig({
   videosFolder: 'cypress/videos',
   screenshotsFolder: 'cypress/screenshots',
   fixturesFolder: 'cypress/fixtures',
   viewportWidth: 400,
   viewportHeight: 500,
   chromeWebSecurity: false,
   experimentalInteractiveRunEvents: true,
   trashAssetsBeforeRuns: true,
   video: false,
   retries: 1,
   // reporter: 'teamcity',
   // reporterOptions: {
   //    mochaFile: 'results/my-test-output-[hash].xml'
   // },

   reporter: 'mochawesome',
   reporterOptions: {
      reportDir: 'cypress/reports/mocha',
      overwrite: false,
      html: false,
      json: true
   },
   e2e: {
      setupNodeEvents(on, config) {

         return config;
      },
      supportFile: 'cypress/support/e2e.ts',
      baseUrl: 'http://localhost:4200',
      testIsolation: false,
      experimentalRunAllSpecs: true,
      // specPattern: 'cypress/e2e//*.cy.ts'
      specPattern: [
         'cypress/api//*.spec.ts',
         'cypress/e2e//*.e2e.ts'
      ]
   }
});