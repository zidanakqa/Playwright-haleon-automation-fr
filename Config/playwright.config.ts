import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: '../tests',
  timeout: 30000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['allure-playwright']],
  use: {
    baseURL: 'https://your-base-url.com',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },
  ],
  globalSetup: path.resolve(__dirname, './global-setup.ts'),
});

/*import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import fs from 'fs';
import  percySnapshot  from '@percy/playwright';

// Helper function to load JSON data
function loadBrowserConfigs(configFile: string): string[] {
  try {
    return JSON.parse(fs.readFileSync(configFile, 'utf8'));
  } catch (error) {
    console.warn(`Warning: Could not load config file ${configFile}. Using default configuration.`);
    return ['Desktop Chrome']; // Default to Desktop Chrome if config file is missing
  }
}

// Choose which config to load based on an environment variable or CLI argument
const isMobile = process.env.TEST_ENV === 'mobile';
const desktopConfigPath = path.resolve(__dirname, 'config/browsers-desktop.config.json');
const mobileConfigPath = path.resolve(__dirname, 'config/browsers-mobile.config.json');

// Load the respective browser configs
const browserConfigs = isMobile ? loadBrowserConfigs(mobileConfigPath) : loadBrowserConfigs(desktopConfigPath);

// Map browsers to Playwright projects
const projects = browserConfigs.map(browser => {
  switch(browser) {
    case 'Desktop Chrome':
      return {
        name: browser,
        use: { ...devices['Desktop Chrome'] },
      };
    case 'Mobile Chrome':
      return {
        name: browser,
        use: { ...devices['Pixel 5'] },
      };
    case 'Mobile Safari':
      return {
        name: browser,
        use: { ...devices['iPhone 12'] },
      };
    default:
      return {
        name: browser,
        use: { ...devices['Desktop Chrome'] }, // Default to Desktop Chrome
      };
  }
});

export default defineConfig({
  testDir: './tests',
  use: {
    headless: false,
  },
  projects: [
    ...projects,
    {
      name: 'percy',
      use: { ...devices['Desktop Chrome'] },
      testMatch: /.,
    },
  ],
  reporter: [
    ['list'],
    ['allure-playwright'],
  ],
  globalSetup: path.resolve(__dirname, '../config/global-setup.ts'), // Point to your global setup file
  workers: 1,
});
*/