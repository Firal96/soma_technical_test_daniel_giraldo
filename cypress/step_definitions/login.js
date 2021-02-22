import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("the user in in the login page", () => {
    cy.visit("/login");
});

When(/^the user inputs "(.*)" credentials$/, (credentials) => {
    if (credentials === "valid") {
        cy.inputCredentials("tomsmith", "SuperSecretPassword!")
    }
    else if (credentials === "invalid") {
        cy.inputCredentials("invalid", "credentials")
    }    
});

When("the user clicks on login button", () => {
    cy.get('button[type="submit"]').click()
});

Then(/^the "(.*)" login banner is displayed$/, (loginType) => {
    cy.validateLogin(loginType)
});