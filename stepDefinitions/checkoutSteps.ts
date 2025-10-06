import { When, Then, expect } from '../features/fixture/fixtures';

import InventoryPage from '../pages/inventoryPage';
import CheckoutInfoPage from '../pages/checkoutInfoPage';
import CheckoutCompletePage from '../pages/checkoutCompletePage';
import CheckoutOverviewPage from '../pages/checkoutOverviewPage';
import CartPage from '../pages/cartPage';

let inventoryPage: InventoryPage;
let checkoutInfoPage: CheckoutInfoPage;
let checkoutCompletePage: CheckoutCompletePage;
let checkoutOverviewPage: CheckoutOverviewPage;
let cartPage: CartPage;

When('I add {string} to my cart and start checkout', async ({ page }, name: string) => {
  inventoryPage = new InventoryPage(page);
  expect(await inventoryPage.isLoaded()).toBeTruthy();
  await inventoryPage.addProductToCartByName(name);
  await inventoryPage.openCart();
  cartPage = new CartPage(page);
  const cart = await cartPage.isLoaded();
  expect(cart).toBeTruthy();
  await cartPage.proceedToCheckout();
  checkoutInfoPage = new CheckoutInfoPage(page);
  expect(await checkoutInfoPage.isLoaded()).toBeTruthy();
});

When(
  'I provide checkout details {string} , {string} , {string} and continue',
  async ({ page }, fname: string, lname: string, zip: string) => {
    await checkoutInfoPage.fillInfo(fname, lname, zip);
    await checkoutInfoPage.continueToOverview();
  },
);

When('I finish the checkout', async ({ page }) => {
  checkoutOverviewPage = new CheckoutOverviewPage(page);
  expect(await checkoutOverviewPage.isLoaded()).toBeTruthy();
  await checkoutOverviewPage.finish();
});

Then('I should see the order completion page', async ({ page }) => {
  checkoutCompletePage = new CheckoutCompletePage(page);
  expect(await checkoutCompletePage.isLoaded()).toBeTruthy();
});
