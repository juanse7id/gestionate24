import selectores from './selectores/selectores';
describe('login test ok', () => {
var datosusuarios;
    beforeEach('pass test', () => {
        //la url se encuentra en cypress.config.js
        cy.visit('/'); 
        cy.wait(5000)
        cy.fixture('./users_ok')
        .then(login_test => {
            datosusuarios = login_test;
        });    
    });

it('gestionate',()=>{
    datosusuarios.forEach((data) =>{
        cy.get(selectores.login_select.users).click().type(data.Usuario)
        cy.get(selectores.login_select.password).click().type(data.Password)
        cy.get(selectores.login_select.btn_iniciar_sesion).click()
        cy.wait(5000)
        cy.get(selectores.login_select.btn_logout).click()
    });
    });

});
