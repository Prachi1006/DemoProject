class HomePage {
    visit() {
        cy.visit('https://academybugs.com/find-bugs/');
    }

    HomePageTitleVerification() {
        cy.title().should('eq', 'Find Bugs – AcademyBugs.com')
        cy.get('.sq-site-title').contains('AcademyBugs.com').should('exist')
    }

    closeBugPopUp() {
        cy.get('div#pum-4406 div button').click()
        cy.get('div#pum-4393 div button').click()
    }

    clickOnBillingAddress() {
        cy.get('.academy-bug-18').click()
    }

    signOutFunction() {
        cy.get('div.ec_account_right > div:nth-child(6) > a').click()
    }

    clickOnProductImage() {
        cy.get('.ec_product_li').eq(1).click()
    }

    clickOnNewUseLink() {
        cy.get('.ec_account_right.ec_account_login div:nth-child(2)').click()
    }

    AddtoCart() {
        cy.get('span.ec_product_addtocart').eq(1).click()
    }

    viewCartMessageValidation() {
        cy.get('div.ec_product_added_to_cart').should('contain', 'Product successfully added to your cart.')
    }

    clickOnViewCartButton() {
        cy.get('.ec_product_added_to_cart > a').should('contain', 'View Cart').click()
    }
}

export default new HomePage();
