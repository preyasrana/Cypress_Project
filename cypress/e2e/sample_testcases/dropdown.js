
/// <reference types="cypress"/>

describe('Drodown Test', function () {
   // Test case
   it('static dropdown', function () {
      // test step for URL launching
      cy.viewport(1366, 768)
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      cy.wait(200);

      cy.get('select[name="dropdown-class-example"]').select('option2')
      .should('have.value','option2')

      cy.get('input[id="autocomplete"]').type('ind')
       
      cy.get('li.ui-menu-item').each(($el, index, $list) => {

         const headervalue = $el.find('div').text()
         cy.log('find dropdown item::-->'+headervalue)

         if($el.text() === "India"){

            cy.wrap($el).click()
         }

      });

      //validation if selected value should  be appear or not 
      cy.get('input[id="autocomplete"]').should('have.value','India')

      //hide & show objects

      cy.get('#displayed-text').should('be.visible')

      cy.get('#hide-textbox').click()
      cy.get('#displayed-text').should('not.be.visible')
      cy.get('#show-textbox').click()
      cy.get('#displayed-text').should('be.visible')

      


   });
});