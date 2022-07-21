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

        // cy.clock()

        cy.visit(Cypress.env('weburl') + "/angularpractice/")

        // cy.tick(1000)


        //using filter through verify element
        cy.get('div[class="form-check form-check-inline"] label').filter(':contains("disabled")').should('have.length', '1')

        //find with element get
        cy.get('footer[class="py-5 bg-dark"]').find('p').each(($el, index, $list) => {

            const value = $el.text()
            cy.log(value)

        })

        //first element to click
        cy.get('div[class="form-check form-check-inline"] label').first().click()

        homepage.fillname().type(this.data.name).and('be.visible').as('name')


        //focused with blur
        //homepage.fillname().focused().type(this.data.name).and('be.visible').as('name').blur()

        homepage.fillpassword().type('test123').blur()
        homepage.selectgender().select(this.data.gender).and('be.visible').as('gender')

        homepage.databinding().should('have.value', this.data.name).and('be.visible')
        //attribute for validation
        homepage.fillname().should('have.attr', 'minlength', '2')
        homepage.employee_status_Entrepreneur().should('be.disabled')
        homepage.shoplink().click()

        //cy.pause()
        //Parameterized test with multiple data
        this.data.productName.forEach(function (element) {

            //reusabled *** select product method
            cy.selectproduct(element)

        })

        productpage.btn_shoppingcheckout().click()

        var sum = 0;
        productpage.cartproduct_totalprice().each(($el, index, $list) => {

            const price = $el.text()
            var res = price.split(" ")
            res = res[1].trim()
            cy.log(res)

            sum = Number(sum) + Number(res)

        }).then(function () {
            cy.log(sum)
        })


        productpage.carttotal().then(function (totalprice) {

            const total_price = totalprice.text()
            var total = total_price.split(" ")
            var total = total[1].trim()
            cy.log(total)

            expect(Number(total)).to.equal(Number(sum))

        })


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