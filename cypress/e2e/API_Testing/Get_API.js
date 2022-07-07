

describe('API Testing App', () => {


    let accesstoken =  "0e33f7df0877b5c73c0228cd70a5b2b984db706cc6aef43ce27f5597e0184c21";

    it('Get Users', () => {

        cy.request(
            {
                method: 'GET',
                url: 'https://gorest.co.in/public-api/users/2',
                headers:
                {
                    'authorization': "Bearer"+ accesstoken
                }
            }).then((resp) => {


                expect(resp.status).equal(200)
                expect(resp.body.data.name).to.eq('Rajinder Dwivedi')

            })
    })
})