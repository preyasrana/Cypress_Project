describe('API Testing App', () => {

    it('Get API Test', () => {
        cy.request('https://flask-rest-api-demo.herokuapp.com/product/motorbike').then((resp) => {

            expect(resp.status).equal(200)
            expect(resp.body.product[0]).has.property('price', 599.99)
            expect(resp.body.product[0]).has.property('product', 'motorbike')

        })

    })

    it('Get API Test', () => {
        cy.request('https://flask-rest-api-demo.herokuapp.com/users').then((resp) => {

            expect(resp.status).equal(200)
            expect(resp.body.users[0]).has.property('username', 'test_1')
            expect(resp.body.users[0]).has.property('password', 'qwert')
            expect(resp.body.users[1]).has.property('id', 2)
            expect(resp.body.users).has.length(5)
            expect(resp.body.users[0]).not.have.property('price')

        })
    })

    it('Get Reqres Test', () => {
        cy.request('https://reqres.in/api/users?page=2').as('user list api').then((resp) => {

            expect(resp.status).equal(200)
            expect(resp.body.data[0]).has.property('first_name', 'Michael')
            expect(resp.body.data[1]).has.property('last_name', 'Ferguson')
            

        })
    })

})