import axios, { AxiosInstance } from 'axios';
import { env } from '../config/env';

export class ApiClient {
  private client: AxiosInstance;

  constructor(baseURL: string = env.apiBaseUrl) {
    this.client = axios.create({ baseURL, timeout: 15000 });
  }

  async get(path: string) {
    return this.client.get(path);
  }
}
