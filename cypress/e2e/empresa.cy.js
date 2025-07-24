beforeEach(() => 
{
    cy.login('0074461802', 'D12r10r82#') //Colocar usuário que queira testar.
})

it('Empresa', () => {
    cy.visit('/')
    cy.get('[data-cy="Cadastro"]').click()
    cy
    cy.get('[data-cy="Empresa"]').click()
});