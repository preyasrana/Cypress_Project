// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --

//const Cypress = require("cypress")

import 'cypress-file-upload';

Cypress.Commands.add('login',(username, password)=>{

    cy.get('#username').type(username)
    cy.get('input#password').type(password)
    cy.get('input[type="submit"][name="login"]').click()

})

Cypress.Commands.add('Searchproduct', (productname)=> {

    cy.get('.search_query').type(productname)
    cy.get("button[name='submit_search']").click()

})


//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
