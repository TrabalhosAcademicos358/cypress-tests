describe("Alura busca de curso", () => {

    beforeEach(() => {
        cy.visit("https://www.alura.com.br")
    })

    it("buscar curso de java na alura", () => {
        cy.get('#header-barraBusca-form-campoBusca').type("Java")
        cy.get('.header__nav--busca-submit').click()
        cy.get(`h4.busca-resultado-nome`).should("contain", "Formação Java e Spring Boot")
    })

})