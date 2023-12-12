describe('Motorista', function() {

    it('AdicionarMotorista', function() {

        cy.visit('https://localhost:44371/')

        cy.get('*[class^="flex-column margin-bottom-1"]').click()

        cy.get('*[class^="flex-column margin-bottom-1"]').type('00744618002')

        cy.get('*[class^="flex-column margin-bottom-2"]').click()

        cy.get('*[class^="flex-column margin-bottom-2"]').type('D12r10r82#')

        cy.get('*[class^="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default margin-left-auto"]').click()

        cy.wait(5000)

        //------------------------------------------------------------------------------------------// 
    
        cy.get('.btn-menu-container > :nth-child(1) > :nth-child(1) > .rz-navigation-item-link').click()
        
        cy.contains("a", "Motorista").click()

        cy.get('[data-cy="CadBTN"]').click()

        cy.get("#Nome").click()

        cy.get("#Nome").type('Andre')

        cy.wait(1000)

        cy.get('#CPF').click

        cy.get("#CPF").type('687.326.340-05')

        cy.get('#CadMotoBTN').click()

    })
       
  })