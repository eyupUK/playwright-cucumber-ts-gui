import { test as base, createBdd } from 'playwright-bdd';
import { Logger } from 'winston';
import { options } from '../../support/logger/logger';
import PlaywrightWrapper from '../../support/wrapper/PlaywrightWrappers';

type Fixtures = {
  // set types of your fixtures
  logger: Logger;
  base: PlaywrightWrapper;
};

const test = base.extend<Fixtures>({
  logger: async ({}, use) => {
    // Initialize your logger here
    let logger = options(test.info().title, 'debug'); //{} as Logger; // Replace with actual logger initialization
    await use(logger);
  },
  base: async ({ page }, use) => {
    // Initialize your Playwright wrapper here
    const base = new PlaywrightWrapper(page);
    await use(base);
  },
});
export { test };
export const { Given, When, Then, BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep } =
  createBdd(test);
export const expect = test.expect;
