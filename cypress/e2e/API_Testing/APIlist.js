describe('API Testing App', function () {


    it('get api list', function () {


        cy.intercept({
            method: 'GET',
            url: 'https://flask-rest-api-demo.herokuapp.com/product/motorbike',
        },

            {

                statusCode: 200,
            }






        )


    })


})