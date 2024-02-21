class TokenPage {
    createToken(username, password) {
        return cy.request({
           method: 'POST',
           url: 'https://restful-booker.herokuapp.com/auth',
           body: {
             username: username,
             password: password
           }
         })
    
    }
  }
  
  export default new TokenPage();
  