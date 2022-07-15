beforeEach(function () {

    cy.fixture('register_practice').then(function (data) {

        this.data = data

    })
})