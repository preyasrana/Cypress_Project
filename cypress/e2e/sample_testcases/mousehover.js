/// <reference types="cypress"/>
describe('Tutorialspoint Test', function () {
    // Test case
    it('Scenario 1', function () {
       // test step for URL launching
       cy.viewport(1366, 768)
       cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
       cy.wait(200)
 
        cy.get('div[class="mouse-hover"] div[class="mouse-hover-content"]').invoke('show')
        //cy.contains('Top').click({force: true})
        cy.get('a[href="#top"]').click()
        cy.url().should('include','top')   


        //how to handle window  // button[id="openwindow"]
        //a[id="opentab"]
        
        cy.get('a[id="opentab"]').then(function(el){
           const url = el.prop('href')

           cy.log('url :>'+url)
           cy.visit(url)

        })

  
    });
 });