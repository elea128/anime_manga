describe('empty spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000/')
    cy.visit('http://localhost:3000/faq')
    cy.visit('http://localhost:3000/event')
    cy.visit('http://localhost:3000/event/edit')
    cy.visit('http://localhost:3000/event/:id')
    cy.visit('http://localhost:3000/faq/:id')
  })
})