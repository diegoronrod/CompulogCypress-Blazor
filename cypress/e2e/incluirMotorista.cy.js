beforeEach(() => 
{
    cy.login('00744618002', 'D12r10r82#') //Colocar usuário que queira testar.
})

it('IncluirMotorista', () => {
    cy.visit('/')
    cy.get('[data-cy="Cadastro"]').click()
    cy.get('[data-cy="Motorista"]').click()
    cy.get('[data-cy="CadBTN"]').click()
    cy.get('[data-cy="CampoNomeModal"]').click()
    cy.get('[data-cy="CampoNomeModal"]').type('Diego') //digite o nome do motorista para incluir.
    cy.wait(1000)
    cy.get('[data-cy="CampoCPFModal"]').click()
    cy.get('[data-cy="CampoCPFModal"]').type('00000000000') //digite o CPF do motorista para incluir.
    cy.wait(1000)
    cy.get('[data-cy="CadMotoBTN"]').click()
});
      