import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'

Given("the user is in the add remove elements page", () => {
    cy.visit("/add_remove_elements/");
});

When(/^the user adds "(.*)" elements$/, (number) => {
    for (let i = 1; i <= parseInt(number); i++) {
        cy.get("button").contains("Add Element").click()
    }
});

When(/^the user removes "(.*)" elements$/, (number) => {
    for (let i = 1; i <= parseInt(number); i++) {
        cy.get("button").contains("Delete").first().click()
    }
});

Then(/^"(.*)" elements should remain visible$/, (number) => {
    cy.get('#elements > button').should('have.length', parseInt(number))
});