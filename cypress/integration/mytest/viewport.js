/// <reference types="cypress" />

describe('different viewport', () => {

    before(() =>{

        console.log('running my tests')

    })

    beforeEach(()=> {
        cy.visit('http://practice.automationtesting.in/')
    }
    )

    it('Website testing in 1366*768 resolution', () => {

        cy.viewport(1366, 768)
        cy.screenshot()
        cy.wait(200)

    })

    it('Website testing in 1280*720 resolution', () => {

        cy.viewport(1280, 720)
        cy.screenshot()
        cy.wait(200)

    })

    it('Website testing in iphone-5 resolution', () => {

        cy.viewport('iphone-5')
        cy.screenshot()
        cy.wait(200)

    })

    it('Website testing in macbook-16 resolution', () => {

        cy.viewport('macbook-16')
        cy.screenshot()
        cy.wait(200)

    })

}


)