describe.skip('Add to cart Scenario', () => {

    it('Lunch automationpractice Website', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.viewport(1366, 768)
    })

    it('MouseOver on Searchbar', () => {

        cy.viewport(1366, 768)
        cy.get('li a.sf-with-ul').first().click()

        //Check checkbox & Verify 
        cy.get('.checkbox').check().parent().should('have.class', 'checked')

        //unchecked checkbox & verify
        cy.get('.checkbox').uncheck().parent().should('not.have.class', 'checked')
    })

})

describe('Snapdeal test scenario', () => {

    it('Lunch Snapdeal Website', () => {
        cy.visit('https://www.snapdeal.com/')
        cy.viewport(1366, 768)
    })

    it('Enter value in Searchbar', () => {

        cy.viewport(1366, 768)
        cy.get('#inputValEnter').type('Laptop')

        //click on serach button 
        cy.get('.searchformButton').click()
        cy.wait(3000)

        cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input')
            .check({ force: true }).should('have.class', 'checked')

        //  cy.get('[data-displayname="Brand"] > .filter-content > .filter-inner > :nth-child(n) > input').uncheck({force: true}).should('not.have.class', 'checked')

    })

})