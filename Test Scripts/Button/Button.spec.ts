import { Given, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ButtonsPage } from './ButtonPage';
import { Actions } from '../../Utils/Actions';
import buttonTestData from '../../Data/button.data.json';
import { BrowsersWorld } from '../../Utils/Browsers';
import percySnapshot from '@percy/playwright';

let buttonsPage: ButtonsPage;
let actions: Actions;

// Define a type for the themes
type Theme = 'base' | 'base-dark' | 'centrum' | 'centrum-dark' | 'voltaren' | 'voltaren-dark';

const urlMap: Record<Theme, string> = {
  "base": buttonTestData.allVariantsUrl,
  "base-dark": buttonTestData.allVariantsUrlT2,
  "centrum": buttonTestData.allVariantsUrlT3,
  "centrum-dark": buttonTestData.allVariantsUrlT4,
  "voltaren": buttonTestData.allVariantsUrlT5,
  "voltaren-dark": buttonTestData.allVariantsUrlT6
};

Before(async function(this: BrowsersWorld) {
  await this.init();
  buttonsPage = new ButtonsPage(this.page);
  actions = new Actions(this.page);
});

Given('the user navigates to the all variants page for {string}', async function(this: BrowsersWorld, theme: string) {
  const url = urlMap[theme as Theme];
  await actions.authenticateAndNavigate(url);
});

Then('the primary button should be displayed', async function(this: BrowsersWorld) {
  await expect(buttonsPage.primaryButton).toBeVisible();
});

Then('the secondary button should be displayed', async function(this: BrowsersWorld) {
  await expect(buttonsPage.secondaryButton).toBeVisible();
});

Then('a visual snapshot is taken for comparison with name {string}', async function(this: BrowsersWorld, theme: string) {
  await percySnapshot(this.page, `All Variants Button Page - ${theme}`);
});