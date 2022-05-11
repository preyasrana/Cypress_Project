describe('Launch App', () => {


    before(() => {
        // runs once before all tests in the block
        cy.log("**********  Setup block  *********")
    })

    after(() => {
        // runs once after all tests in the block
        cy.log("**********  Teardown block  *********")
    })

    beforeEach(() => {
        // runs before each test in the block
        cy.log("**********  Login block  *********")

    })

    afterEach(() => {
        // runs after each test in the block
        cy.log("**********  Logout block  *********")
        

    })




    it('Searching Product', () => {

        cy.log("**********  Searching Product  *********")

    })

    it('Advance Searching', () => {

        cy.log("**********  Advance Searching  *********")

    })

    it('Listing Products', () => {

        cy.log("**********  Listing Products  *********")

    })



})