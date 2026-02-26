import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class InventoryPage {
  constructor(private page: Page) {}

  async assertLoaded(): Promise<void> {
    await expect(this.page.locator('[data-test="title"]')).toHaveText('Products');
  }

  async addItemToCartByName(name: string): Promise<void> {
    const item = this.page.locator('.inventory_item').filter({ hasText: name });
    await item.locator('button:has-text("Add to cart")').click();
  }

  async openCart(): Promise<void> {
    await this.page.locator('[data-test="shopping-cart-link"]').click();
  }
}
