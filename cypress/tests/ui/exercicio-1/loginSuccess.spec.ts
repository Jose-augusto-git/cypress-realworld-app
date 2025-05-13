import {accessLoginPage} from '../../../page/accessLoginPage/accessLoginPage'
import { loginPage } from '../../../page/login/loginUserPage';

const accessLogin = new accessLoginPage
const login = new loginPage

describe('Login com sucesso', () => {
  it('CT01 - Deve fazer login com um usuário válido', () => {
    // Implemente os passos do caso de teste aqui
    accessLogin.accessLogin();

    login.loginUser();
    login.loginPassword();
    login.buttonSignInLogin();


    cy.get('[data-test="sidenav-username"]').should('be.visible')


  });
});

