import {accessLoginPage} from '../../../page/accessLogin/accessLoginPage'
import { loginPage } from '../../../page/login/loginUserPage';
import { registryLoginPage } from '../../../page/login/registryLoginPage';

const accessLogin = new accessLoginPage
const login = new loginPage
const registryLogin = new registryLoginPage


describe('Registro de novo usuário com sucesso', () => {
  it('CT01 - Deve registrar um novo usuário com informações válidas', () => {
    // Implemente os passos do caso de teste aqui
    accessLogin.accessLogin();
    
    registryLogin.linkButtonSignUp();
    registryLogin.firstNameSignUp();
    registryLogin.lastNameSignUp();
    registryLogin.usernameSignUp();
    registryLogin.passwordSignUp();
    registryLogin.confirmPasswordSignUp();
    registryLogin.buttonConfirmSignUp();


    login.loginUserRegistrySuccess();
    login.loginPasswordRegistrySuccess();
    login.buttonSignInLogin();

    cy.get('[data-test="sidenav-username"]').should('be.visible')

  });
});