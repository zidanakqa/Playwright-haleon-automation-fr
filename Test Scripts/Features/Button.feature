Feature: Button Component

  Scenario Outline: Verify primary and secondary buttons on all variants page for different themes
    Given the user navigates to the all variants page for "<theme>"
    Then the primary button should be displayed
    And the secondary button should be displayed
    And a visual snapshot is taken for comparison with name "<theme>"

    Examples:
      | theme         |
      | base          |
      | base-dark     |
      | centrum       |
      | centrum-dark  |
      | voltaren      |
      | voltaren-dark |

  #Scenario: Verify special variant button
    #Given the user navigates to the special variant page
    #Then the special variant button should be displayed
    #And the special variant button should be full width
    #And the special variant button should have inversion


 # When the user clicks on the button
 # Then the user should be redirected to the external link in new tab

#Scenario: Keyboard navigation for internal link
  #When the user uses tab key to land on the button
  #And presses enter key
 # Then the user should be redirected to the internal link in the same tab

#Scenario: Button activation using assistive technology
 # When the user activates the button using a screen reader
  #Then the user should be redirected to the expected link
  