Feature: API smoke validation
  Scenario: Sample API returns OK
    Given I call the sample API endpoint "/posts/1"
    Then the API response status should be 200
