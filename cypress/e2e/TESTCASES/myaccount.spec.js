
import login from '../PageObjects/LoginPage'
import myaccount from '../PageObjects/Myaccount'


describe('Launch App', function () {

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.visit(Cypress.env('fronturl'))
        login.click_Loginlink()
        login.fillusername('KIBQOQBYZW@gmail.com')
        login.fillpassword('dxVB58@&')
        login.login_btn()
        myaccount.VerifyPageurl().should('include', '/my-account/')
    })
      
    
    it('Click on Dashboard link', function () {
        myaccount.Dashboard_link()
        myaccount.VerifyPageurl().should('include', '/my-account/')
    })

    it('Click on Order link', function () {
        myaccount.Order_link()
        myaccount.VerifyPageurl().should('include', '/orders/')
    })

    it('Click on Download link', function () {
        myaccount.Download_link()
        myaccount.VerifyPageurl().should('include', '/downloads/')
    })

    it('Click on Address link', function () {
        myaccount.Address_link()
        myaccount.VerifyPageurl().should('include', '/edit-address/')
    })

    it('Click on Account Detail link', function () {
        myaccount.Accountdetail_link()
        myaccount.VerifyPageurl().should('include', '/edit-account/')
    })


})