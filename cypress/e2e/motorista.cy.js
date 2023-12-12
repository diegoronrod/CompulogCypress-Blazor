beforeEach(() => 
{
    cy.login('00744618002', 'D12r10r82#')
})

it('PesquisarMotorista', () => {
    cy.visit('/')
    cy.get('.btn-menu-container > :nth-child(1) > :nth-child(1) > .rz-navigation-item-link').click()
    cy.contains("a", "Motorista").click()
    cy.get('#NomeBuscar').click()
    cy.get('#NomeBuscar').type('Diego')
    cy.wait(1000)
    cy.get('[data-cy="BuscarBTN"]').click()
    cy.wait(4000)
    cy.contains('08192816908')
});