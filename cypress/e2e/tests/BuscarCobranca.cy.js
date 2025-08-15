import Logar from '../actions/Logar';
import AcaoMenu from '../actions/Menu'; 

 const login = new Logar();
 const menu = new AcaoMenu();
 const idPdv = '1208859';
 const dataInicio = '01/08/2025';
 const dataFim = '30/08/2025';

 // Podemos buscar a cobrança pelo código tambem, é necessário alterar a linha 30 e 31 para o item desejado

describe('Buscar Cobrança', () => {
    it('Logar e Entrar na tela', () => {
        cy.on('uncaught:exception', (err, runnable) => {return false}); // Como o sistema apresenta erros de JS (timeout), essa linha ignora esses erros
       
        login.loginAs(); // login definido na classe Logar
        menu.selectMenuItem('Estabelecimento', '130'); // Navegação do menu, definido na classe Menu

        //Buscar a cobrança - Aqui já estamos na tela de Estabelecimento
        cy.get('#primeiroFocoPesquisa').type(idPdv);
        cy.get('#botaoPesquisar > .ui-button-text').click();
        cy.get('.ui-datatable-even > :nth-child(3)').dblclick(); // Abre a tela de informações do PDV (Necessário duplo clique)
                cy.Carregamento(); // Chama a função de carregamento, necessário um tempo para carregar a tela devido ao ambiente de testes
        cy.get('#estabelecimentoTabView\:abasEstabelecimento\:tabViewEstabelecimento\:frmEstabelecimento\:nomeFantasia').should('have.value', idPdv); // Valida se é o PDV correto                
        cy.get('.ui-tabs-nav > :nth-child(8) > a').click(); // Clica na aba Financeiro
                cy.Carregamento(); 
        cy.get('#estabelecimentoTabView\:financeiroTabView > :nth-child(1) > :nth-child(2) > a').click(); // Clica na opção Buscar Cobrança
                cy.Carregamento(); 
        cy.get('#estabelecimentoTabView\:financeiroTabView\:frmCobrancas\:dataInicioFCm').type(dataInicio); // Preenche a data de início
        cy.get('#estabelecimentoTabView\:financeiroTabView\:frmCobrancas\:dataInicioFCm').type(dataFim); // Preenche a data de fim
        cy.get('#estabelecimentoTabView\:financeiroTabView\:frmCobrancas\:botaoPesquisarCobrancas > .ui-button-text').click(); // Clica no botão de pesquisar cobranças
                cy.Carregamento();
        });
    });
