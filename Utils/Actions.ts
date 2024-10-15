import { Page, Locator } from '@playwright/test';
import fs from 'fs';
import path from 'path';

export class Actions {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async isVisible(locator: Locator | string): Promise<boolean> {
    if (typeof locator === 'string') {
      return await this.page.locator(locator).isVisible();
    } else {
      return await locator.isVisible();
    }
  }

  async authenticateAndNavigate(url: string): Promise<void> {
    const authFilePath = path.join(__dirname, '../Data/BasicAuth.json');
    const authData = JSON.parse(fs.readFileSync(authFilePath, 'utf-8'));

    await this.page.context().setHTTPCredentials({
      username: authData.username,
      password: authData.password,
    });

    await this.page.goto(url, { waitUntil: 'networkidle' });
  }
}