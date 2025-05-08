import { defineConfig, devices } from '@playwright/test';
import { defineBddConfig, cucumberReporter } from 'playwright-bdd';

const testDir = defineBddConfig({
  features: 'features/*.feature', // Path to your .feature files
  steps: [
    './features/fixture/fixtures.ts', // Explicitly include the fixtures file
    './stepDefinitions/**/*.ts',    // Include all step definition files
  ],
});

export default defineConfig({  
  // globalSetup: require.resolve('./stepDefinitions/global.setup.ts'),
  // globalTeardown: require.resolve('./stepDefinitions/global.teardown.ts'),
  testDir,
  reporter: [
    cucumberReporter('html', {
      outputFile: 'cucumber-report/index.html',
      externalAttachments: true,
    }),
    ['html', { open: 'never' }],
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
    headless: false,
    viewport: {width: 1920, height: 1080},
  },
  projects: [
    // {
    //   name: 'setup db',
    //   testMatch: 'global.setup.ts',
    // },
    // {
    //   name: 'cleanup db',
    //   testMatch: 'global.teardown.ts',
    // },
    // {
    //   name: 'chromium with db',
    //   use: { ...devices['Desktop firefox'] },
    //   dependencies: ['setup db'],
    // },
    {
      name: 'firefox',
      use: { ...devices['Desktop firefox'] },
    },
  ],
});
