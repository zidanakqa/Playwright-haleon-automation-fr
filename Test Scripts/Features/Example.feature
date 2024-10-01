#Feature: Example Test

  #Scenario: Basic Example Test
  #  Given the user opens Google
   # Then the title should be "Google"
#Feature: Button Component

  #Scenario Outline: Verify button variations display correctly
   # Given user lands on the "<url>"
   # Then the button "<buttonName>" should be visible
   # And the button "<buttonName>" should have classes "<classes>"
   # And the button "<buttonName>" should have label "<label>"

  #Examples:
  #  | url                                                                                      | buttonName | classes                                        | label              |
   # | https://lon-haleon-s4d-poc-ui.vercel.app/?path=/story/atoms-button--all-variants         | Button1    | d-button d-button-size__large primary          | Primary Button     |
   # | https://lon-haleon-s4d-poc-ui.vercel.app/?path=/story/atoms-button--all-variants         | Button2    | d-button d-button-size__large secondary        | Secondary Button   |

  #Scenario: Verify specific button variation
   # Given user opens a page at "https://lon-haleon-s4d-poc-ui.vercel.app/?path=/story/atoms-button--basic&args=size:small;fullWidth:!true"
    #Then the button "Button3" should be visible
   # And the button "Button3" should have classes "d-button d-button-size__small primary d-button-flex"
   # And the button "Button3" should have label "Small Primary Button"