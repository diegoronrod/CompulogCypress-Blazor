Cypress.Commands.add('login', (username, password) => 
{
    cy.session([username, password], () =>
    {
        cy.visit('/')
        cy.get('class="rz-textbox rz-state-empty"').click()
        cy.focused().clear()
        cy.get('class="rz-textbox rz-state-empty"').type(username)
        cy.get('#id=Ijqg7BTDDk').click()
        cy.focused().clear()
        cy.get('#id=Ijqg7BTDDk').type(password)
        cy.get('#id=-EqDixarv0').click()
        cy.wait(4000)
    },
    {
        cacheAcrossSpecs: true
    }
    )
})