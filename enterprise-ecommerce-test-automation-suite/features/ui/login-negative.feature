Feature: Login negative validation
  Scenario: Invalid user cannot login
    Given I am on the login page
    When I login with invalid credentials
    Then I should see a login error
