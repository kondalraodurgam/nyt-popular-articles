describe('NY Times Articles App', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://api.nytimes.com/svc/mostpopular/v2/viewed/*', {
      fixture: 'articles.json'
    }).as('getArticles');
    
    cy.visit('/');
  });

  it('displays articles list', () => {
    cy.wait('@getArticles');
    cy.get('article').should('have.length.greaterThan', 0);
  });

  it('navigates to article detail', () => {
    cy.wait('@getArticles');
    cy.get('article').first().click();
    cy.url().should('include', '/article/');
    cy.get('button').contains('Back to articles').should('be.visible');
  });

  it('returns to list view', () => {
    cy.wait('@getArticles');
    cy.get('article').first().click();
    cy.get('button').contains('Back to articles').click();
    cy.url().should('not.include', '/article/');
  });
});