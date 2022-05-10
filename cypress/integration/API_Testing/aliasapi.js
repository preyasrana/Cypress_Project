describe('API Testing using Alias', () => {

    beforeEach(() => {

        cy.request('/users?page=2').as('users')
    })


    it('Get API Test', () => {

        cy.get('@users')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json; charset=utf-8')


    })

    it('Verify Status Code', () => {

        cy.get('@users')
            .its('status')
            .should('equal', 200)

    })

    it('Verify body contains', () => {

        cy.get('@users')
            .its('body')
            .should('contains', { 'total_pages': 2 })
    })


    it('Validate user info in data json array', () => {

        cy.get('@users')
            .its('body').then((resp) => {

                //expect(resp.status).equal(200)
                expect(resp.data[0]).has.property('id', 7)
                expect(resp.data[0]).has.property('email', 'michael.lawson@reqres.in')
                expect(resp.data[0]).has.property('first_name', 'Michael')
                expect(resp.data[0]).has.property('last_name', 'Lawson')
                expect(resp.data[0]).has.property('avatar', 'https://reqres.in/img/faces/7-image.jpg')

            })
    })



})