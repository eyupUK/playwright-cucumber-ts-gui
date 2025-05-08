import { test as base, createBdd } from 'playwright-bdd';

type Fixtures = {
  // set types of your fixtures
};


export const test = base.extend<Fixtures>({});
export const { Given, When, Then, BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep } = createBdd(test);
export const expect = test.expect;