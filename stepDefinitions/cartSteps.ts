import { When, Then, expect } from '../features/fixture/fixtures';

import InventoryPage from '../pages/inventoryPage';
import CartPage from '../pages/cartPage';

let inventoryPage: InventoryPage;
let cartPage: CartPage;

When('I add the product {string} to the cart', async ({ page }, name: string) => {
  // Write code here that turns the phrase above into concrete actions
  inventoryPage = new InventoryPage(page);
  await inventoryPage.isLoaded();
  await inventoryPage.addProductToCartByName(name);
});

Then('the cart badge should show {int}', async ({ page }, count: number) => {
  const badgeCount = await inventoryPage.getCartBadgeCount();
  expect(badgeCount).toBe(count);
});

When('I open the cart', async ({ page }) => {
  await inventoryPage.openCart();
  cartPage = new CartPage(page);
  await cartPage.isLoaded();
});

Then('the cart should contain {string}', async ({ page }, name: string) => {
  expect(await cartPage.itemNames()).toContain(name);
});
