/**
 * Cucumber configuration for Playwright + TypeScript
 * Run: npm run test:e2e
 */
module.exports = {
  default: {
    requireModule: ['ts-node/register'],
    require: [
      'src/support/**/*.ts',
      'src/steps/**/*.ts'
    ],
    paths: ['features/**/*.feature'],
    format: [
      'progress',
      'html:reports/cucumber-report.html',
      'json:reports/cucumber-report.json'
    ],
    parallel: 1,
    publishQuiet: true
  }
};
