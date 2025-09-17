import { Page, expect } from '@playwright/test';
import BasePage from './BasePage';
import { BASE_URL } from '../config/config';
import { log } from '../utils/logger';

export default class LoginPage extends BasePage {
  private username = '#user-name';
  private password = '#password';
  private loginBtn = '#login-button';
  private errorMsg = '[data-test="error"]';

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.goto(BASE_URL);
    await expect(this.page).toHaveTitle(/Swag Labs/);
  }

  async login(username: string, password: string) {
    log.info('Attempting login', username);
    await this.type(this.username, username);
    await this.type(this.password, password);
    await this.click(this.loginBtn);
  }

  async expectLoginSuccess() {
    await expect(this.page.locator('.title')).toHaveText('Products');
  }

  async expectLoginFailure() {
    await expect(this.page.locator(this.errorMsg)).toBeVisible();
  }
}
