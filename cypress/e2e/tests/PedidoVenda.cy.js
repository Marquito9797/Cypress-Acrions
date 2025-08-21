import Logar from "../actions/Logar";
import AcaoMenu from "../actions/Menu";
import "../../support/commands"; // Importa os comandos personalizados

const login = new Logar();
const menu = new AcaoMenu();

// Contastantes de teste
const NomePdv = "teste";
const IdVendedor = "teste";
const Vencimento = "teste";
const Fornecedor = "teste";
const IdProduto = "teste";
const Quantidade = "teste";

describe("Fazer Pedido de Venda", () => {

    it("Deve criar um pedido de venda com sucesso", () => {
    cy.on("uncaught:exception", () => false);

    cy.log("Login e acesso ao menu");
    login.loginAs(); 
    menu.selectMenuItem("Pedido de vendas", "49"); 

    cy.log("Iniciando novo pedido");
    cy.get(".botaoNovo").click(); 
    cy.CarregamentoCurto();

    // --- Pesquisa de Estabelecimento ---
    cy.log("Selecionando estabelecimento");
    cy.get('[id="formEdicao:j_idt2474"]').click(); 
    cy.CarregamentoGrande();
    cy.get(
      "#somEstabelecimentoEmpresaWVPnl_content > table > tbody > :nth-child(1) > :nth-child(6) > input"
    ).type(NomePdv); 
    cy.get("#j_idt2647 > .ui-button-text").click(); 
    cy.CarregamentoGrande();
    cy.get("#j_idt2651\\:0\\:j_idt2656 > img").should("be.visible").click(); 
    cy.CarregamentoCurto();


    // --- Pesquisa de Endereço ---
    cy.log("Confirmando endereço do PDV");
    cy.get('[name="formEdicao:j_idt2479"]').click(); 
    cy.CarregamentoCurto();
    cy.get(":nth-child(1) > :nth-child(4) > input").type(NomePdv);
    cy.get("#j_idt2809").click(); 
    cy.CarregamentoCurto();
    cy.get('#j_idt2814_data > .ui-widget-content > [style="text-align: center"]').should("be.visible").click(); 
    cy.CarregamentoCurto();
    
    // --- Pesquisa de Vendedor ---
    cy.log("Selecionando vendedor");
    cy.get('[name="formEdicao:j_idt2486"]').click(); 
    cy.CarregamentoCurto();
    cy.get("#buscaUsuarioInclusaoPedidoCodigoPesquisar").type(IdVendedor); 
    cy.get("#j_idt2755 > .ui-button-text").click();
    cy.get('#j_idt2759_data > [data-ri="0"] > :nth-child(2) > span')
      .should("be.visible")
      .and("contain", IdVendedor); 
    cy.get('#j_idt2759\\:0\\:j_idt2762 > img').click();
    cy.CarregamentoCurto();


    // --- Vencimento ---
    cy.log("Definindo vencimento");
    cy.get('[id="formEdicao:vencimentoEmEditar"]').select(Vencimento);


    // --- Edição do Pedido ---
    cy.log("Incluindo produto no pedido");
    cy.get('[id="formEdicao:fornecedoresEditarPedido"]').select(Fornecedor); 
    cy.CarregamentoCurto();
    cy.get('[id="formEdicao:produtosEditarPedido"]').select(IdProduto); 
    cy.CarregamentoCurto();
    cy.get('[id="formEdicao:quantidadeEditarPedido"]').clear().type(Quantidade); 
    cy.CarregamentoCurto();
    cy.get('[id="formEdicao:botaoIncluirItem"]').click(); 
    cy.CarregamentoCurto();
    cy.get('[id="formEdicao:produtosEditarPedido"]').should("be.visible").and("contain", IdProduto);
    cy.CarregamentoCurto();

    // --- Gravar Pedido ---
    cy.log("Gravando pedido de venda");
    cy.get('[id="formEdicao:botaoGravar"]').click(); 
    cy.CarregamentoCurto();
    cy.get('#j_idt3343_title')
      .should("be.visible");
    cy.get('[name="j_idt3354:j_idt3356"] > .ui-button-text').click();
    cy.CarregamentoCurto(); 
    cy.get("p")
      .should("be.visible")
      .and("contain", "Pedido gravado com sucesso!"); 
  });
});
