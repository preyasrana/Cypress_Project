class LoginPage {


    constructor() {

        //Defined Locator
        this.lt_loginlink = "ul.main-nav>li:nth-of-type(2)>a";
        this.lt_username = "#username";
        this.lt_password = "input#password";
        this.lt_loginbtn = "input[type='submit'][name='login']";
        this.lt_errormessage = ".woocommerce-error li";

    }

    visit_baseurl() {
        cy.visit('http://practice.automationtesting.in/')
    }

    click_Loginlink() {
        cy.get(this.lt_loginlink).click()
    }

    fillusername(value) {

        const field = cy.get(this.lt_username)
        field.clear()
        field.type(value)
        return this
    }

    fillpassword(value) {

        const field = cy.get(this.lt_password)
        field.clear()
        field.type(value)
        return this
    }

    errormessage() {

        return cy.get(this.lt_errormessage)
       
    }

    login_btn() {

        const button = cy.get(this.lt_loginbtn)
        button.click()
    }
}


const login = new LoginPage()
export default login