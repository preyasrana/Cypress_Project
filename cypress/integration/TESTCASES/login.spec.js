
import login from '../PageObjects/LoginPage'


describe('Launch App', function () {

    it('Valid Login Test', function () {
        cy.viewport(1920, 1080)

        login.visit_baseurl()
        login.click_Loginlink()
        login.fillusername('KIBQOQBYZW@gmail.com')
        login.fillpassword('dxVB58@&')
        login.login_btn()

        cy.url().should('include', '/my-account/')
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li').should('have.length', '6')

    })

})
