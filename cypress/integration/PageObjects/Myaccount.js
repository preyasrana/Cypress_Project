class MyaccountPage {


    constructor() {

        //Defined Locator



    }


    VerifyPageurl() {

        return cy.url()
    }


}

const myaccount = new MyaccountPage()
export default myaccount