import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const headless = process.env.HEADLESS === "true" ? true : false || false;

const testDir = defineBddConfig({
  features: 'features/*.feature', // Path to your .feature files
  steps: [
    './features/fixture/fixtures.ts', // Explicitly include the fixtures file
    './stepDefinitions/**/*.ts',    // Include all step definition files
  ],
});

export default defineConfig({  
  testDir,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
    }),
    ['html', { open: 'always' }],
    [
      'allure-playwright',
      {
        outputFolder: 'allure-results', //run 'allure generate ./allure-results --clean -o ./allure-report' and 'allure serve ./allure-results' respectively for Allure reporting
        suiteTitle: true,
      },
    ],
  ],
  use: {
    screenshot: 'on',
    trace: 'on',
    headless: headless,
    viewport: {width: 1920, height: 1080},
  },
  projects: [
    // {
    //   name: 'chromium',
    //   use: { ...devices['Desktop chromium'] },
    // },
    {
      name: 'firefox',
      use: { ...devices['Desktop firefox'] },
    },
  ],
});
