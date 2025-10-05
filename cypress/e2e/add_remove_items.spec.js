describe('Add and remove items', () => {
    beforeEach(() => {
      cy.login();
    });
  
    it('adds items to cart and removes them', () => {
      cy.addItemToCartByName('Sauce Labs Backpack');
      cy.addItemToCartByName('Sauce Labs Bike Light');
  
      cy.get('.shopping_cart_badge').should('contain', '2');
  
      // go to cart
      cy.get('.shopping_cart_link').click();
      cy.get('.cart_item').should('have.length', 2);
  
      // remove first item
      cy.get('.cart_item').first().find('button').click();
      cy.get('.cart_item').should('have.length', 1);
  
      // continue shopping and assert badge updated
      cy.get('[data-test="continue-shopping"]').click();
      cy.get('.shopping_cart_badge').should('contain', '1');
    });
  });
  