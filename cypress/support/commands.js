
/// <reference types="cypress" />
Cypress.Commands.add('login', (username = 'standard_user', password = 'secret_sauce') => {
  cy.visit('/');
  cy.get('[data-test="username"]').clear().type(username);
  cy.get('[data-test="password"]').clear().type(password);
  cy.get('[data-test="login-button"]').click();
  cy.location('pathname').should('include', 'inventory.html');
});

Cypress.Commands.add('logout', () => {
  cy.get('#react-burger-menu-btn').click();
  cy.get('#logout_sidebar_link').click();
  cy.location('pathname').should('eq', '/');
});

Cypress.Commands.add('addItemToCartByName', (name) => {
  cy.contains('.inventory_item', name).within(() => {
    cy.get('button').click();
  });
});

Cypress.Commands.add('removeItemFromCartByName', (name) => {
  cy.contains('.inventory_item', name).within(() => {
    cy.get('button').click();
  });
});
