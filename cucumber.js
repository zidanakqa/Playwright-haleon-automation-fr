const os = require("node:os");
const process = require("node:process");
const { devices } = require('@playwright/test');

module.exports = {
    default: {
      paths: ['Test Scripts/Features/**/*.feature'],
      require: [
        'Test Scripts/**/*.ts',
        'Utils/Browsers.ts',
     ],
      requireModule: ['ts-node/register'],
      format: [
        //'progress-bar',
        ["allure-cucumberjs/reporter"],
       // 'json:allure-results/cucumber-report.json', // Ensures Allure JSON results are generated
        'html:cucumber-report.html'
      ],
      formatOptions: {
        resultsDir:"TestResults/Allure/allure-results",
        snippetInterface: 'async-await',
        labels: [
          {
            pattern: [/@epic:(.*)/],
            name: "epic",
          },
          {
            pattern: [/@severity:(.*)/],
            name: "severity",
          },
        ],
        environmentInfo: {
          os_platform: os.platform(),
          os_release: os.release(),
          os_version: os.version(),
          node_version: process.version,
        },
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
