module.exports = {
    default: {
      require: ['features/step-definitions/**/*.ts',
        'features/**/*.ts'
      ],
      format: ['json:reports/cucumber-report.json'],
      paths: ['features/**/*.feature'],
      requireModule: ['ts-node/register'],
      parallel: 1,
      publishQuiet: true
    }
  };