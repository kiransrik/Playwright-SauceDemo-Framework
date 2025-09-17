/*import { PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60_000,
  testDir: 'src/tests',
  outputDir: 'reports/test-results',
  retries: 1,
  reporter: [['list'], ['html', { outputFolder: 'reports/html' }]],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15_000,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry'
  }
};

export default config;*/



import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  timeout: 60_000,
  testDir: 'src/tests',
  outputDir: 'reports/test-results',
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'reports/html' }]
  ],
  use: {
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 15_000,
    ignoreHTTPSErrors: true,
    trace: 'on-first-retry',
  },

  // ✅ Run tests on multiple browsers in parallel
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    },
  ],
};

export default config;
