// <reference types="Cypress" /> 
import selectores from './selectores/selectores';
import login_select from './selectores/selectores';
import selectors from './selectores/selectores'
///hook -> 'it' = prueba individual

describe('login test', () => {
var misdatos;
    beforeEach('pass test', () => {
        //la url se encuentra en cypress.config.js
        cy.visit('/'); 
        cy.wait(5000)
        cy.fixture('./users_ok')
        .then(mis_test => {
            misdatos = mis_test;
        });    
    });

it('gestionate',()=>{
    misdatos.forEach((data) =>{
        cy.get(selectores.login_select.users).type(data.usuario)
    });
    });

});

//subir cambios