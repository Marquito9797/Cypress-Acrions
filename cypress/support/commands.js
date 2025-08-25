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
// Cypress.Commands.add('login', (email, password) => { ... })
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

Cypress.Commands.add('CarregamentoGrande', () => {
  cy.get('#statusModalShow > .ui-dialog-titlebar', { timeout: 20000 })
    .should('not.be.visible');
    cy.wait(20000); // Espera 20 segundo para garantir que o carregamento foi concluído
});
Cypress.Commands.add('CarregamentoCurto', () => {
  cy.get('#statusModalShow > .ui-dialog-titlebar', { timeout: 5000 })
    .should('not.be.visible');
    cy.wait(5000); // Espera 5 segundo para garantir que o carregamento foi concluído
});
