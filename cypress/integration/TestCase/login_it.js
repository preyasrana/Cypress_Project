describe('Launch App', function () {


    it('User Should Login Case', function () {
        cy.viewport(1920, 1080)
        cy.visit('http://practice.automationtesting.in/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify Page login title Should be visible or not 
        cy.get('div[class="u-column1 col-1"] h2').should('be.visible')
            .and('contain', 'Login')
            .and('have.length', '1')

        //cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.url().should('include', '/my-account/')
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li').should('have.length', '6')
    })

    it('Click on Address link', function () {
        cy.viewport(1920, 1080)
        cy.visit('http://practice.automationtesting.in/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify Page login title Should be visible or not 
        cy.get('div[class="u-column1 col-1"] h2').should('be.visible')
            .and('contain', 'Login')
            .and('have.length', '1')

        //cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.wait(500)
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(4)>a')
            .click().url().should('include', '/edit-address/')
    })

    it('Click on Dashboard link', function () {
        cy.viewport(1920, 1080)
        cy.visit('http://practice.automationtesting.in/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify Page login title Should be visible or not 
        cy.get('div[class="u-column1 col-1"] h2').should('be.visible')
            .and('contain', 'Login')
            .and('have.length', '1')

        //cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.wait(500)
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(1)>a')
            .click().url().should('include', '/my-account/')
    })

    it('Click on Orders link', function () {
        cy.viewport(1920, 1080)
        cy.visit('http://practice.automationtesting.in/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify Page login title Should be visible or not 
        cy.get('div[class="u-column1 col-1"] h2').should('be.visible')
            .and('contain', 'Login')
            .and('have.length', '1')

        //cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.wait(500)
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(2)>a')
            .click().url().should('include', '/orders/')
    })

    it('Click on Download link', function () {
        cy.viewport(1920, 1080)
        cy.visit('http://practice.automationtesting.in/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify Page login title Should be visible or not 
        cy.get('div[class="u-column1 col-1"] h2').should('be.visible')
            .and('contain', 'Login')
            .and('have.length', '1')

        //cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.wait(500)
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(3)>a')
            .click().url().should('include', '/downloads/')
    })

    it('Click on Download link', function () {
        cy.viewport(1920, 1080)
        cy.visit('http://practice.automationtesting.in/')
        cy.get('ul.main-nav>li:nth-of-type(2)>a').click()
        //Verify Page login title Should be visible or not 
        cy.get('div[class="u-column1 col-1"] h2').should('be.visible')
            .and('contain', 'Login')
            .and('have.length', '1')

        //cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.login('KIBQOQBYZW@gmail.com', 'dxVB58@&')
        cy.wait(500)
        cy.get('nav.woocommerce-MyAccount-navigation>ul>li:nth-of-type(3)>a')
            .click().url().should('include', '/downloads/')
    })


})