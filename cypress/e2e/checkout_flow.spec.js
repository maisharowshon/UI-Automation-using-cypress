describe('Checkout flow', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('completes checkout flow', () => {
      cy.addItemToCartByName('Sauce Labs Backpack');
  
      cy.get('.shopping_cart_link').click();
      cy.get('[data-test="checkout"]').click();
  
      // Fill info and continue
      cy.get('[data-test="firstName"]').type('Max');
      cy.get('[data-test="lastName"]').type('Mustermann');
      cy.get('[data-test="postalCode"]').type('10115');
      cy.get('[data-test="continue"]').click();
  
      // overview contains the item
      cy.get('.cart_list').should('contain', 'Sauce Labs Backpack');
  
      // finish
      cy.get('[data-test="finish"]').click();
  
      // assert final success screen
      cy.get('.complete-header').should('contain', 'Thank you for your order');
    });
  });
  