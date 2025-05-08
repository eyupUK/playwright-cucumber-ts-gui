Feature: Playwright Home Page


  Scenario: Successful login with valid credentials copy 1
        Given I am on the login page
        When I enter valid username and password "standard_user" and "secret_sauce"
        And I click on the login button
        Then I verify that logged in successfully