/// <reference types="cypress" />

describe('Launch App', () => {

    it('Website testing', () => {
        cy.visit('http://practice.automationtesting.in/')
        cy.title().should('include', 'Automation Practice Site1')
        cy.viewport(1366, 768)
        //cy.contains('My Account')
        //cy.contains('My Account').click()
        // cy.url().should('include','/product/selenium-ruby/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()

         

    })

})