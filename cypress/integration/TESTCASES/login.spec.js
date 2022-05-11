
import login from '../PageObjects/LoginPage'
import myaccount from '../PageObjects/Myaccount'

describe('Launch App', function () {

    beforeEach(function () {
        cy.viewport(1920, 1080)
        cy.visit(Cypress.env('fronturl'))
    })

    it('Without Entering Any Data Click on Login button', function () {

        login.click_Loginlink()
        login.login_btn()
        login.errormessage().should('have.text', 'Error: Username is required.')
    })

    it('Only Fillup Username & click on login button', function () {

        login.click_Loginlink()
        login.fillusername('KIBQOQBYZW@gmail.com')
        login.login_btn()
        login.errormessage().should('have.text', 'Error: Password is required.')
    })

    it('Invalid Username & Password', function () {

        login.click_Loginlink()
        login.fillusername('testuser')
        login.fillpassword('test@&')
        login.login_btn()
        login.errormessage()
            .should('have.text', 'ERROR: The password you entered for the username testuser is incorrect. Lost your password?')
    })


    it('Valid Login Test', function () {

        login.click_Loginlink()
        login.fillusername('KIBQOQBYZW@gmail.com')
        login.fillpassword('dxVB58@&')
        login.login_btn()
        myaccount.VerifyPageurl().should('include', '/my-account/')
    })

    //Mostly Used for TearDown Part
    after(function () {
    })

})
