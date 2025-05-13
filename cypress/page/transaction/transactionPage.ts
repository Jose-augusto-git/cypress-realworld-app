export class transactionPage{
    buttonNewTransaction(){
        cy.get("[href='/transaction/new']").click()

    }

    checkAccessTransaction(){
        cy.location('pathname').should('equal','/transaction/new')
    }

    selectContatTransation(){
        cy.get("[data-test='user-list-item-WHjJ4qR2R2']").click()
    }

    inputAmount(){
        cy.get("[name='amount']").type('1000')
    }

    addNoteAmount(){
        cy.get('#transaction-create-description-input').type('Transferencia de pagamento')
    }

    payTransation(){
        cy.get("[data-test='transaction-create-submit-payment']").click()
    }

    alertTranstionSuccess(){
        cy.get('[data-test="alert-bar-success"]').should('be.visible')
        cy.get('[data-test="alert-bar-success"]').should('have.text','Transaction Submitted!')
    }

    alertTranstionErro(){
        cy.get('[data-test="alert-bar-success"]').should('not.be.visible')
        
    }


    
}