import selectores from './selectores/selectores';
describe('login test fail', () => {
var datosusuarios;
    beforeEach('pass test', () => {
        cy.visit('/'); 
        cy.wait(2000)
        cy.fixture('./users_fail')
        .then(login_test_fail => {
            datosusuarios = login_test_fail;
        });    
    });

it('gestionate',()=>{
    datosusuarios.forEach((data) =>{
        cy.get(selectores.login_select.users).click().type(data.Usuario)
        cy.get(selectores.login_select.password).click().type(data.Password)
        cy.get(selectores.login_select.btn_iniciar_sesion).click()
        cy.get(selectores.login_select.msg_invald).should('be.visible')
        cy.wait(1000)
        cy.get(selectores.login_select.btn_iniciar_sesion).click()
        cy.get(selectores.login_select.pop_up_verif_pass).should('be.visible')
        cy.wait(2000)
        cy.get(selectores.login_select.btn_cancelar).click()
    });
    });

});