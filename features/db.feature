@database
Feature: AppUser management in the database

  @addanappuser
  Scenario: Add an AppUser
    Given I add an app user "lfigueroa"
    When the app user "lfigueroa" should exist in the database

  @deleteanappuser
  Scenario: delete an AppUser
    And I delete the app user "lfigueroa"
    Then the app user "lfigueroa" should not exist in the database