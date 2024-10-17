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
    console.log('Auth File Path:', authFilePath);

    // Check if the file exists and read its contents
    if (fs.existsSync(authFilePath)) {
      const authData = JSON.parse(fs.readFileSync(authFilePath, 'utf-8'));
      console.log('Auth Data:', authData);

      // Ensure there are no leading or trailing spaces in the credentials
      authData.username = authData.username.trim();
      authData.password = authData.password.trim();

      // Set HTTP authentication
      await this.page.context().setHTTPCredentials({
        username: authData.username,
        password: authData.password,
      });
      console.log('HTTP credentials set:', authData.username);
    } else {
      console.error('Auth file not found.');
      return;
    }

    try {
      // Navigate to the specified URL
      await this.page.goto(url, { waitUntil: 'networkidle' });
      console.log('Navigation successful to:', url);
    } catch (error) {
      console.error('Error during navigation:', error);
    }
  }
}
