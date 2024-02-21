class shoppingCart {

  verifyTableColumnName() {
      cy.get('table').find('thead').contains('th', 'Product').should('exist');
  }

  clickOnCheckOutButton() {
    cy.get('.ec_cart_button_checkout').click()
  }

  increaseQuntity() {
    cy.xpath('//input[@type="number"]').type('3')
    cy.xpath("//div[text()='UPDATE']").click()
  }

}

export default new shoppingCart();
