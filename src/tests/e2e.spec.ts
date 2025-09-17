import { test } from '../fixtures/auth.fixture';
import InventoryPage from '../pages/InventoryPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import { log } from '../utils/logger';

test('full flow: add to cart, checkout, logout', async ({ page, login }) => {
  const inventory = new InventoryPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await inventory.addProductById('sauce-labs-backpack');
  await inventory.expectCartCount(1);

  await inventory.openCart();
  await cart.expectOnCartPage();
  await cart.checkout();

  await checkout.fillDetails('Kiran', 'K', '12345');
  await checkout.finish();
  await checkout.expectOrderComplete();

  log.info('E2E checkout flow complete');

  await page.click('#react-burger-menu-btn');
  await page.click('#logout_sidebar_link');
  log.info('Logged out');
});
