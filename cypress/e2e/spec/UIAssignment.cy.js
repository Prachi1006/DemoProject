// tests/academyBugs.spec.js
import HomePage from '../UIFunctionFolder/HomePage';
import shoppingCart from '../UIFunctionFolder/shoppingCart';
import checkoutPage from '../UIFunctionFolder/checkoutPage';
import productDetail from '../UIFunctionFolder/productDetail';

describe('Academy Bugs Website Tests', () => {
    let data
    before(() => {
        cy.fixture("uiData").then((jsonData) => {
            data = jsonData;
        })
    })
    beforeEach(() => {
        
        HomePage.visit();
    });

    it('Positive Scenario: Verify Page title verification', () => {
        HomePage.HomePageTitleVerification()
    });
    it('Positive Scenario: Verify able to login application with Valid credential and found 5 bugs', () => {
        HomePage.clickOnProductImage()
        HomePage.closeBugPopUp()
        productDetail.login(data.email,data.password)
        cy.get('div#pum-4406 div button').click()
        HomePage.clickOnBillingAddress()
        HomePage.closeBugPopUp()
        HomePage.signOutFunction()
        HomePage.clickOnNewUseLink()
        HomePage.closeBugPopUp()
        productDetail.login(data.email,data.password)
        HomePage.closeBugPopUp()
        
        });
    it('Positive Scenario: Verify able to add products from FindBugs page and View Cart message validation', () => {
        HomePage.AddtoCart()
        HomePage.viewCartMessageValidation()
        HomePage.clickOnViewCartButton()
        shoppingCart.verifyTableColumnName()
        shoppingCart.clickOnCheckOutButton()
        
        
    });
    it('Positive Scenario: Verify able to add products from product detail page and navigate to shopping cart page and found one bug', () => {
        HomePage.clickOnProductImage()
        HomePage.closeBugPopUp()
        productDetail.AddtoCartfromProduct()
        shoppingCart.verifyTableColumnName()
        shoppingCart.increaseQuntity()
        HomePage.closeBugPopUp()

   });

    
});
