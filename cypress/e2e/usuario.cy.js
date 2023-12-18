beforeEach(() => 
{
    cy.login('00744618002', 'D12r10r82#') //Colocar usuário que queira testar.
})

it('PesquisarUsuário', () => {
    cy.visit('/')
    cy.get('[data-cy="Cadastro"]').click()
    cy.get('[data-cy="Usuário"]').click()
    cy.get('[data-cy="/Usuario/Consultar"]').click()
    cy.get('[data-cy="CampoNome"]').click()
    cy.get('[data-cy="CampoNome"]').type('Diego')
    cy.get('[data-cy="PesquisarBTN"]').click()
    cy.contains('123.f@bbmlogistica.com.br')
});
