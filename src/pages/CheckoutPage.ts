import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';

export default class CheckoutPage extends BasePage {
  private firstName = '[data-test="firstName"]';
  private lastName = '[data-test="lastName"]';
  private postal = '[data-test="postalCode"]';
  private continueBtn = '[data-test="continue"]';
  private finishBtn = '[data-test="finish"]';

  constructor(page: Page) {
    super(page);
  }

  async fillDetails(first: string, last: string, post: string) {
    await this.type(this.firstName, first);
    await this.type(this.lastName, last);
    await this.type(this.postal, post);
    await this.click(this.continueBtn);
  }

  async finish() {
    await this.click(this.finishBtn);
  }

  async expectOrderComplete() {
    await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
  }
}
