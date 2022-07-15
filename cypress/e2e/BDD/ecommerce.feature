Feature: End to End Ecommerce Validation
   application regression 

  Scenario: Ecommerce Product Delivery
    Given open Ecommerce Page
    When add items to cart
    And Validate Cart Product total
    Then Select Country submit and Verify thank you
