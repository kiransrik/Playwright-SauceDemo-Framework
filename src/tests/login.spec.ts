import { test, expect } from '@playwright/test';
import LoginPage from '../pages/LoginPage';
import { DEFAULT_USER, DEFAULT_PASS } from '../config/config';
import { log } from '../utils/logger';

test.describe('Login tests - SauceDemo', () => {
  test('standard user can login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(DEFAULT_USER.standard, DEFAULT_PASS);
    await login.expectLoginSuccess();
    log.info('Standard user login passed');
  });

  test('locked out user cannot login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.open();
    await login.login(DEFAULT_USER.locked, DEFAULT_PASS);
    await login.expectLoginFailure();
    log.info('Locked user shows error as expected');
  });
});
