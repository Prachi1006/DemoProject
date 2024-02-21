class productDetail {

   login(ename, password) {
      cy.xpath("//div[@class='ec_cart_input_row'][1] //input").type(ename)
      cy.xpath("//div[@class='ec_cart_input_row'][2] //input").type(password)
      cy.xpath("//button[text()='SIGN IN']").click({ force: true })
   }

   AddtoCartfromProduct() {
      cy.xpath("//input[@value='ADD TO CART']").click()
   }
}

export default new productDetail();
