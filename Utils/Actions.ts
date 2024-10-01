import { Page, Locator } from '@playwright/test';

export class Actions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Method to check if an element is visible
  // handles string also
  async isVisible(locator: Locator | string): Promise<boolean> {
    // Check if locator is of type string or Locator and then act accordingly
    if (typeof locator === 'string') {
      return await this.page.locator(locator).isVisible();
    } else {
      return await locator.isVisible(); // Directly use the Locator object's isVisible method
    }
  }
}
