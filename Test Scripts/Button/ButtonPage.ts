import { Page } from '@playwright/test';
import buttonTestData from '../../Data/button.data.json';

export class ButtonsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators as global variables
  public primaryButtonLocator = 'button.d-button.primary[aria-label="button Button"]';
  public secondaryButtonLocator = 'button.d-button.secondary[aria-label="button Button"]';

  // Navigation method
  async navigateToAllVariants() {
    await this.page.goto(buttonTestData.allVariantsUrl);
  }
}


/*import { Page } from 'playwright';

export default class ButtonPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigate(url: string) {
    await this.page.goto(url);
  }

  getIframeLocator() {
    return this.page.frameLocator('#storybook-preview-iframe');
  }

  getButton(buttonId: string) {
    const iframeLocator = this.getIframeLocator();
    return iframeLocator.locator(buttonId).first();
  }

  async isButtonVisible(buttonId: string) {
    const button = this.getButton(buttonId);
    return await button.isVisible();
  }

  async getButtonClasses(buttonId: string) {
    const button = this.getButton(buttonId);
    return await button.getAttribute('class');
  }

  async getButtonLabel(buttonId: string) {
    const button = this.getButton(buttonId);
    return await button.getAttribute('aria-label');
  }
}
  */