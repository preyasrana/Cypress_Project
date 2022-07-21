class Homepage {


    constructor() {

        //Defined Locator
        this.lt_name = 'input[name="name"]:nth-child(2)';
        this.lt_pwd = '#exampleInputPassword1';
        this.lt_gender = 'select[id="exampleFormControlSelect1"]';
        this.lt_data_binding = 'input[name="name"]:nth-child(1)';
        this.lt_empstatus_Entrepreneur = 'input[id="inlineRadio3"]';
        this.lt_shoplink = 'a[href="/angularpractice/shop"]';
    }

    fillname() {

        return cy.get(this.lt_name)

    }

    fillpassword() {

        return cy.get(this.lt_pwd)
    }



    selectgender() {

        return cy.get(this.lt_gender)

    }

    databinding() {

        return cy.get(this.lt_data_binding)
    }


    employee_status_Entrepreneur() {

        return cy.get(this.lt_empstatus_Entrepreneur)
    }


    shoplink() {
        return cy.get(this.lt_shoplink)

    }



}


const homepage = new Homepage()
export default homepage