/*import { chromium } from '@playwright/test';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const page = await browser.newPage();
  
  await page.goto('https://lon-haleon-s4d-poc-ui.vercel.app/iframe.html?args=&id=atoms-button--all-variants&viewMode=story');
  await page.waitForLoadState('networkidle');

  // Wait for the content to be visible
  await page.locator('body').waitFor({ state: 'visible' });

  // Log all buttons
  const buttons = await page.locator('button').all();
  console.log(`Found ${buttons.length} buttons`);

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const text = await button.textContent();
    const classes = await button.getAttribute('class');
    console.log(`Button ${i + 1}: Text="${text}", Classes="${classes}"`);
  }

  // Keep the browser open
  await page.pause();
})();
*/