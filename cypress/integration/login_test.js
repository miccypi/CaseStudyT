import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

describe('Case Study Select Payment Test', () => {
    it('login test', () => {
        const home_page = new HomePage();
        home_page.visit('https://juice-shop.herokuapp.com/')
        home_page.close_popup();
        home_page.select_language();
        home_page.navigate_to_login_page();

        const login_page = new LoginPage();
        login_page.verify_login_page_displayed();
        login_page.enter_username('test002@gmail.com');
        login_page.enter_password('12345687');
        login_page.login_btn_click();

    });
});