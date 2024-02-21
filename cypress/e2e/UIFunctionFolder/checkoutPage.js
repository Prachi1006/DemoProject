class checkoutPage {

  selectCountry() {
    cy.get('select#ec_cart_billing_country').find('option').each((dropdown, index) => {
      if (dropdown.text().includes('Canada')) {
        cy.log(dropdown.text())
        cy.wrap(dropdown).click()
      };
    });
  }
}

export default new checkoutPage();
