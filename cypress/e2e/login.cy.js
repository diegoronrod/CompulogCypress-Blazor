describe('login', function() {

    it('loginUsuario', function() {
    
           cy.visit('https://localhost:44371/')
  
           cy.get('*[class^="flex-column margin-bottom-1"]').click()

           cy.get('*[class^="flex-column margin-bottom-1"]').type('00744618002')

           cy.get('*[class^="flex-column margin-bottom-2"]').click()

           cy.get('*[class^="flex-column margin-bottom-2"]').type('D12r10r82#')

           cy.get('*[class^="rz-button rz-button-md rz-variant-filled rz-primary rz-shade-default margin-left-auto"]').click()

           cy.wait(5000)

          
    })
       
  })

