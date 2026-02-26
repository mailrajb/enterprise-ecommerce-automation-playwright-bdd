# Test Strategy

## Scope
This repository demonstrates an enterprise-style test approach:
- **UI E2E**: critical user workflows (login, cart, checkout)
- **API smoke**: lightweight health checks for core endpoints
- **Optional DB validation**: integrity checks when DB connectivity is available

## Test Types
- **Smoke**: quick checks for basic availability
- **Regression**: broader coverage executed in CI
- **Negative testing**: invalid login and validation scenarios
- **Non-functional (future)**: performance (JMeter), accessibility, security scans

## Tooling
- **Playwright** for UI automation
- **Cucumber (BDD)** for readable behavior specs
- **GitHub Actions** for CI
- **Docker** for consistent execution

## Reporting & Quality Gates
- Cucumber HTML + JSON reports generated under `reports/`
- CI uploads reports as build artifacts
- Suggested future gates:
  - Fail build on any failed scenario
  - Track flaky tests and quarantine unstable scenarios
