import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Read authentication data
  const authFilePath = path.join(__dirname, './data/basicAuth.json');
  const authData = JSON.parse(fs.readFileSync(authFilePath, 'utf-8'));

  // Set HTTP authentication
  await context.setHTTPCredentials({
    username: authData.username,
    password: authData.password,
  });

  // Navigate to the page
  await page.goto('https://s4d.eip.dev.haleon.com/iframe.html?args=&globals=theme:base;versionSelector.enabled:!false&version=branch:feat-button-ali&id=atoms-button--all-variants&viewMode=story');
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

  // Close the browser when done
  await browser.close();
})();