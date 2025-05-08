import { test as base, createBdd } from 'playwright-bdd';
import { Logger } from "winston";
import { options } from '../../support/logger/logger';

type Fixtures = {
  // set types of your fixtures
  logger: Logger;
};


const test = base.extend<Fixtures>({
  logger: 
    async ({}, use) => {
      // Initialize your logger here
      let logger = options(test.info().title, "debug");//{} as Logger; // Replace with actual logger initialization
      await use(logger);
    }
});
export { test };
export const { Given, When, Then, BeforeAll, AfterAll, Before, After } = createBdd(test);
export const expect = test.expect;