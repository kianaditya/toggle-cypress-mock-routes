Cypress.Commands.add('customRoute', (args, alias = 'mock') => {
  cy.server()
  if (Cypress.env('mock')) {
    cy.route(args).as(alias)
  }
})
