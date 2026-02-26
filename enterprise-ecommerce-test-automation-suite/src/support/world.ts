import { setWorldConstructor, World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium, firefox, webkit } from 'playwright';
import { env } from '../config/env';

export type BrowserName = 'chromium' | 'firefox' | 'webkit';

export class CustomWorld extends World {
  browser?: Browser;
  context?: BrowserContext;
  page?: Page;

  // Per-scenario config (can be overridden with tags later)
  browserName: BrowserName = 'chromium';

  constructor(options: IWorldOptions) {
    super(options);
  }

  async launch(): Promise<void> {
    const launcher =
      this.browserName === 'firefox' ? firefox : this.browserName === 'webkit' ? webkit : chromium;

    this.browser = await launcher.launch({ headless: env.headless });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async close(): Promise<void> {
    await this.page?.close().catch(() => undefined);
    await this.context?.close().catch(() => undefined);
    await this.browser?.close().catch(() => undefined);
  }
}

setWorldConstructor(CustomWorld);
