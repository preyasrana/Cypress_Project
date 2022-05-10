describe.skip('Launch App', () => {

    it('Lunch Website', () => {
        cy.visit('https://www.orangehrm.com/hris-hr-software-demo/')
        cy.viewport(1366, 768)
    })

    it('Select dropdown', () => {

        cy.viewport(1366, 768)
        cy.get('#Form_submitForm_Country')
            .select('Algeria')
            .should('have.value', 'Algeria')
    })
})

describe('Google Test App', () => {

    it('Lunch Website', () => {
        cy.visit('https://www.google.com/')
        cy.viewport(1366, 768)
    })

    it('Enter a value in Searchbox', () => {

        cy.viewport(1366, 768)
        cy.get("[name='q']").type('cypress')
        cy.get('ul.erkvQe ul').find('li span').contains('Cypress Industries India Pvt. Ltd')

    })
})