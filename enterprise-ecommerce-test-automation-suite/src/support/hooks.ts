import { Before, After, Status } from '@cucumber/cucumber';
import { CustomWorld } from './world';

Before(async function (this: CustomWorld) {
  await this.launch();
});

After(async function (this: CustomWorld, scenario) {
  // Capture screenshot on failure for debugging
  if (scenario.result?.status === Status.FAILED && this.page) {
    const png = await this.page.screenshot({ fullPage: true });
    await this.attach(png, 'image/png');
  }
  await this.close();
});
