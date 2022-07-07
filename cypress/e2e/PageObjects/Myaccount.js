class MyaccountPage {


    constructor() {

        //Defined Locator
        this.lt_Dashboardlink = "nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(1)>a";
        this.lt_Orderlink = "nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(2)>a";
        this.lt_Downloadlink = "nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(3)>a";
        this.lt_Addresslink = "nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(4)>a";
        this.lt_Accountdetailslink = "nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(5)>a";
    }

    VerifyPageurl() {
        return cy.url()
    }

    Dashboard_link() {
        return cy.get(this.lt_Dashboardlink).click()
    }

    Order_link() {
        return cy.get(this.lt_Orderlink).click()
    }

    Download_link() {
        return cy.get(this.lt_Downloadlink).click()
    }

    Address_link() {
        return cy.get(this.lt_Addresslink).click()
    }

    Accountdetail_link() {
        return cy.get(this.lt_Accountdetailslink).click()
    }








}

const myaccount = new MyaccountPage()
export default myaccount