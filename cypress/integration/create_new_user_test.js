import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

describe('Case Study Select Payment Test', () => {
    it('create new account', () => {
        const home_page = new HomePage();
        home_page.visit('https://juice-shop.herokuapp.com/')
        home_page.close_popup();
        home_page.select_language();
        home_page.navigate_to_login_page();

        const login_page = new LoginPage();
        login_page.verify_login_page_displayed();
        login_page.navigate_to_register_page();

        const register_page = new RegisterPage();
        register_page.verify_register_page_displayed();
        register_page.enter_newName('test777@gmail.com');
        register_page.enter_newPassword('12345687');
        register_page.enter_repeatPassword('12345687');
        register_page.select_security_question();
        register_page.enter_answer();
        register_page.register_btn_click();

    });
});