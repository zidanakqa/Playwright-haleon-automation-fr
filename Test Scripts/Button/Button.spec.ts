//npx cucumber-js
//npx percy exec -- cucumber-js
//TEST_ENV=desktop npx cucumber-js
//TEST_ENV=desktop cucumber-js
import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ButtonsPage } from './ButtonPage';
import { Actions } from '../../Utils/Actions';
import buttonTestData from '../../Data/button.data.json'; // Import button data

let buttonsPage: ButtonsPage;
let actions: Actions;

Given('the user navigates to the all variants page', async function() {
  buttonsPage = new ButtonsPage(this.page);
  actions = new Actions(this.page);
  await this.page.goto(buttonTestData.allVariantsUrl); // Use URL from the data file
});

Then('the primary button should be displayed', async function() {
  expect(await actions.isVisible(buttonsPage.primaryButtonLocator)).toBeTruthy();
});

Then('the secondary button should be displayed', async function() {
  expect(await actions.isVisible(buttonsPage.secondaryButtonLocator)).toBeTruthy();
});

// If you want to add a step for Percy snapshot
Then('a visual snapshot is taken for comparison', async function() {
  await this.percySnapshot('All Variants Button Page');
});



/*
import { Given, Then, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import * as rawButtonData from '../../Data/button.data.json';
import percySnapshot from '@percy/playwright';

interface ButtonInfo {
  selector: string;
  url: string;
  classes: string;
  label: string;
  labelSelector: string;
}

interface ButtonData {
  [key: string]: ButtonInfo;
}

const buttonData: ButtonData = rawButtonData as unknown as ButtonData;

let scenarioCount = 0;

Given('user lands on the {string}', async function(url: string) {
  await this.page.goto(url);
});

Given('user opens a page at {string}', async function(url: string) {
  await this.page.goto(url);
});

Then('the button {string} should be visible', async function(buttonName: string) {
  const buttonInfo = buttonData[buttonName];

  console.log(`Looking for button with selector: ${buttonInfo.selector}`);

  try {
    if (buttonInfo.url.includes('iframe.html')) {
      await this.page.locator(buttonInfo.selector).waitFor({ state: 'visible', timeout: 5000 });
      const isVisible = await this.page.locator(buttonInfo.selector).isVisible();
      console.log(`Button ${buttonName} is visible: ${isVisible}`);
      expect(isVisible).toBeTruthy();
    } else {
      await this.page.waitForSelector('#storybook-preview-iframe');
      const frame = this.page.frameLocator('#storybook-preview-iframe');
      await frame.locator(buttonInfo.selector).waitFor({ state: 'visible', timeout: 5000 });
      const isVisible = await frame.locator(buttonInfo.selector).isVisible();
      console.log(`Button ${buttonName} is visible: ${isVisible}`);
      expect(isVisible).toBeTruthy();
    }
  } catch (error) {
    console.error(`Error while checking button ${buttonName} visibility: ${error}`);
    throw new Error(`Button ${buttonName} is not visible or not found`);
  }
});

Then('the button {string} should have classes {string}', async function(buttonName: string, expectedClasses: string) {
  const buttonInfo = buttonData[buttonName];
  
  let button;
  if (buttonInfo.url.includes('iframe.html')) {
    button = this.page.locator(buttonInfo.selector);
  } else {
    const frame = this.page.frameLocator('#storybook-preview-iframe');
    button = frame.locator(buttonInfo.selector);
  }
  
  const actualClasses = await button.getAttribute('class');
  
  expectedClasses.split(' ').forEach(className => {
    expect(actualClasses).toContain(className);
  });
});

Then('the button {string} should have label {string}', async function(buttonName: string, expectedLabel: string) {
  const buttonInfo = buttonData[buttonName];
  
  let button;
  if (buttonInfo.url.includes('iframe.html')) {
    button = this.page.locator(buttonInfo.selector);
  } else {
    const frame = this.page.frameLocator('#storybook-preview-iframe');
    button = frame.locator(buttonInfo.selector);
  }
  
  const actualLabel = await button.locator(buttonInfo.labelSelector).textContent();
  
  expect(actualLabel).toBe(expectedLabel);
});

// Add this After hook to take Percy snapshots
After(async function(scenario) {
  scenarioCount++;
  
  if (scenarioCount <= 2) {
    // Take snapshot after scenarios 1 & 2 (part of Scenario Outline)
    await percySnapshot(this.page, `Button Scenario ${scenarioCount}`);
  } else if (scenarioCount === 3) {
    // Take snapshot after scenario 3
    await percySnapshot(this.page, 'Specific Button Variation');
  }
});
*/
  /*

  test('Button click redirects to external link', async ({ page, context }) => {
    const [newPage] = await Promise.all([
      context.waitForEvent('page'),
      page.click('button.external-link')
    ]);

    await newPage.waitForLoadState();
    expect(newPage.url()).toContain('expected-external-url');

    // Take Percy snapshot of the new page
    await percySnapshot(newPage, 'External Link Page');
  });

  test('Keyboard navigation for internal link', async ({ page }) => {
    await page.keyboard.press('Tab');
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/expected-internal-url/);

    // Take Percy snapshot after navigation
    await percySnapshot(page, 'Internal Link Page');
  });

  test('Button activation using assistive technology', async ({ page }) => {
    const button = page.locator('button[aria-label="Accessible Button"]');
    await button.click();

    await expect(page).toHaveURL(/expected-url-after-activation/);

    // Take Percy snapshot after activation
    await percySnapshot(page, 'Page After Assistive Technology Activation');
  });
}); */