#Author: bargan@your.domain.com
Feature: mobile validationoutline
 
   Background:
     Given user launches flipkart application
    And user login by entering valid crendentiall
  @scenario
  Scenario Outline: mobile valid
   
    When user search mobile "<phone>"
    And user click on the mobile names
    Then user validate the mobile name

    Examples: 
      | phone  | RAM |
      | realme |  32 |
      | REDMI  |  32 |
      | iPhone |  32 |
