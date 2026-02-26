import { Page } from 'playwright';
import { expect } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto(baseUrl: string): Promise<void> {
    await this.page.goto(baseUrl, { waitUntil: 'domcontentloaded' });
  }

  async login(username: string, password: string): Promise<void> {
    await this.page.locator('[data-test="username"]').fill(username);
    await this.page.locator('[data-test="password"]').fill(password);
    await this.page.locator('[data-test="login-button"]').click();
  }

  async assertLoginError(): Promise<void> {
    await expect(this.page.locator('[data-test="error"]')).toBeVisible();
  }
}
