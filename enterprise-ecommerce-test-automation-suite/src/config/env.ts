import * as dotenv from 'dotenv';

dotenv.config();

export const env = {
  baseUrl: process.env.BASE_URL ?? 'https://www.saucedemo.com',
  username: process.env.E2E_USERNAME ?? 'standard_user',
  password: process.env.E2E_PASSWORD ?? 'secret_sauce',
  apiBaseUrl: process.env.API_BASE_URL ?? 'https://jsonplaceholder.typicode.com',
  headless: (process.env.HEADLESS ?? 'true').toLowerCase() !== 'false',
};
