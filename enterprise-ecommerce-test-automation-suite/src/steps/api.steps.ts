import { Given, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { ApiClient } from '../api/ApiClient';

Given('I call the sample API endpoint {string}', async function (path: string) {
  const api = new ApiClient();
  const res = await api.get(path);
  // attach response for report visibility
  await this.attach(JSON.stringify({ status: res.status, data: res.data }, null, 2), 'application/json');
  // store for later assertions
  (this as any).lastApiResponse = res;
});

Then('the API response status should be {int}', async function (status: number) {
  const res = (this as any).lastApiResponse;
  expect(res.status).toBe(status);
});
