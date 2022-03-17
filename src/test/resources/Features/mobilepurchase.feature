#Author: bargan@your.domain.com

Feature: mobile validate
@scenario
  Scenario: mobile purchase map
    Given user launches flipkart applications
    And user login by entering valid crendentials
    When user search mobile one dim map
    |1|realme|
    |2|REDMI |
    |3|iphone|
    And user click on the mobile name
    Then user validate the mobile names

    
    