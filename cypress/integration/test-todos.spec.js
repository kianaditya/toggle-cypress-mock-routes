/// <reference types="Cypress" />

describe('Tests todo list', () => {
  it('Checks todo render', () => {
    cy.visit('/')
    cy.get('h3')
      .should('have.length', 200)
      .first()
      .should('have.text', 'delectus aut autem')
  })
})
