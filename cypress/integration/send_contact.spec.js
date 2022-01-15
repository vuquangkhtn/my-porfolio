/// <reference types="cypress" />

const BASE_URL = 'https://my-porfolio-quangnguyen.vercel.app/';

context('Send Contact', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
    cy.get('#contact').scrollIntoView();
  });

  it('should send contact successfully', () => {
    cy.intercept('POST', '**/contact').as('sendContact');
    cy.contains('Send Contact Successfully')
      .should('not.exist');

    // Input required fields
    cy.get('#contact').find('[placeholder="Your Name"]').type('Quang Nguyen');
    cy.get('#contact').find('[placeholder="Email"]').type('vuquang123@yopmail.com');

    // Click Send Contact button
    cy.get('#contact')
      .contains('Send Contact')
      .click();

    // Confirm Send action
    cy.contains('Send Contact Confirmation')
      .parent()
      .contains('Yes')
      .click();

    cy.wait('@sendContact');

    cy.contains('Send Contact Successfully')
      .should('be.exist');
  });
});
