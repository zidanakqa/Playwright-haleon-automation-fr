Feature: Button Component

  Scenario: Verify primary and secondary buttons on all variants page
    Given the user navigates to the all variants page
    Then the primary button should be displayed
    And the secondary button should be displayed
      And a visual snapshot is taken for comparison


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
  