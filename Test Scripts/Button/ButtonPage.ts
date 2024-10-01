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

/*import { Page } from '@playwright/test';
import buttonTestData from '../../Data/button.data.json';

export class ButtonsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Locators as global variables
  //public primaryButtonLocator = 'button.d-button.d-button-size__large.primary[aria-label="button Button"]:has(div.t-button:text("Button")):first-child';

 //public primaryButtonLocator = 'button.d-button.primary[aria-label="button Button"]:nth-child(1)';
  //public primaryButtonLocator = 'button.d-button.primary[aria-label="button Button"]';
  public secondaryButtonLocator = 'button.d-button.secondary[aria-label="button Button"]';
  public primaryButtonLocator = '.sb-story > div > button.d-button.d-button-size__large.primary';


}
*/

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