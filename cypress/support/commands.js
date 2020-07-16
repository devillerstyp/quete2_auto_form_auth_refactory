Cypress.Commands.add('login', (email, password) => {

    if (email != undefined) {
        cy.get('#email-signin')
            .type(email)
            .should('have.value', email)
    }

    if (password != undefined) {
        cy.get('#password-signin')
            .type(password)
            
    }

    cy.get('[data-test=submit-button-login]').click()
})