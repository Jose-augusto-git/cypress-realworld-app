import {accessLoginPage} from '../../../page/accessLogin/accessLoginPage'
import { loginPage } from '../../../page/login/loginUserPage';
import { personalPage } from '../../../page/personal/personalPage';

const accessLogin = new accessLoginPage
const login = new loginPage
const personal = new personalPage


describe('Visualizar histórico de transações com sucesso', () => {
  it('CT01 - Deve exibir o histórico de transações de um usuário corretamente', () => {
    // Implemente os passos do caso de teste aqui
    accessLogin.accessLogin();

    login.loginUserRegistrySuccess();
    login.loginPasswordRegistrySuccess();
    login.buttonSignInLogin();

    cy.get('[data-test="sidenav-username"]').should('be.visible')

    personal.buttonMine();
    personal.checkAccessPersonalPage();
    personal.transactionHistory();


  });
});