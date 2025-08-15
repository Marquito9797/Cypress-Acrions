// Esta classe busca informações no menu principal do sistema
// IMPORTANTE: O ID do menu deve ser obtido inspecionando o elemento no navegador

class AcaoMenu {selectMenuItem(textoPesquisa, menuId) {
      
        // Passa o mouse no menu principal
         cy.get('#menuPrincipal').trigger('mouseover');
       
        // Digita na caixa de pesquisa
        cy.get('.txt-search')
          .should('be.visible')
          .clear()
          .type(textoPesquisa);

        // Clica na opção do menu específica
        cy.get(`li[menu="${menuId}"]`) 
          .should('be.visible')
          .click();
    }
}
export default AcaoMenu;
