class RegisterPage {
    verify_register_page_displayed(){
        cy.url().should('include', 'register');
    }
    enter_newName(value){
        const newName = cy.get('input[id=emailControl]');
        newName.clear();
        newName.type(value);
        return this
    }
    enter_newPassword(value){
        const newPassword = cy.get('input[id=passwordControl]');
        newPassword.clear();
        newPassword.type(value);
        return this
    }
    enter_repeatPassword(value){
        const repeatPassword = cy.get('input[id=repeatPasswordControl]');
        repeatPassword.clear();
        repeatPassword.type(value);
        return this
    }
    select_security_question(value){
        cy.get('[name="securityQuestion"]').click();
        cy.get('.mat-select > .mat-select-trigger > .mat-select-arrow-wrapper > .mat-select-arrow').click();
        cy.get('[name="securityQuestion"]').click();
        cy.wait(3000)
        cy.get('.mat-option-text').contains('eldest').click();
    }
    enter_answer(value){
        const securityAnswer = cy.get('input[id=securityAnswerControl]');
        securityAnswer.clear();
        securityAnswer.type(value);
        return this
    }
    register_btn_click(){
        cy.get('#registerButton').click()
    }

}

export default RegisterPage