describe('Launch App', () => {

    it('Lunch Website', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.viewport(1920, 1080)
    })

    it('User should search product', () => {

        cy.Searchproduct('Dress')
        cy.get('.lighter').should('contain.text','Dress')

    })


    



})