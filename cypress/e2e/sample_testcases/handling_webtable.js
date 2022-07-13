/// <reference types="cypress"/>
describe('Tutorialspoint Test', function () {
    // Test case
    it('Scenario 1', function () {
       // test step for URL launching
       cy.viewport(1366, 768)
       cy.visit("https://www.rahulshettyacademy.com/AutomationPractice/");
       cy.wait(200)
 
       cy.get("table[name='courses'] tr td:nth-child(2)").each(($el, index, $list) => {

        const coursevalue = $el.text()
        cy.log(' Name: ' + coursevalue)

        if (coursevalue.includes("Software Testing + Bugzilla + SQL + Agile")){

            cy.get("table[name='courses'] tr td:nth-child(2)").eq(index).next().then(function(price)
              {
                const pricevalue = price.text()
                cy.log(' pricevalue: ' + pricevalue)
                expect(pricevalue).to.equal('25')
              })
        } 

       });
    });
 });