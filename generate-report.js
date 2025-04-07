import reporter from 'multiple-cucumber-html-reporter';

reporter.generate({
  jsonDir: 'reports',
  reportPath: 'reports/html',
  embeddedScreenshots: true,
  reportName: 'Cucumber Test Report',
  displayDuration: true,
  metadata: {
    browser: {
      name: 'chrome',
      version: 'latest',
    },
    device: 'PC',
    platform: {
      name: 'Windows',
      version: '11',
    },
  },
  customData: {
    title: 'Run Info',
    data: [
      { label: 'Project', value: 'Test Task' },
      { label: 'Executed by', value: 'Luis Figueroa' },
      { label: 'Executed', value: new Date().toLocaleString() },
    ],
  },
  embeddedScreenshots: true,
  screenshotsDirectory: 'reports/screenshots',
});