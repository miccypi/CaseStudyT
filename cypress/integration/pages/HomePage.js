class HomePage {
    visit(){
        cy.visit('https://juice-shop.herokuapp.com/');
    }
    close_popup(){
        cy.contains('Dismiss').click();
        cy.contains('Me want it!').click();
    }
    select_language(){
        cy.get('.mat-focus-indicator.mat-tooltip-trigger.mat-menu-trigger.buttons.mat-button.mat-button-base').click();
        cy.contains(' English ').click();
    }
    navigate_to_login_page() {
        cy.get('#navbarAccount').click();
        cy.get('#navbarLoginButton').click();
    }

}

export default HomePage