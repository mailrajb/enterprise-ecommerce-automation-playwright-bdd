import { Page, expect } from 'playwright';

export class CartPage {
  constructor(private page: Page) {}

  async assertItemInCart(name: string): Promise<void> {
    await expect(this.page.locator('.cart_item').filter({ hasText: name })).toBeVisible();
  }

  async checkout(): Promise<void> {
    await this.page.locator('[data-test="checkout"]').click();
  }
}
