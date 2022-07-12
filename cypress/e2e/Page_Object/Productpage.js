

class Productpage {


    constructor() {

        //Defined Locator
        this.lt_btnshoppoingcheckout = 'a[class="nav-link btn btn-primary"]';
        this.lt_btncheckout = 'button[class="btn btn-success"]';
        this.lt_txtcountry = '#country';
        this.lt_chktermscondition = 'input[id="checkbox2"]';
        this.lt_purchasedorder = 'input[class="btn btn-success btn-lg"]';
        this.lt_gettext = 'div[class="alert alert-success alert-dismissible"]';
        this.lt_cartProduct_totalprice = 'tr td:nth-child(4) strong';
        this.lt_carttotal = 'td[class="text-right"] h3 strong';


    }

    btn_shoppingcheckout() {

        return cy.get(this.lt_btnshoppoingcheckout)
    }

    btncheckout() {

        return cy.get(this.lt_btncheckout)
    }

    fillcountry() {
        return cy.get(this.lt_txtcountry)
    }

    checkbox_terms() {

        return cy.get(this.lt_chktermscondition)
    }

    purchased_order() {

        return cy.get(this.lt_purchasedorder)
    }

    success_message() {

        return cy.get(this.lt_gettext)
    }

    cartproduct_totalprice() {

        return cy.get(this.lt_cartProduct_totalprice)

    }

    carttotal() {

        return cy.get(this.lt_carttotal)
    }


}


const productpage = new Productpage()
export default productpage