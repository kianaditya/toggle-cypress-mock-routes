/// <reference types="Cypress" />

describe('Tests todo list', () => {
  it('Checks todo render', () => {
    cy.customRoute(
      {
        method: 'GET',
        url: 'https://jsonplaceholder.typicode.com/todos',
        response: 'fixture:todo.json',
      },
      'getTodos'
    )
    cy.visit('/')
    // You can check env variable status by console.log(Cypress.env('mock'))
    cy.get('h3')
      .should('have.length', Cypress.env('mock') ? 1 : 200)
      .first()
      .should(
        'have.text',
        Cypress.env('mock') ? 'Mocked Todo' : 'delectus aut autem'
      )
  })
})
