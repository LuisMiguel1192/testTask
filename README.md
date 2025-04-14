# app e2e tests

# For work with e2e tests you needed do next:

```shell
npm install
npx playwright install
npx cucumber-js
npm install --save-dev multiple-cucumber-html-reporter
npm install --save-dev cucumber-html-reporter
```

# This is e2e commands

## If you want view how works test use this command

```bash
    npm run test:ui
    npx cucumber-js --tags "@" --format json:reports/cucumber-report.json && node generate-report.js
```

#### other commands for tests

```bash
    npm run test:report
```

```bash
    npm run test:mobile-app
```

## Additional functions have also been added to make it easier to work with tests

```bash
    npm run lint
```

```bash
    npm run lint-staged
```

```bash
    npm run prepare
```

```bash
    npm run init:db
```

```bash
    npm run generate
```

```bash
    npm run push
```

### If you encounter formatting errors when writing code, this commands will help:

```bash
    npx prettier --ignore-unknown --write .
    npx eslint . --fix
```
