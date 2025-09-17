import { test as base } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { DEFAULT_USER, DEFAULT_PASS } from '../config/config';

export const test = base.extend<{ login: LoginPage }>({
  login: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.open();
    await loginPage.login(DEFAULT_USER.standard, DEFAULT_PASS);
    await loginPage.expectLoginSuccess();
    await use(loginPage);
  }
});

export { expect } from '@playwright/test';
