import { Page, Locator } from '@playwright/test';

export class ButtonsPage {
  readonly page: Page;
  readonly primaryButton: Locator;
  readonly secondaryButton: Locator;
  readonly tertiaryButton: Locator;
  // Add more button locators as needed

  constructor(page: Page) {
    this.page = page;
    this.primaryButton = page.locator('button.d-button.d-button-size__large.primary').first();
    this.secondaryButton = page.locator('button.d-button.d-button-size__large.secondary').first();
    this.tertiaryButton = page.locator('button.d-button.d-button-size__large.tertiary').first();
    // Initialize other button locators here
  }
}
