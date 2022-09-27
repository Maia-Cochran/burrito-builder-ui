describe('App, Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'http://localhost:3001/api/v1/orders/', {fixture: newOrder}),
    cy.visit('http://localhost:3000/')
  });

  it('user should see prepopulated orders on the page', () => {
    cy.get('.App').within(() => {
      cy.get('.order-list')
      })
    })
  it('user should see a form for adding new orders to the list', () => {
    cy.get('form').within(() => {
      cy.get('[name="name"]').type('Enter a name!')
      cy.get('[name="ingredient"]').contains('beans')
    })
  }) 
  it('user should be able to click the submit button and add an order', () => {
    cy.get('[name="name"]').type('Maia')
    cy.get('[name="beans"]').click('beans', {force: true }).invoke('val').should('eq', 'beans')
    cy.wait(2000)
    cy.get('.submit-button').click();
  })
})