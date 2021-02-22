Feature: Login page

Background: User is in the login page
    Given the user in in the login page

Scenario: The user login is succesful
    When the user inputs "valid" credentials
    And the user clicks on login button
    Then the "successful" login banner is displayed

Scenario: The user login is succesful
    When the user inputs "invalid" credentials
    And the user clicks on login button
    Then the "unsuccessful" login banner is displayed