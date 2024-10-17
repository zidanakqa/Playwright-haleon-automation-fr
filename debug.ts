import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

(async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();

  // Read authentication data
  const authFilePath = path.join(__dirname, './Data/BasicAuth.json');
  console.log('Auth File Path:', authFilePath);

  // Check if the file exists and read its contents
  if (fs.existsSync(authFilePath)) {
    const authData = JSON.parse(fs.readFileSync(authFilePath, 'utf-8'));
    console.log('Auth Data:', authData);

    // Ensure there are no leading or trailing spaces in the credentials
    authData.username = authData.username.trim();
    authData.password = authData.password.trim();

    // Set HTTP authentication
    await context.setHTTPCredentials({
      username: authData.username,
      password: authData.password,
    });
    console.log('HTTP credentials set:', authData.username, authData.password);
  } else {
    console.error('Auth file not found.');
    return;
  }

  // Log responses and failed requests for debugging
  page.on('response', response => {
    console.log(`Response URL: ${response.url()} -> Status: ${response.status()}`);
  });

  page.on('requestfailed', request => {
    const failure = request.failure();
    if (failure) {
      console.log(`Request failed: ${request.url()} -> ${failure.errorText}`);
    } else {
      console.log(`Request failed: ${request.url()} -> No error text available`);
    }
  });

  try {
    // Navigate to the page
    await page.goto('https://s4d.eip.dev.haleon.com/iframe.html?globals=versionSelector.enabled:!false&version=branch:feat-button-ali&args=&id=atoms-button--all-variants&viewMode=story');
    await page.waitForLoadState('networkidle');
  } catch (error) {
    console.error('Error during navigation:', error);
  }

  // Wait for the content to be visible
  const buttons = await page.locator('button').all();
  console.log(`Found ${buttons.length} buttons`);

  for (let i = 0; i < buttons.length; i++) {
    const button = buttons[i];
    const text = await button.textContent();
    const classes = await button.getAttribute('class');
    console.log(`Button ${i + 1}: Text="${text}", Classes="${classes}"`);
  }

  // Keep the browser open for debugging purposes
  await page.pause();

  // Close the browser when done
  await browser.close();
})();
