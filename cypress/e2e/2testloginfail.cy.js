//<reference types="Cypress" /> 
import selectores from './selectores/selectores';
describe('login test fail', () => {
var datosusuarios;
    beforeEach('pass test', () => {
        //la url se encuentra en cypress.config.js
        cy.visit('/'); 
        cy.wait(5000)
        cy.fixture('./users_fail')
        .then(login_test_fail => {
            datosusuarios = login_test_fail;
        });    
    });

it('gestionate',()=>{
    datosusuarios.forEach((data) =>{
        cy.get(selectores.login_select.users).click().type(data.Usuario1)
        cy.get(selectores.login_select.password).click().type(data.Password1)
        cy.get(selectores.login_select.btn_iniciar_sesion).click()
        cy.get('#mat-mdc-error-2').should('have.text', ' El usuario o la contraseña son incorrectos')
        cy.wait(5000)
        cy.get(selectores.login_select.users).click().clear().type(data.Usuario2)
        cy.get(selectores.login_select.password).click().clear().type(data.Password2)

    });
    });

});

//modificar users_fAIL.JSON
