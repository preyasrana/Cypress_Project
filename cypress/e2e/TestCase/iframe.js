
/// <reference types ="Cypress"/>
/// <reference types ="cypress-iframe"/>

import 'cypress-iframe'

describe('iframe demo', () => {

    it('iframe scenario', () => {
       

        cy.viewport(1366, 768)
        cy.visit('https://www.rahulshettyacademy.com/AutomationPractice/')

        cy.frameLoaded('#courses-iframe')
        cy.iframe().find('a[href="mentorship"]').eq(0).click()

        cy.iframe().find('h1[class="pricing-title text-white ls-1"]').should('have.length','2')

        cy.iframe().find('h1[class="pricing-title text-white ls-1"]').each(($el, index, $list) =>{


           const log =  $el.text()
           cy.log('value is :>'+log)

        })

    })

})