import { Given, When, Then, expect } from '../features/fixture/fixtures';

import InventoryPage from '../pages/inventoryPage';
import { LoginPage } from '../pages/loginPage';

let loginPage: LoginPage;
let inventoryPage: InventoryPage;

Given('I am logged in as a standard user', async ({ logger, page }) => {
  logger.info('Starting scenario...');
  loginPage = new LoginPage(page);
  await loginPage.navigateToLoginPage();
  await loginPage.loginWithValidCredentials('standard_user', 'secret_sauce');
});

When('I sort products by {string}', async ({ page }, sortOption: string) => {
  // Write code here that turns the phrase above into concrete actions
  inventoryPage = new InventoryPage(page);
  expect(await inventoryPage.isLoaded()).toBeTruthy();
  await inventoryPage.sortByVisibleText(sortOption);
});

Then('product prices should be in ascending order', async ({ page }) => {
  let prices = await inventoryPage.getAllPricesInOrder();
  const sortedPrices = [...prices].sort((a, b) => a - b);
  expect(prices).toEqual(sortedPrices);
});

Then('product names should be in descending order', async ({ page }) => {
  let names = await inventoryPage.getAllProductNames();
  expect(names).toEqual([...names].sort((a, b) => b.localeCompare(a)));
});
