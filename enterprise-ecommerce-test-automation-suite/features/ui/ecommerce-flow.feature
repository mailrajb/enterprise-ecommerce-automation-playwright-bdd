Feature: E-Commerce happy path checkout
  As a shopper
  I want to purchase an item
  So that I can validate core purchase workflow end-to-end

  Scenario: User logs in, adds item to cart, and completes checkout
    Given I am on the login page
    When I login with valid credentials
    Then I should see the products page
    When I add "Sauce Labs Backpack" to the cart
    Then I should see "Sauce Labs Backpack" in the cart
    When I complete checkout with customer info
    Then I should see the order confirmation
