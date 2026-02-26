# Architecture Overview

This suite follows a layered automation design to keep tests maintainable and easy to extend.

## Layers
1. **Feature layer (BDD)**
   - `features/**/*.feature` describes business flows in Gherkin.

2. **Step layer**
   - `src/steps/**/*.ts` maps Gherkin steps to executable automation logic.
   - Steps should stay thin and call Page Objects / helpers.

3. **UI abstraction (Page Objects)**
   - `src/pages/**/*.ts` contains locators + actions for each page.
   - Keeps locators centralized and reduces duplication.

4. **Support layer**
   - `src/support/world.ts` creates a per-scenario Playwright browser/page.
   - `src/support/hooks.ts` handles setup/teardown and failure artifacts (screenshots).

5. **API / DB helpers (optional)**
   - `src/api/` for API calls
   - `src/db/` for database validation helpers (only when environment provides DB access)

## CI/CD
- GitHub Actions workflow runs on pushes and pull requests.
- HTML/JSON cucumber reports are uploaded as artifacts for easy review.

## Extensibility
Common additions for real enterprise use:
- Tag-based browser/environment selection
- Parallel execution for faster regression
- Test data factories and contract/schema validation
- Service virtualization (Docker compose) for dependent services
