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
    this.primaryButton = this.getButton('primary', { size: 'default', flex: 'hug' });
    this.secondaryButton = this.getButton('secondary', { size: 'default', flex: 'hug' });
    this.tertiaryButton = this.getButton('tertiary', { size: 'default', flex: 'hug' });
    this.primaryDisabledButton = this.getButton('primary', { disabled: true, size: 'default', flex: 'hug' });
    this.secondaryDisabledButton = this.getButton('secondary', { disabled: true, size: 'default', flex: 'hug' });
    this.tertiaryDisabledButton = this.getButton('tertiary', { disabled: true, size: 'default', flex: 'hug' });
  }

  private getButton(kind: 'primary' | 'secondary' | 'tertiary', options: {
    disabled?: boolean,
    size?: 'default' | 'small',
    flex?: 'hug' | 'stretch',
    iconPosition?: 'left' | 'right' | 'none',
    text?: string
  } = {}): Locator {
    let selector = `button.d-button-kind__${kind}`;
    
    if (options.disabled) {
      selector += '.disabled';
    } else {
      selector += ':not(.disabled)';
    }

    if (options.size) {
      selector += `.d-button-size__${options.size}`;
    }

    if (options.flex) {
      selector += `.d-button-flex__${options.flex}`;
    }

    if (options.iconPosition && options.iconPosition !== 'none') {
      selector += `.d-button-icon-primary-inline.d-button-icon-${options.iconPosition}`;
    }

    if (options.text) {
      selector += `:has-text("${options.text}")`;
    }

    return this.page.locator(selector).first();
  }

  getButtonWithText(kind: 'primary' | 'secondary' | 'tertiary', text: string): Locator {
    return this.getButton(kind, { text: text });
  }

  getAllButtons(): Locator {
    return this.page.locator('button.d-button');
  }
}