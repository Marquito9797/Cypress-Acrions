import login from "../pages/Login.page";
import menu from "../pages/Menu.page";

const idPedido = "0000000001";
const serieInicial = "0000000001";
const serieFinal = "0000000001";
const DataEntrega = "20/06/2024";

const user = Cypress.env("user");
const key = Cypress.env("key");

describre("Efetuar Bipagem", () => {
  it("Deve realizar a bipagem do pedido de venda", () => {
    cy.on("uncaught:exception", () => false);

    cy.log("Login e acesso ao menu");
    login.loginAs();
    menu.selectMenuItem("Pedido de vendas", "49");

    cy.log("Pesquisando pedido de venda");
    cy.get('[id="codigoPedido"]').type(idPedido);
    cy.get('[class="ui-button-text ui-c"]').click();
    cy.CarregamentoGrande();

    // Bipagem do Pedido
    cy.log("Iniciando bipagem do pedido");
    cy.get('[title="Código do pedido."]').should("contain", idPedido);
    cy.get('[title="Selecione o status do pedido de venda."]').should(
      "contain",
      "Separar Estoque"
    );
    cy.get(
      '[class="ui-row-toggler ui-icon ui-icon-circle-triangle-e"]'
    ).click();
    cy.CarregamentoCurto();
    cy.get('[id="resultadoPesquisa:0:tbItem:j_idt1992"]').should("be.visible");
    cy.get('[src="/sgv/resources/images/barcode-icon.png"]').click();
    cy.CarregamentoCurto();
    cy.get('[id="dlgBiparPedidoheaderModal"]')
      .should("be.visible")
      .and("contain", "Bipagem de Produtos ");
    cy,
      get('[id="formAdicionarSerialPedidoCarga:serieInicialEdicao"]').type(
        serieInicial
      );
    cy.CarregamentoCurto();
    cy.get('[id="formAdicionarSerialPedidoCarga:serieFinalEdicao"]').type(
      serieFinal
    );
    cy.CarregamentoCurto();
    cy.type("{tab}");
    cy.CarregamentoGrande();

    // Enviar Pedido
    cy.log("Enviando pedido após bipagem");
    cy.get('[title="Selecione o status do pedido de venda."]').should(
      "contain",
      "Enviar Pedido"
    );
    cy.get('[src="/sgv/resources/images/package.png"]').click();
    cy.CarregamentoCurto();
    cy.get(
      '[class="ui-dialog-titlebar ui-widget-header ui-helper-clearfix ui-corner-top"]'
    )
      .should("be.visible")
      .and("contain", "Logística do pedido de venda");
    cy.get('[id="transportadora"]').select("CORREIOS [2]");
    cy.get('[id="dataPrevisaoEntrega"]').type(DataEntrega);
    cy.get('class="ui-button-text ui-c"').click();
    cy.CarregamentoGrande();
  });
});
