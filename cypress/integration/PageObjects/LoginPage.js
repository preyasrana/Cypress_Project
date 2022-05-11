class LoginPage {


    constructor() {

        //Defined Locator
        this.lt_loginlink = "ul.main-nav>li:nth-of-type(2)>a";
        this.lt_username = "#username";
        this.lt_password = "input#password";
        this.lt_loginbtn = "input[type='submit'][name='login']";


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

    login_btn(value) {

        const button = cy.get(this.lt_loginbtn)
        button.click()
    }
}


const login = new LoginPage()
export default login