/// <reference types="cypress" />
describe('Testing rendering pages', () => {
  it('should render home', () => {
    cy.visit('/');
  });

  it('should render 404', () => {
    cy.visit('/404');
  });

  it('should render about-us', () => {
    cy.visit('/about-us');
  });

  it('should render form', () => {
    cy.visit('/form');
  });
});

describe('Testing characters', () => {
  it('should render characters on home page', () => {
    cy.visit('/');
    cy.get('[data-testid="home"]').contains('Rick Sanchez', { timeout: 5000 });
    cy.get('[data-testid="home"]').contains('Ants in my Eyes Johnson', { timeout: 5000 });
  });

  it('should open card modal on home page', () => {
    cy.visit('/');
    cy.get('[data-testid="card"]').first().click();
    cy.get('body').contains('Type: ', { timeout: 5000 });
  });
});
