import { Given, When, Then, expect } from '../features/fixture/fixtures';
import { LoginPage } from '../pages/loginPage';

let loginPage: LoginPage;

Given('I am on the login page', async ({ logger, page }) => {
  logger.info('Navigating to the login page');
  loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
});

When(
  'I enter valid username and password {string} and {string}',
  async ({ logger }, username, password) => {
    logger.info('Entering valid username and password');
    await loginPage.loginWithValidCredentials(username, password);
  },
);

When('I click on the login button', async ({ logger }) => {
  logger.info('Clicking on the login button');
});

Then('I verify that logged in successfully', async ({ logger, page }) => {
  expect(await page.url()).toContain('inventory');
  logger.info('Verifying that logged in successfully');
});
