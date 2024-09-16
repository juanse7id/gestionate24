/// <reference types="Cypress" /> 
import selectors from './selectores/login_select'
///hook -> 'it' = prueba individual

it('gestionate',function(){
    cy.visit("http://192.168.100.134:8080/gestionate/app/#/login")
    cy.wait(5000)
})