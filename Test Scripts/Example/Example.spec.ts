/*import { Given, Then } from '@cucumber/cucumber';
import { chromium, Page } from 'playwright';

let page: Page;

Given('the user opens Google', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  await page.goto('https://www.google.com');
});

Then('the title should be {string}', async (expectedTitle: string) => {
  const actualTitle = await page.title();
  if (actualTitle !== expectedTitle) {
    throw new Error(`Expected title to be "${expectedTitle}" but got "${actualTitle}"`);
  }
}); */
/*import { Given, Then } from '@cucumber/cucumber';
import { chromium, Page } from 'playwright';
import * as buttonData from '../../data/button.data.json';
import ButtonPage from '../Button/buttonPage';

let page: Page;
let buttonPage: ButtonPage;

// Step to land on the provided URL
Given('user lands on the "{string}"', async (url: string) => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  page = await context.newPage();
  buttonPage = new ButtonPage(page);
  await buttonPage.navigate(url);
});

// Step to check if the button is visible
Then('the button "{string}" should be visible', async (buttonName: string) => {
  const isVisible = await buttonPage.isButtonVisible(buttonData[buttonName as keyof typeof buttonData].id);
  if (!isVisible) {
    throw new Error(`Button ${buttonName} is not visible`);
  }
});

// Step to check if the button has the correct classes
Then('the button "{string}" should have classes "{string}"', async (buttonName: string, classes: string) => {
  const buttonClasses = await buttonPage.getButtonClasses(buttonData[buttonName as keyof typeof buttonData].id);
  if (buttonClasses && !buttonClasses.includes(classes)) {
    throw new Error(`Button ${buttonName} does not have classes: ${classes}`);
  }
});

// Step to check if the button has the correct label
Then('the button "{string}" should have label "{string}"', async (buttonName: string, label: string) => {
  const buttonLabel = await buttonPage.getButtonLabel(buttonData[buttonName as keyof typeof buttonData].id);
  if (buttonLabel !== label) {
    throw new Error(`Button ${buttonName} does not have label: ${label}`);
  }
});

export {}; // Add this to ensure the module doesn't conflict with others

*/
// accessibility
/*
import { test, expect } from '@playwright/test';
import { runAccessibilityAudit, hasNoAccessibilityViolations, formatAccessibilityViolations } from '../utils/accessibility-helper';

test('Homepage accessibility test', async ({ page }) => {
  await page.goto('https://example.com');

  // Run your regular tests
  await expect(page).toHaveTitle(/Example Domain/);

  // Run accessibility audit
  const accessibilityResults = await runAccessibilityAudit(page);

  // Check if there are any violations
  expect(
    hasNoAccessibilityViolations(accessibilityResults), 
    `Accessibility violations found:\n${formatAccessibilityViolations(accessibilityResults)}`
  ).toBeTruthy();
});

*/