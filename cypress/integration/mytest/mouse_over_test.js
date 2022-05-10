describe('Launch App', () => {

    it('Lunch Website', () => {

        cy.visit('http://practice.automationtesting.in/')
        // cy.visit('https://www.nike.com/in/')
        cy.viewport(1366, 768)
    })

    it('MouseOver on Searchbar', () => {
        cy.viewport(1980, 768)
        // cy.viewport('macbook-16')
        //cy.get('ul.pre-desktop-menu li:nth-of-type(1)>a').trigger("mouseover")

        //cy.get('#wpmenucartli').trigger("mouseover")
        cy.wait(500)

        //  cy.get('div#mobile-menu div#searchform-wrap form i').trigger('mouseover')

        cy.get('i.icon-search').trigger('mouseover', { force: true }).within(() => {

            cy.get('+#s').trigger('mouseover', { force: true })

        })


        // const win = $els[0].ownerDocument.defaultView
        // const before = win.getComputedStyle($els[0], 'before')
        // const contentValue = before.getPropertyValue('content')
        // //print(contentValue)
        // cy.log(contentValue)
        //expect(contentValue).to.eq('"foo-"')



        //cy.get('div#mobile-menu div#searchform-wrap form i',{timeout: 10000}).trigger('mouseover')
        // cy.get('div#searchform-wrap',{timeout: 10000}).within(()=>{

        // cy.get('form#searchform i+input',{timeout: 10000}).trigger('mouseover')
        // cy.get('#s',{timeout: 10000}).should('be.visible')

    })
    // cy.get('div#searchform-wrap i[class="icon-search"]',{timeout: 15000}).should('be.visible').trigger("mouseover")
    //cy.get('div#searchform-wrap i[class="icon-search"]').trigger('mouseover')
    // cy.get('#searchform').type('selenium ruby')

})

describe.skip('Launch Nike App', () => {

    it('Lunch Nike Website', () => {
        cy.visit('https://www.nike.com/in/')
        cy.viewport(1366, 768)
    })

    it('MouseOver on Searchbar', () => {
        cy.viewport(1980, 768)
        cy.get('ul.pre-desktop-menu li:nth-of-type(1)>a').trigger("mouseover")
    })
})


describe.skip('Add to cart Scenario', () => {

    it('Lunch automationpractice Website', () => {
        cy.visit('http://automationpractice.com/index.php')
        cy.viewport(1366, 768)
    })

    it('MouseOver on Searchbar', () => {

        cy.viewport(1366, 768)
        //cy.get('.ajax_add_to_cart_button').first().scrollIntoView()
        //cy.get('.ajax_add_to_cart_button').first().should('be.hidden').invoke('show')
        //cy.get('.ajax_add_to_cart_button').first().click()
        cy.get('ul#homefeatured li:nth-of-type(1)').trigger('mouseover').within(() => {

            cy.get("div.right-block div.button-container a[title=\"Add to cart\"]").click()
            cy.wait(1000)
            cy.get("div.right-block div.button-container a[title=\"Add to cart\"]").click()
            // .should('be.visible').within(() => {

            //     cy.get('a[title="Add to cart"]')
            //         .click()
            cy.wait(20000)
            // })

        })

        cy.wait(3000)


    })
})



















