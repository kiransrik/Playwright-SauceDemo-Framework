import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class InventoryPage extends BasePage {
  private cartBadge = '.shopping_cart_badge';
  private addToCartBtn = (name: string) => `button[data-test="add-to-cart-${name}"]`;
  private cartLink = '.shopping_cart_link';

  constructor(page: Page) {
    super(page);
  }

  async addProductById(id: string) {
    await this.click(this.addToCartBtn(id));
  }

  async openCart() {
    await this.click(this.cartLink);
  }

  async expectCartCount(expected: number) {
    if (expected === 0) {
      await expect(this.page.locator(this.cartBadge)).toHaveCount(0);
    } else {
      await expect(this.page.locator(this.cartBadge)).toHaveText(String(expected));
    }
  }
}
