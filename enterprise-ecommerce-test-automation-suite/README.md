# Enterprise E-Commerce Test Automation Suite  
Playwright + Cucumber (BDD) + TypeScript

End-to-end automation framework for an e-commerce web application covering:

- UI workflows (Login → Add to Cart → Checkout)
- API validation (Health check / sample endpoint validation)
- Screenshot capture on failure
- CI-ready headless execution
- Local debug with visible browser support

---

## Demo Application Under Test (AUT)

UI: https://www.saucedemo.com  
API: https://jsonplaceholder.typicode.com  

This demo application simulates a real e-commerce system and is widely used for automation practice.

---

## Tech Stack

- Playwright (Browser automation)
- Cucumber (BDD framework)
- TypeScript
- Page Object Model (POM)
- Node.js
- GitHub Actions (CI-ready)

---

## Architecture Overview

Test Execution Flow:

Feature File (.feature)
        ↓
Step Definitions (src/steps)
        ↓
Page Objects (src/pages)
        ↓
Playwright Browser (Chromium)
        ↓
Assertions (expect)
        ↓
Reports & Screenshots

---

## Project Structure
