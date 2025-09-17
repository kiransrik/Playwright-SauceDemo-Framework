import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CartPage extends BasePage {
  private checkoutBtn = '[data-test="checkout"]';

  constructor(page: Page) {
    super(page);
  }

  async checkout() {
    await this.click(this.checkoutBtn);
  }

  async expectOnCartPage() {
    await expect(this.page.locator('.title')).toHaveText('Your Cart');
  }
}
