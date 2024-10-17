import { Given, Then, Before, After } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ButtonsPage } from './ButtonPage';
import { Actions } from '../../Utils/Actions';
import buttonTestData from '../../Data/button.data.json';
import { BrowsersWorld } from '../../Utils/Browsers'; // Updated import
import percySnapshot from '@percy/playwright';

let buttonsPage: ButtonsPage;
let actions: Actions;

Before(async function(this: BrowsersWorld) { // Updated to BrowsersWorld
  await this.init();
  buttonsPage = new ButtonsPage(this.page);
  actions = new Actions(this.page);
});

// Updated Given step to use Actions for authentication and navigation
Given('the user navigates to the all variants page', async function(this: BrowsersWorld) { // Updated to BrowsersWorld
  await actions.authenticateAndNavigate(buttonTestData.allVariantsUrl);
});

Then('the primary button should be displayed', async function(this: BrowsersWorld) { // Updated to BrowsersWorld
  await expect(buttonsPage.primaryButton).toBeVisible();
});

Then('the secondary button should be displayed', async function(this: BrowsersWorld) { // Updated to BrowsersWorld
  await expect(buttonsPage.secondaryButton).toBeVisible();
});

Then('a visual snapshot is taken for comparison', async function(this: BrowsersWorld) { // Updated to BrowsersWorld
  await percySnapshot(this.page, 'All Variants Button Page');
});
