const { devices } = require('@playwright/test');

module.exports = {
    default: {
      paths: ['Test Scripts/Features/**/*.feature'],
      require: [
        'Test Scripts/**/*.ts',
        'Utils/World.ts',
        'cucumber-playwright.js'
     ],
      requireModule: ['ts-node/register'],
      format: [
        //'progress-bar',
        ["allure-cucumberjs/reporter"],
       // 'json:allure-results/cucumber-report.json', // Ensures Allure JSON results are generated
        'html:cucumber-report.html'
      ],
      formatOptions: {
        resultsDir: "allure-results",
        snippetInterface: 'async-await'
      },
      worldParameters: {
        browserOptions: {
          chromium: devices['Desktop Chrome'],
          firefox: devices['Desktop Firefox'],
          webkit: devices['Desktop Safari'],
          'mobile-chrome': devices['Pixel 5'],
          'mobile-safari': devices['iPhone 12'],
        }
      }
    }
};
