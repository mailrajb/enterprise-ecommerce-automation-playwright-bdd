import { Page, expect } from 'playwright';

export class CheckoutPage {
  constructor(private page: Page) {}

  async fillInfo(first: string, last: string, zip: string): Promise<void> {
    await this.page.locator('[data-test="firstName"]').fill(first);
    await this.page.locator('[data-test="lastName"]').fill(last);
    await this.page.locator('[data-test="postalCode"]').fill(zip);
    await this.page.locator('[data-test="continue"]').click();
  }

  async finish(): Promise<void> {
    await this.page.locator('[data-test="finish"]').click();
  }

  async assertComplete(): Promise<void> {
    await expect(this.page.locator('[data-test="complete-header"]')).toHaveText('Thank you for your order!');
  }
}
