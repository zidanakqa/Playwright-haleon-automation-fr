import { Page } from '@playwright/test';
import { AxeResults } from 'axe-core';

declare global {
  namespace NodeJS {
    interface Global {
      checkA11y: (page: Page, context?: any, options?: any) => Promise<AxeResults>;
    }
  }
}

export async function runAccessibilityAudit(page: Page): Promise<AxeResults> {
  if (typeof (global as any).checkA11y !== 'function') {
    throw new Error('checkA11y is not available. Make sure it\'s properly set up in your global setup.');
  }

  return await (global as any).checkA11y(page, null, {
    axeOptions: {
      runOnly: {
        type: 'tag',
        values: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'],
      },
    },
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
}

export function hasNoAccessibilityViolations(results: AxeResults): boolean {
  return results.violations.length === 0;
}

export function formatAccessibilityViolations(results: AxeResults): string {
  if (results.violations.length === 0) {
    return 'No accessibility violations found.';
  }

  return results.violations
    .map((violation) => {
      return `
        Rule: ${violation.id}
        Impact: ${violation.impact}
        Description: ${violation.description}
        Help: ${violation.help}
        Elements: ${violation.nodes.map((node) => node.html).join(', ')}
      `;
    })
    .join('\n');
}
