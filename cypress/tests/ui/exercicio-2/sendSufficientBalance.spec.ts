import {accessLoginPage} from '../../../page/accessLogin/accessLoginPage'
import { loginPage } from '../../../page/login/loginUserPage';
import { transactionPage } from '../../../page/transaction/transactionPage';

const accessLogin = new accessLoginPage
const login = new loginPage
const transaction = new transactionPage


describe('Enviar dinheiro com saldo suficiente', () => {
  it('CT01 - Deve enviar dinheiro com sucesso', () => {
    // Implemente os passos do caso de teste aqui
    accessLogin.accessLogin();

    login.loginUserRegistrySuccess();
    login.loginPasswordRegistrySuccess();
    login.buttonSignInLogin();

    cy.get('[data-test="sidenav-username"]').should('be.visible');

    transaction.buttonNewTransaction();
    transaction.checkAccessTransaction();
    transaction.selectContatTransation();
    transaction.inputAmount();
    transaction.addNoteAmount();
    transaction.payTransation();
    transaction.alertTranstionSuccess();

  });
});