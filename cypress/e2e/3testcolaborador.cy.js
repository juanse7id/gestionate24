import selectores from './selectores/selectores';
describe('test colaborador1', () => {
var colaborador1;
    before('visit gestionate', () => {
        cy.visit('/') 
        cy.wait(2000)
        cy.fixture('./users_ok')
        .then(login_test => {
            colaborador1 = login_test[0];
        });
    });
    it('login colaborador1', () => {
        cy.get(selectores.login_select.users).click().type(colaborador1.Usuario)
        cy.get(selectores.login_select.password).click().type(colaborador1.Password)
        cy.get(selectores.login_select.btn_iniciar_sesion).click()    
        cy.wait(2000)
    
    });
        
});