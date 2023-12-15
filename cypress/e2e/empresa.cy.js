beforeEach(() => 
{
    cy.login('00744618002', 'D12r10r82#') //Colocar usuário que queira testar.
})

it('Empresa', () => {
    cy.visit('/')
    cy.get('[data-cy="Cadastro"]').click()
    cy.get('[data-cy="Empresa"]').click()
});