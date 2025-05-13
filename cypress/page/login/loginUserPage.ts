const dadosLogin = require('../../fixtures/user-date.json')

export class loginPage{
    loginUser(){
        cy.get("[name='username']").type(dadosLogin.credencialValida1.usuario)
    }

    loginPassword(){
        cy.get("[type='password']").type(dadosLogin.credencialValida1.senha)
    }

    loginUserRegistrySuccess(){
        cy.get("[name='username']").type(dadosLogin.credencialValida2.usuario)
    }

    
    loginPasswordRegistrySuccess(){
        cy.get("[name='password']").type(dadosLogin.credencialValida2.senha)
    }

    loginUseInvalid(){
        cy.get("[name='username']").type(dadosLogin.credencialInvalida.usuario)
    }

    buttonSignInLogin(){
        cy.get("[type='submit']").click()

    }

    alertLoginErro(){
        cy.get("[data-test='signin-error']").should('be.visible')
        cy.get('.MuiAlert-message').should('have.text','Username or password is invalid')
    }

}