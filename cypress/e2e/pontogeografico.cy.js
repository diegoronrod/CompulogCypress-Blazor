beforeEach(() => 
{
    cy.login('00744618002', 'D12r10r82#') //Colocar usuário que queira testar.
})

it('PontoGeográfico', () => {
    cy.visit('/')
    cy.get('[data-cy="Cadastro"]').click()
    cy.get('[data-cy="Ponto Geográfico"]').click()
});

/* describe('PontoGeográfico', function() {
    it('MenuPontoGeográfico', function() {
        cy.visit('https://localhost:44371/')
        cy.get('*[class^="flex-column margin-bottom-1"]').click()
        cy.get('*[class^="flex-column margin-bottom-1"]').type('00744618002')
        cy.get('*[class^="flex-column margin-bottom-2"]').click()
        cy.get('*[class^="flex-column margin-bottom-2"]').type('D12r10r82#')
        cy.get('*[class^="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default margin-left-auto"]').click()
        cy.wait(5000)
        //------------------------------------------------------------------------------------------//
        cy.get('.btn-menu-container > :nth-child(1) > :nth-child(1) > .rz-navigation-item-link').click()
        cy.contains("a", "Ponto Geográfico").click()
    })
  }) */