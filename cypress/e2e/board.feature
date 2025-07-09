Feature: Board and List Management

  Scenario: Create a board, add two lists, and delete one list
    Given I am on the board creation page
    When I create a new board named "Test Board"
    Then I should see the board named "Test Board"

    When I add a new list named "List One"
    And I add a new list named "List Two"
    Then I should see 2 lists created successfully

    When I delete the list named "List One"
    Then I should see only 1 list remaining
