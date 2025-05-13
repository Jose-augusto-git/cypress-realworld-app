export class personalPage{
    buttonMine(){
        cy.get("[href='/personal']").click()

    }

    checkAccessPersonalPage(){
        cy.location('pathname').should('equal','/personal')

    }

    transactionHistory(){
        cy.get("[data-test='transaction-list']").should('be.visible')

    }

    datePersonalTransaction(){
        cy.get("[data-test='transaction-list-filter-date-range-button']").click()
        cy.get("[data-date='2025-05-04']").click()
        cy.get("[data-date='2025-05-05']").click()

    }

    messageNoPersonalTransaction(){
        cy.get("[data-test='empty-list-header']").should('have.text','No Transactions')
    }


}