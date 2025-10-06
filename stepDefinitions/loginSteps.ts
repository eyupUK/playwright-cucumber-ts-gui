import { Given, When, Then, expect } from '../features/fixture/fixtures';
import { LoginPage } from '../pages/loginPage';

let loginPage: LoginPage;

// Note: For timeout configuration, use test.setTimeout() in test files or
// configure timeout in playwright.config.ts

Given('I am on the SauceDemo login page', async ({ logger, page }) => {
  logger.info('Starting scenario...');
  loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
});

When(
  'I login with username {string} and password {string}',
  async ({ logger }, username: string, password: string) => {
    logger.info(`Logging in with username: ${username}`);
    await loginPage.loginWithValidCredentials(username, password);
  },
);

Then('I should see the products page', async ({ page }) => {
  const title = await page.title();
  expect(title).toContain('Swag Labs');
});

Then('I should see an error message containing {string}', async ({ page }, errorMsg: string) => {
  // This would need to be implemented in the LoginPage class
  // For now, we'll check for any error element on the page
  const errorElement = page.locator('[data-test="error"]');
  const errorMessage = await errorElement.textContent();
  expect(errorMessage).toContain(errorMsg);
});
