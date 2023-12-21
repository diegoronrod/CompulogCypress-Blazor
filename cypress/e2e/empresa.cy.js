beforeEach(() => 
{
    cy.login('02068171007', 'Cardoso2018') //Colocar usuário que queira testar.
})

it('Empresa', () => {
    cy.visit('/')
    cy.get('[data-cy="Cadastro"]').click()
    cy.get('[data-cy="Empresa"]').click()
});