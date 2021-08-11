class LoginPage {
    verify_login_page_displayed(){
            cy.url().should('include', 'login');
        }
    enter_username(value){
        const username = cy.get('input[id=email]');
        username.clear();
        username.type(value);
        return this
    }
    enter_password(value){
        const password = cy.get('input[id=password]');
        password.clear();
        password.type(value);
        return this
    }
    login_btn_click(){
        cy.get('button[id=loginButton').click();
    }
    navigate_to_register_page(){
        cy.get('#newCustomerLink').click();
    }
}

export default LoginPage