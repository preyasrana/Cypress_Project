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

//select product method
Cypress.Commands.add('selectproduct',(productname) =>{

  cy.get("h4[class='card-title']").each(($el, index, $list) => {
    if ($el.text().includes(productname)) {
        cy.get('button.btn.btn-info').eq(index).click()
    }
  })
})


Cypress.Commands.add('Searchproduct', (productname)=> {

    cy.get('.search_query').type(productname)
    cy.get("button[name='submit_search']").click()

})

Cypress.Commands.add('login', (username, password) => {
  cy.request({
    method: 'POST',
    url: '/login',
    body: { username, password },
  }).then(({ body }) => {
    window.localStorage.setItem('authToken', body.token)
  })
})

// save session data at the end of an it()
Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach((key) => {
      LOCAL_STORAGE_MEMORY[key] = localStorage[key];
    });
  });
  
  // restore session data at the beginning of an it()
  Cypress.Commands.add("restoreLocalStorage", () => {
    Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
      localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key]);
    });
  });







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
