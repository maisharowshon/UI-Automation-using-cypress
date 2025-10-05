describe('Login/Logout', () => {
    it('logs in with valid credentials and logs out', () => {
        cy.visit('/');
        cy.get('[data-test="username"]').clear().type("standard_user");
        cy.get('[data-test="password"]').clear().type("secret_sauce");
        cy.get('[data-test="login-button"]').click();
        cy.location('pathname').should('include', 'inventory.html');

        cy.get('[data-test="inventory-list"]').should('be.visible');

        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        cy.location('pathname').should('eq', '/');

        cy.get('[data-test="username"]').should('be.visible');
    })
})
