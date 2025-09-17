import { Page } from '@playwright/test';
import { log } from '../utils/logger';

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(url: string) {
    try {
      log.info(`Navigating to ${url}`);
      await this.page.goto(url);
    } catch (err) {
      log.error('Goto failed', err);
      throw err;
    }
  }

  async click(selector: string) {
    try {
      await this.page.click(selector);
    } catch (err) {
      log.error(`Click failed: ${selector}`, err);
      throw err;
    }
  }

  async type(selector: string, text: string) {
    try {
      await this.page.fill(selector, text);
    } catch (err) {
      log.error(`Type failed: ${selector}`, err);
      throw err;
    }
  }

  async getText(selector: string) {
    try {
      return await this.page.textContent(selector);
    } catch (err) {
      log.error(`getText failed: ${selector}`, err);
      throw err;
    }
  }
}
