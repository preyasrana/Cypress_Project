describe('Launch App', () => {

    before(function () {

        cy.fixture('Login').then(function(data){

            cy.log(data)
            this.data = data
        })
    })

    it('Login test', function(){
        cy.viewport(1920, 1080)
        cy.visit('http://practice.automationtesting.in/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify Page login title Should be visible or not 

       cy.login(this.data.username, this.data.password)
    })




})