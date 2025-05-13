import {accessLoginPage} from '../../../page/accessLoginPage/accessLoginPage'
import { registryLoginPage } from '../../../page/login/registryLoginPage';

const accessLogin = new accessLoginPage
const registryLogin = new registryLoginPage


describe('Tentar registrar um novo usuário com informações incompletas', () => {
  it('CT01 - Deve exibir mensagens de erro ao tentar registrar um novo usuário sem preencher todas as informações obrigatórias', () => {
    // Implemente os passos do caso de teste aqui
    accessLogin.accessLogin();
    
    registryLogin.linkButtonSignUp();
    registryLogin.firstNameSignUp();
    registryLogin.lastNameSignUp();
    registryLogin.usernameSignUp();
    registryLogin.passwordInvalidSignUp();
    registryLogin.confirmPasswordInvalidSignUp();
    registryLogin.buttonDisabledConfirmSignUp();



  });
});