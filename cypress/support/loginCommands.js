
Cypress.Commands.add("inputCredentials", (email, password) => {
    cy.get("#username").type(email),
    cy.get("#password").type(password)
})

Cypress.Commands.add("validateLogin", (type) => {
    if (type === "successful") {
        cy.get("#flash-messages").contains("You logged into a secure area!").should("exist")
    }
    else if (type === "unsuccessful") {
        cy.get("#flash-messages").contains("Your username is invalid!").should("exist")
    }
    
})