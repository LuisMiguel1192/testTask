@regression @login
Feature: Login functionality

  @register
  Scenario: User register
    Given I navigate to the "register" page
    When I register with username "testTask6" and password "12345678"
    And I click the "Register" button
    Then I should see the text "Successfully registered, you can log in now."

  @loginSuccess
  Scenario: login with valid credentials
    Given I navigate to the "login" page
    When I login with username "testTask2" and password "12345678"
    And I click the "Login" button
    Then I should see the text "You logged into a secure area!"

  @loginFailure @ShortPassword
  Scenario: login with invalid credentials (short password)
    Given I navigate to the "login" page
    When I login with username "testTask2" and password "12"
    And I click the "Login" button
    Then I should see the text "Your password is invalid!"

  @loginFailure @usernameEmpty
  Scenario: login with invalid credentials (username empty)
    Given I navigate to the "login" page
    When I login with username "" and password "12345678"
    And I click the "Login" button
    Then I should see the text "Your username is invalid!"

  @loginFailure @passwordEmpty
  Scenario: login with invalid credentials (password empty)
    Given I navigate to the "login" page
    When I login with username "testTask2" and password ""
    And I click the "Login" button
    Then I should see the text "Your password is invalid!"

  @login @colorButton
  Scenario: checking the color of the login button
    Given I navigate to the "login" page
    When I login with username "testTask2" and password "12345678"
    Then I should see the color of the "Login" button is "rgb(13, 110, 253)"
