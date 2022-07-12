/// <reference types ="Cypress"/>

describe('test suite', function () {

    before(() => {
        // root-level hook runs once before all tests

        cy.fixture('register_practice').then(function (data) {

            this.data = data

        })
    })

    it('first test case', function () {

        cy.viewport(1366, 768)
        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')

        cy.get('input[name="name"]:nth-child(2)').type(this.data.name)
        cy.get('select[id="exampleFormControlSelect1"]').select(this.data.gender)


        cy.get('input[name="name"]:nth-child(1)').should('have.value', this.data.name)
        //attribute for validation
        cy.get('input[name="name"]:nth-child(2)').should('have.attr', 'minlength', '2')

        cy.get('input[id="inlineRadio3"]').should('be.disabled')


        cy.get('a[href="/angularpractice/shop"]').click()


        //Parameterized test with multiple data
        this.data.productName.forEach(function (element) {


            //reusabled *** select product method
            cy.selectproduct(element)

        })


    })





})