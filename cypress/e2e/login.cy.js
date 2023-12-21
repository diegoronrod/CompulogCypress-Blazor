//Criado metodo de login autmatico que roda antes de cada teste (IT),
//Não é mais necessário este arquivo.


 describe('Login', function() {

    it('LoginUsuario', function() {
       cy.visit('/')
        cy.get('[data-cy="CampoUser"]').click()
        cy.focused().clear()
        cy.get('[data-cy="CampoUser"]').type('00744618002')
        cy.get('[data-cy="CampoSenha"]').click()
        cy.focused().clear()
        cy.get('[data-cy="CampoSenha"]').type('D12r10r82#')
        cy.get('[data-cy="LoginBTN"]').click()
        cy.wait(4000)
    })
  }) 