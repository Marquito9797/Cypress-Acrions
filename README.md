# Cypress-Actions

Estudos sobre a criação e organização de **actions** e **commands** no Cypress, para construir automação de testes mais dinâmica, modular e reutilizável.

---

##  Conteúdo do Repositório

- **`/actions`**  
  Contém classes com ações reutilizáveis como `Logar` e `AcaoMenu`, para encapsular fluxos comuns (login, navegação, seleção de menus, etc.).

- **`/tests`**  
  Casos de teste que utilizam essas actions, aproveitando a modularidade para tornar os testes mais legíveis e fáceis de manter (como `BuscarCobranca.cy.js`).

---

##  Por que este projeto é interessante?

1. **Modularização**: Ao mover operações frequentes para classes reutilizáveis (actions/commands), seus testes ficam mais limpos e DRY (Don't Repeat Yourself).
2. **Escalabilidade**: Essa estrutura é essencial para projetos maiores, reduzindo duplicação de código e facilitando a manutenção.
3. **Clareza**: Testes que concisamente chamam ações claramente nomeadas são mais fáceis de entender e revisar.

---
