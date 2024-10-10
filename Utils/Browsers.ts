import { setWorldConstructor, World, IWorldOptions, After } from '@cucumber/cucumber';
import { chromium, firefox, webkit, Browser, BrowserContext, Page, devices } from '@playwright/test';
import { config } from '../Config/playwright.config';

export class BrowsersWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;

  constructor(options: IWorldOptions) {
    super(options);
  }

  async init() {
    const browserType = process.env.BROWSER || 'chromium';
    const isHeadless = process.env.HEADLESS !== 'false';
    const browserOptions = {
      ...config.use,
      headless: isHeadless
    };

    switch (browserType) {
      case 'firefox':
        this.browser = await firefox.launch(browserOptions);
        break;
      case 'webkit':
        this.browser = await webkit.launch(browserOptions);
        break;
      case 'mobile-chrome':
        this.browser = await chromium.launch(browserOptions);
        this.context = await this.browser.newContext({
          ...devices['Pixel 5'],
          ...browserOptions
        });
        break;
      case 'mobile-safari':
        this.browser = await webkit.launch(browserOptions);
        this.context = await this.browser.newContext({
          ...devices['iPhone 12'],
          ...browserOptions
        });
        break;
      default: // chromium
        this.browser = await chromium.launch(browserOptions);
    }

    this.context = await this.browser.newContext(browserOptions);
    this.page = await this.context.newPage();
  }

  async close() {
    await this.context?.close();
    await this.browser?.close();
  }
}

// Global After hook to handle cleanup after each scenario
After(async function() {
  await this.close(); // Calls the close method from BrowsersWorld
});

setWorldConstructor(BrowsersWorld);
