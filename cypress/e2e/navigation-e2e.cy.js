/* eslint-disable no-undef */

describe('Test Site Navigation', () => {
  it('ACTION: Navigating to the site, RESULT: Should show the Home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('main').contains('my work')
  })
})