// test suite name


describe('Tutorialspoint Test', function () {
   // Test case
   it('Scenario 1', function () {
      // test step for URL launching
      cy.viewport(1366, 768)
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      //cy.visit("https://www.rahulshettyacademy.com/");
      cy.wait(200)

      cy.get('#checkBoxOption1').check().should('be.checked')
         .and('have.value', 'option1')

      cy.get('#checkBoxOption1').uncheck().should('not.be.checked')

      cy.get("div[id='checkbox-example'] input[type='checkbox']")
         .check(['option2', 'option3'])


      //radio button property 
      cy.get('input[value="radio2"]').check().should('be.checked')
         .and('have.value', 'radio2')





   });
});