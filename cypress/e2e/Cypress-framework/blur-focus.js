

describe('test suite', function () {

    it('Type Username And Password', () => {
        cy.visit('https://www.programsbuzz.com/user/login')
        cy.get('form').within(() => {

            cy.get("input[id='edit-name']").focus().type('Rataalada').blur({ force: true })
            // cy.get("input[id='edit-name']").type('Rataalada')
        })
    })
})