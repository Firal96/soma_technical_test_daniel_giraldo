Feature: Test add remove elements page

Scenario Outline: A number of elements is created and removed
    Given the user is in the add remove elements page
    When the user adds "<add>" elements
    And the user removes "<remove>" elements
    Then "<remaining>" elements should remain visible
    Examples:
        | add | remove | remaining |
        | 6   | 3      | 3         |
        | 5   | 5      | 0         |
        | 0   | 0      | 0         |