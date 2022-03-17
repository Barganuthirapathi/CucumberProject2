#Author: shirt@your.domain.com
Feature: shirt validation
@scenario
  Scenario: shirt purchase
    Given user launches flipkart webs
    And user login by entering valid crendentials in webs
    When user search Television
    And user click on the Television namee
    Then user validate the Television namee
