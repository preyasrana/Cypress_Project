import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


import homepage from '../../Page_Object/Homepage'
import productpage from '../../Page_Object/Productpage'
var sum = 0;
let name

Given('open Ecommerce Page', function () {


    cy.visit(Cypress.env('weburl') + "/angularpractice/")
})


When('add items to cart', function () {


    homepage.shoplink().click()

    //cy.pause()
    //Parameterized test with multiple data
    this.data.productName.forEach(function (element) {

        //reusabled *** select product method
        cy.selectproduct(element)

    })

    productpage.btn_shoppingcheckout().click()

})

And('Validate Cart Product total', function () {


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

    Then('Select Country submit and Verify thank you', function () {

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


    When('I fill up form details', function (dataTable) {

        // homepage.fillname().type(this.data.name)
        // homepage.selectgender().select(this.data.gender)
        name = dataTable.rawTable[1][0];
        homepage.fillname().type(dataTable.rawTable[1][0])
        homepage.selectgender().select(dataTable.rawTable[1][1])
    })

    Then('Validate Form behaviour', function () {
        homepage.databinding().should('have.value', name)
        //attribute for validation
        homepage.fillname().should('have.attr', 'minlength', '2')
        homepage.employee_status_Entrepreneur().should('be.disabled')

    })

    And('Select Shop page', () => {

        homepage.shoplink().click()
    })


})