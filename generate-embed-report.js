const reporter = require('cucumber-html-reporter');

const options = {
  theme: 'bootstrap',
  jsonFile: 'reports/cucumber-report.json',
  output: 'reports/cucumber-report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata: {
    "App Version": "1.0",
    "Test Environment": "Local",
    "Browser": "Chrome latest",
    "Platform": "Windows 11",
    "Executed": "Luis Figueroa"
  }
};

reporter.generate(options);