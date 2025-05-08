import { test } from "playwright-bdd";
import { After, AfterAll, Before, BeforeAll } from "../features/fixture/fixtures";
import { getEnv } from "../support/env/env";
import { options } from "../support/logger/logger";



// This is a global setup file
// It will be executed before all tests in the project
// It is useful for setting up resources, initializing connections, etc.
// For example, you can set up a database connection or start a server
BeforeAll(async ({ browser }) => {
  console.log("Setting up before ALL tests");
  getEnv();
  // Add your database setup logic here
  // For example, you can connect to the database and run setup scripts
});

Before(async function ({ logger }){
  //logger = options(test.info().title, "debug");
  logger.info("Setting up before the test: " + test.info().title);
  
  // Add your test setup logic here
  // For example, you can navigate to a specific page or perform actions
});

// BeforeStep(async ({ logger }) => {
//   logger.info(`Starting step`);
//   // Add any setup logic you want to run before each step
//   // For example, you can log the step or perform some actions
// });

// // This is a global teardown file
// // It will be executed after all tests in the project are completed
// // It is useful for cleaning up resources, closing connections, etc.
// AfterStep(async ({  logger }) => {
//   logger.info(`Step completed`);
//   // Add any cleanup logic you want to run after each step
//   // For example, you can log the step or perform some actions
// });

After(async ({ logger, $test }) => {
  logger.info("After each test");
  if ($test.info().status === "failed") {
    logger.fail("Test Failed: " + $test.info().title);
  }
  else if ($test.info().status === "passed") {
    logger.pass("Test Passed: " + $test.info().title);
  }
  else logger.debug("Test completed: " + $test.info().status?.toUpperCase());
  // Add your test cleanup logic here
  // For example, you can close the page or perform actions
});

AfterAll(async ({  }) => {
  console.log("Tear down after ALL tests");
});
