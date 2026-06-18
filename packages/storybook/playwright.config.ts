import { defineConfig } from '@playwright/test'
import { cpus } from 'os'

const cpuCount = cpus().length
const localWorkers = Math.max(2, Math.min(8, Math.floor(cpuCount / 2)))
const configuredWorkers = Number(process.env.PW_WORKERS)

export default defineConfig({
  testDir: '../react/components',
  workers:
    Number.isFinite(configuredWorkers) && configuredWorkers > 0 ? configuredWorkers : process.env.CI ? 4 : localWorkers,
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
