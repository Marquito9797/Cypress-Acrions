// Função de Logar com validação da tela inicial
class Logar {loginAs(username, password) {

        // Variaveis de ambiente
        const user = Cypress.env('user');
        const senha = Cypress.env('senha'); 

         //Ação de login
         cy.visit('login/autenticacao.jsp');
         cy.get('#usrNome').type(user, { log: false, sensitive: true }); // Não mostrar o usuário no log
         cy.get('#password').type(senha, { log: false, sensitive: true }); // Não mostrar a senha no log
         cy.get('.botaoEntrar').click(); 
     
        // Validação de Login Bem Sucedido
        cy.get('div.infoParallegram').should('be.visible').
        and('contain', 'Olá');
        cy.url().should('include', '/home');
    }
}
export default Logar;
