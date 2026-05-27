import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './tests',
  expect: {
    toHaveScreenshot: {
      animations: 'disabled',
    },
  },
  use: {
    baseURL: 'http://127.0.0.1:6006',
    ...(process.env.CI ? {} : { channel: 'chrome' }),
    viewport: { width: 1280, height: 960 },
    colorScheme: 'light',
  },
  webServer: {
    command: 'npm run dev -- --ci',
    url: 'http://127.0.0.1:6006',
    reuseExistingServer: true,
    timeout: 120000,
  },
})
