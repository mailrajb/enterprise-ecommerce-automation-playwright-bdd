import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';
import { env } from '../config/env';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

Given('I am on the login page', async function (this: CustomWorld) {
  expect(this.page).toBeTruthy();
  const login = new LoginPage(this.page!);
  await login.goto(env.baseUrl);
});

When('I login with valid credentials', async function (this: CustomWorld) {
  const login = new LoginPage(this.page!);
  await login.login(env.username, env.password);
});

When('I login with invalid credentials', async function (this: CustomWorld) {
  const login = new LoginPage(this.page!);
  await login.login('invalid_user', 'wrong_password');
});

Then('I should see the products page', async function (this: CustomWorld) {
  const inventory = new InventoryPage(this.page!);
  await inventory.assertLoaded();
});

Then('I should see a login error', async function (this: CustomWorld) {
  const login = new LoginPage(this.page!);
  await login.assertLoginError();
});

When('I add {string} to the cart', async function (this: CustomWorld, itemName: string) {
  const inventory = new InventoryPage(this.page!);
  await inventory.assertLoaded();
  await inventory.addItemToCartByName(itemName);
  await inventory.openCart();
});

Then('I should see {string} in the cart', async function (this: CustomWorld, itemName: string) {
  const cart = new CartPage(this.page!);
  await cart.assertItemInCart(itemName);
});

When('I complete checkout with customer info', async function (this: CustomWorld) {
  const cart = new CartPage(this.page!);
  await cart.checkout();

  const checkout = new CheckoutPage(this.page!);
  await checkout.fillInfo('Jahnavi', 'Redrouthu', '64110');
  await checkout.finish();
});

Then('I should see the order confirmation', async function (this: CustomWorld) {
  const checkout = new CheckoutPage(this.page!);
  await checkout.assertComplete();
});
