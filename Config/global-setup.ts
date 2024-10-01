import { chromium, FullConfig } from '@playwright/test';
import { Page } from 'playwright';
import { AxeResults } from 'axe-core';

declare global {
  namespace NodeJS {
    interface Global {
      checkA11y: (page: Page, context?: any, options?: any) => Promise<AxeResults>;
    }
  }
}

// Define global.checkA11y function
(global as any).checkA11y = async (page: Page, context?: any, options?: any): Promise<AxeResults> => {
  // Your checkA11y implementation here...
  // Inject the Axe source code into the page
  await page.addScriptTag({ path: require.resolve('axe-core') });

  // Run the audit and return the results
  return await page.evaluate(async () => {
    return await (window as any).axe.run(document, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
      },
    });
  });
};

const globalSetup = async (config: FullConfig) => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://example.com');

  // Perform other setup tasks
  await browser.close();
};

export default globalSetup;