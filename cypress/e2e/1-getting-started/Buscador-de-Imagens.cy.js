describe("Buscador de imagem", () => {
    beforeEach(() => {
        cy.visit("https://buscador-de-imagens.vercel.app/")
    })

    it("Buscando imagem simples", () => {
        cy.get('#button_random').click()
    })

    it("Transicionando entre imagens", () => {
        cy.get('#button_random').click()
        cy.get('#button_random').click()
        cy.get('#button_random').click()

        cy.get('#img_prev').click()
        cy.get('#img_next').click()
    })

    it("Salvando imagem nos favoritos", () => {
        cy.get('#button_random').click()
        cy.get('#heart').click()
    })
})