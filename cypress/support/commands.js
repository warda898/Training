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
 Cypress.Commands.add('AccessTheLoginPage', (email, password) => {
    cy.visit('https://opencart.abstracta.us/index.php?route=account/login')
  
    
 cy.get('#input-email').type(email)

 cy.get('#input-password').type(password)
 

 cy.get('input[value="Login"]').should ('be.visible').click();
 cy.get('#content > :nth-child(1)').should('have.text','My Account') 
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
