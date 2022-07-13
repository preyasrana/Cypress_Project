// test suite name

/// <reference types="cypress"/>
describe('Tutorialspoint Test', function () {
   // Test case
   it('Scenario 1', function () {
      // test step for URL launching
      cy.viewport(1366, 768)
      cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
      cy.wait(200)

      cy.get('#alertbtn').click()
      cy.get('#confirmbtn').click()

      //window alert 
      cy.on('window:alert',(str)=>
      {
         expect(str).to.equal('Hello , share this practice page and share your knowledge')
      })

      cy.on('window:confirm',(str)=>
      {
         expect(str).to.equal("Hello , Are you sure you want to confirm?")
      })

      //tab using cypress
       cy.get('a[id="opentab"]').invoke('removeAttr','target').click()
       cy.url().should('include','rahulshettyacademy')

       cy.go('back')
     
      


   });
});