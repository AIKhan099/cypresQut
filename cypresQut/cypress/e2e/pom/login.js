/// <reference types="cypress"/>
import "cypress-xpath";
class Login {
    // Elements
    get username() { return cy.get('#username') }
    get password() { return cy.get('#password') }
    get loginButton() { return cy.xpath('(//button[@type="submit"])[2]') }
    
    // Actions
     login(username, password) {
         this.username.type(username)
         this.password.type(password)
         this.loginButton.click()
    }
}
export default Login;