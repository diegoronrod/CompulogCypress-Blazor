beforeEach(() => 
{
    cy.login('00744618002', 'D12r10r82#') //Colocar usuário que queira testar.
})

it('PesquisarMotorista', () => {
    cy.visit('/')
    cy.get('[data-cy="Cadastro"]').click()
    cy.get('[data-cy="Motorista"]').click()
    cy.get('[data-cy="CampoNome"]').click()
    cy.get('[data-cy="CampoNome"]').type('Diego')
    cy.wait(1000)
    cy.get('[data-cy="BuscarBTN"]').click()
    cy.wait(4000)
    cy.contains('00000000000')
});