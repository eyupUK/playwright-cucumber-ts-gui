import { After, AfterAll, AfterStep, Before, BeforeAll, BeforeStep } from "../features/steps/fixtures";


// This is a global setup file
// It will be executed before all tests in the project
// It is useful for setting up resources, initializing connections, etc.
// For example, you can set up a database connection or start a server
BeforeAll(async ({ browser }) => {
  console.log("Setting up before ALL tests");
  // Add your database setup logic here
  // For example, you can connect to the database and run setup scripts
});

Before(async ({ page }) => {
  console.log("Setting up before EACH test");
  // Add your test setup logic here
  // For example, you can navigate to a specific page or perform actions
});

BeforeStep(async ({ }) => {
  console.log(`Starting step`);
  // Add any setup logic you want to run before each step
  // For example, you can log the step or perform some actions
});

// This is a global teardown file
// It will be executed after all tests in the project are completed
// It is useful for cleaning up resources, closing connections, etc.
AfterStep(async ({  }) => {
  console.log(`Step completed`);
  // Add any cleanup logic you want to run after each step
  // For example, you can log the step or perform some actions
});

After(async ({ page }) => {
  console.log("After each test");
  // Add your test cleanup logic here
  // For example, you can close the page or perform actions
});

AfterAll(async ({ browser }) => {
  console.log("Tear down after ALL tests");
});
