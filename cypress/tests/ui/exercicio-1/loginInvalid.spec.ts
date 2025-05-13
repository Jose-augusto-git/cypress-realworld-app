import {accessLoginPage} from '../../../page/accessLoginPage/accessLoginPage'
import { loginPage } from '../../../page/login/loginUserPage';

const accessLogin = new accessLoginPage
const login = new loginPage

describe('Tentar fazer login com credenciais inválidas', () => {
  it('CT01 - Deve exibir uma mensagem de erro ao fazer login com credenciais inválidas', () => {
    // Implemente os passos do caso de teste aqui
    accessLogin.accessLogin();

    login.loginUseInvalid();
    login.loginPassword();
    login.buttonSignInLogin();
    login.alertLoginErro();
 

  });
});

  