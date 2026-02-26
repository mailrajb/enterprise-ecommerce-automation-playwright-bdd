# Enterprise E-Commerce Test Automation Suite (Playwright + BDD)

An enterprise-style automation framework that demonstrates **end-to-end UI testing** (Playwright) with **BDD** (Cucumber),
plus a lightweight **API smoke suite**. Includes **CI** via GitHub Actions and a Docker image for reproducible execution.

> Attribution: this repo was originally bootstrapped from a public template and then expanded with functional test code,
configuration, and CI assets. See `NOTICE.md` and `LICENSE`.

## Tech Stack
- Playwright (UI automation)
- TypeScript
- Cucumber (BDD)
- GitHub Actions (CI)
- Docker (optional)

## What’s Covered
### UI (Demo E-Commerce)
Uses the public SauceDemo site for realistic flows:
- Login (positive and negative)
- Add-to-cart
- Checkout + order confirmation

### API (Smoke)
- Sample GET endpoint validation using `jsonplaceholder.typicode.com`

## Project Structure
- `features/` – BDD feature files
- `src/pages/` – Page Objects (UI layer)
- `src/steps/` – Step definitions (BDD glue)
- `src/support/` – World + hooks (browser lifecycle, screenshots on failure)
- `.github/workflows/` – CI pipeline
- `reports/` – Generated test reports (created at runtime)

## Quick Start (Local)
### 1) Prerequisites
- Node.js 18+ (recommended 20)
- Git

### 2) Install
```bash
npm install
npx playwright install
```

### 3) Configure environment (optional)
Copy the env template:
```bash
cp .env.example .env
```

Defaults target SauceDemo using standard demo creds.

### 4) Run tests
Headless:
```bash
npm run test:e2e
```

Headed (see the browser):
```bash
npm run test:e2e:headed
```

After run, open:
- `reports/cucumber-report.html`

## Run in Docker (Optional)
```bash
docker build -t ecommerce-e2e .
docker run --rm -v "$(pwd)/reports:/app/reports" ecommerce-e2e
```

## Notes for Interviews (How to Explain)
- **BDD**: Feature files define business behavior; step definitions implement automation.
- **Maintainability**: Page Objects centralize locators and actions.
- **Stability**: Hooks manage browser lifecycle and attach screenshots on failures.
- **CI**: GitHub Actions runs on every push/PR and uploads reports as artifacts.

