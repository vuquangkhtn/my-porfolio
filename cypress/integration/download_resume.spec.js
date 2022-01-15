/// <reference types="cypress" />

const BASE_URL = 'https://my-porfolio-quangnguyen.vercel.app/';

context('Download Resume', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
    cy.document().trigger('wheel', 0, 100);
  });

  it('should download resume successfully', () => {
    cy.contains('Download Resume Successfully')
      .should('not.exist');

    // Click Download Resume button
    cy.get('#about')
      .contains('Download Resume')
      .click();

    // Confirm Download
    cy.contains('Download Confirmation')
      .parent()
      .contains('Yes')
      .click();

    cy.contains('Download Resume Successfully')
      .should('exist');
  });
});
