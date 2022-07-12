

class Productpage {


    constructor() {

        //Defined Locator
        this.lt_btncheckout = 'a[class="nav-link btn btn-primary"]';


    }

    btncheckout() {

        return cy.get(this.lt_btncheckout)
    }


}


const productpage = new Productpage()
export default productpage