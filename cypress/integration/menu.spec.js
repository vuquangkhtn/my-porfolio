/// <reference types="cypress" />

const BASE_URL = 'https://my-porfolio-quangnguyen.vercel.app/';

context('Menu', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
  });

  it('should navigate to Contact section when clicking on Contact option', () => {
    cy.window().then((window) => {
      expect(window.scrollY).to.eq(0);
    });

    cy.get('.navbar')
      .find('[href="#contact"]')
      .click();
    cy.url().should('eq', `${BASE_URL}#contact`);
    cy.window().then((window) => {
      expect(window.scrollY).to.not.eq(0);
    });
  });

  it('should toggle Menu when wheel down/up', () => {
    cy.get('.navbar')
      .should('be.visible');

    // wheel down
    cy.document().trigger('wheel', {
      deltaY: 100
    });

    // should hide Menu
    cy.get('.navbar')
      .should('not.visible');

    // wheel up
    cy.document().trigger('wheel', 0, {
      deltaY: -100
    });

    // should show Menu
    cy.get('.navbar')
      .should('be.visible');
  });

  it('should switch Color Mode', () => {
    cy.get('.dark-mode')
      .should('not.exist');

    cy.get('.color-mode')
      .click();

    cy.get('.dark-mode')
      .should('be.exist');

    cy.get('.color-mode')
      .click();

    cy.get('.dark-mode')
      .should('not.exist');
  });
});
