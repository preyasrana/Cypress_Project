/// <reference types ="Cypress"/>


import homepage from '../Page_Object/Homepage'
import productpage from '../Page_Object/Productpage'

describe('test suite', function () {

    before(() => {
        // root-level hook runs once before all tests

        cy.fixture('register_practice').then(function (data) {

            this.data = data

        })
    })

    it('first test case', function () {

        cy.visit('https://www.rahulshettyacademy.com/angularpractice/')

        homepage.fillname().type(this.data.name)
        homepage.selectgender().select(this.data.gender)

        homepage.databinding().should('have.value', this.data.name)
        //attribute for validation
        homepage.fillname().should('have.attr', 'minlength', '2')
        homepage.employee_status_Entrepreneur().should('be.disabled')
        homepage.shoplink().click().debug()

        //cy.pause()
        //Parameterized test with multiple data
        this.data.productName.forEach(function (element) {

            //reusabled *** select product method
            cy.selectproduct(element)

        })

        productpage.btn_shoppingcheckout().click()




        productpage.btncheckout().click()
        productpage.fillcountry().type("India")
        productpage.checkbox_terms().check({ force: true })
        productpage.purchased_order().click()
        productpage.success_message().then(function (element) {
            cy.log(element.text())
            const actualtext = element.text()
            expect(actualtext.includes("Success! Thank you! Your order will be delivered in next few weeks")).to.be.true
        })

    })





})