# Enterprise E-Commerce Test Automation Framework

Playwright + Cucumber (BDD) + TypeScript

---

## Project Overview

This project is an end-to-end automation framework built for an e-commerce web application.  
It validates complete user workflows and API responses using a structured BDD approach.

The framework demonstrates:

- UI automation using Playwright
- Behavior-driven testing with Cucumber
- Page Object Model (POM) design
- API validation
- Screenshot capture on failure
- Headless execution for CI/CD
- Headed debug mode for local testing

---

## Application Under Test (AUT)

UI Application:
https://www.saucedemo.com

API Endpoint:
https://jsonplaceholder.typicode.com

The application simulates a real e-commerce system including login, product listing, cart, and checkout functionality.

---

## Tech Stack

- Playwright
- Cucumber (BDD)
- TypeScript
- Node.js
- Page Object Model (POM)
- Git
- CI-ready configuration

---

## Architecture Overview

Test Execution Flow:

Feature Files (.feature)
    ↓
Step Definitions (src/steps)
    ↓
Page Objects (src/pages)
    ↓
Playwright Browser Instance
    ↓
Assertions (expect)
    ↓
Reports and Screenshots

---

### Visual Architecture Diagram

Feature File
   ↓
Step Definition
   ↓
Page Object
   ↓
Playwright Browser
   ↓
Assertion
   ↓
Report / Screenshot

## Project Structure

features/
  ui/          → UI scenarios (login, cart, checkout)
  api/         → API validation scenarios

src/
  pages/       → Page Object classes
  steps/       → Step definitions
  support/
    hooks.ts   → Before/After hooks
    world.ts   → Browser lifecycle management
  config/
    env.ts     → Environment configuration

package.json
tsconfig.json
Dockerfile
README.md

---

## Installation

1. Install dependencies:

npm install

2. Install Playwright browsers:

npx playwright install

---

## Running Tests

Run all tests:

npx cucumber-js

Run only UI tests:

npx cucumber-js "features/ui/**/*.feature"

Run only API tests:

npx cucumber-js "features/api/**/*.feature"

---

## Run With Visible Browser (Debug Mode)

HEADLESS=false SLOWMO=200 npx cucumber-js "features/ui/**/*.feature"

HEADLESS=false → Opens browser  
SLOWMO=200 → Slows execution so steps are visible  

---

## Environment Configuration

Default configuration is defined in:

src/config/env.ts

Defaults:

baseUrl → https://www.saucedemo.com  
apiBaseUrl → https://jsonplaceholder.typicode.com  
headless → true  

You can override:

HEADLESS=false npx cucumber-js

---

## Sample Scenarios Automated

UI Scenarios:
- Successful login
- Invalid login validation
- Add product to cart
- Validate cart contents
- Complete checkout workflow

API Scenarios:
- Validate API endpoint
- Verify response status code

---

## Stability Improvements Implemented

- Fixed Playwright assertion import issues
- Increased Cucumber timeout to prevent premature failures
- Implemented safe browser cleanup in After hook
- Enabled environment-based headless control
- Cleaned repository artifacts using .gitignore
- Structured framework using Page Object Model

---

## Interview Explanation Summary

This framework demonstrates a production-style automation architecture using Playwright with Cucumber BDD. The framework separates test logic from UI interaction using the Page Object Model and supports both headless CI execution and local debug runs. It validates critical e-commerce workflows including login, cart management, and checkout, along with API endpoint validation.

---

## Author

Framework setup, debugging, stability enhancements, and execution improvements performed locally.
