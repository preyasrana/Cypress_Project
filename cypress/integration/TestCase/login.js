



describe('Launch App', () => {



    it('Lunch Website', () => {
        cy.visit('http://practice.automationtesting.in/')
        cy.viewport(1920, 1080)
    })

    it('Reload Page', () => {
        cy.reload()
        
    })

    it('Click on my account link', () => {
        cy.viewport(1920, 1080)
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify my account link display or not 
        cy.url().should('include', '/my-account')
        cy.reload().url().should('include', '/my-account')
    })

    it('Forward & Backward browser option verify', () => {
        cy.viewport(1920, 1080)
        cy.go('back')
        //cy.go('-1')   backward browser
        //chaning method also do that  
       // cy.visit('http://practice.automationtesting.in/').go('back')
        cy.wait(200)
        //cy.go('1')   Forward browser
        cy.go('forward')
    })

    it('Verify lenth of links', () => {
        cy.viewport(1920, 1080)
        //should & get method verify length 
        cy.get('ul#main-nav li a').should('have.length', '6')
        //Find method verify length 
        cy.get('ul.social-links li').find('a[href]').should('have.length', '5')

    })

    it('Subscribed Here', () => {
        cy.viewport(1920, 1080)
        //Within method verify length 
        cy.get('form#mc4wp-form-1').within(() => {

            cy.get("input[type='email']").type('preyas.rana@zymr.com')

        })

    })


    

    it('Verify Login Case', () => {
        cy.viewport(1920, 1080)

        //Verify Page login title Should be visible or not 
        cy.get('div[class="u-column1 col-1"] h2').should('be.visible')
            .and('contain', 'Login')
            .and('have.length', '1')

        cy.login('KIBQOQBYZW@gmail.com','dxVB58@&')
        
       
    })

})


describe('Address Section', () => {

    it('Click on Address link', () => {
        cy.viewport(1920, 1080)
        cy.wait(500)
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(4)>a').click()
        //cy.wait(500)
        //Verify address link display or not 
        //cy.url().should('include', '/edit-address')
        
        
    })

    // it('Click on Billing Edit link', () => {
    //     cy.viewport(1920, 1080)
    //     cy.get("div[class='u-column1 col-1 woocommerce-Address'] a").click()
    //     //Verify edit address link display or not 
    //     cy.url().should('include', '/billing')
       
    // })
}
)