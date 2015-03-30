Feature: Allow users to login and logout


  Background:
    Given I am signed out

  Scenario: You get welcomed to Meteor 
    Given I am on the home page
    When I click on sign in link
    Then I should see Welcome to Meteor
