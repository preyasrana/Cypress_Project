Feature: End to End Ecommerce Validation
  application regression

  Scenario: Ecommerce Product Delivery
    Given open Ecommerce Page
    When add items to cart
    And Validate Cart Product total
    Then Select Country submit and Verify thank you


  Scenario:filling form to shop
    Given open Ecommerce Page
    When I fill up form details
      | name   | gender |
      | jenika | Female |
    Then Validate Form behaviour
    And Select Shop page


