import { Page, Locator } from '@playwright/test';

export class ButtonsPage {
  readonly page: Page;
  readonly primaryButton: Locator;
  readonly secondaryButton: Locator;
  readonly tertiaryButton: Locator;
  readonly primaryDisabledButton: Locator;
  readonly secondaryDisabledButton: Locator;
  readonly tertiaryDisabledButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.primaryButton = page.locator('button.d-button-kind__primary:not(.disabled)').first();
    this.secondaryButton = page.locator('button.d-button-kind__secondary:not(.disabled)').first();
    this.tertiaryButton = page.locator('button.d-button-kind__tertiary:not(.disabled)').first();
    this.primaryDisabledButton = page.locator('button.d-button-kind__primary.disabled').first();
    this.secondaryDisabledButton = page.locator('button.d-button-kind__secondary.disabled').first();
    this.tertiaryDisabledButton = page.locator('button.d-button-kind__tertiary.disabled').first();
  }

  async getPrimaryButtonWithText(text: string): Promise<Locator> {
    return this.page.locator(`button.d-button-kind__primary:has-text("${text}")`).first();
  }

  async getSecondaryButtonWithText(text: string): Promise<Locator> {
    return this.page.locator(`button.d-button-kind__secondary:has-text("${text}")`).first();
  }

  async getTertiaryButtonWithText(text: string): Promise<Locator> {
    return this.page.locator(`button.d-button-kind__tertiary:has-text("${text}")`).first();
  }
}