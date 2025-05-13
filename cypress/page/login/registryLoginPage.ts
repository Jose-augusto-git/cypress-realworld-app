export class registryLoginPage{
    linkButtonSignUp(){
        cy.get("[data-test='signup']").click()
    }

    firstNameSignUp(){
        cy.get('#firstName').type('dev')
    }

    lastNameSignUp(){
        cy.get('#lastName').type('QA')
    }

    usernameSignUp(){
        cy.get('#username').type('dev_QA')
    }

    passwordSignUp(){
        cy.get('#password').type('1234')
    }

    confirmPasswordSignUp(){
        cy.get("[name='confirmPassword']").type('1234')
    }

    passwordInvalidSignUp(){
        cy.get('#password').type('123')
    }

    confirmPasswordInvalidSignUp(){
        cy.get("[name='confirmPassword']").type('123')
    }


    buttonConfirmSignUp(){
        cy.get("[data-test='signup-submit']").click()
    }

    buttonDisabledConfirmSignUp(){
        cy.get("[data-test='signup-submit']").should('be.disabled')
    }

}