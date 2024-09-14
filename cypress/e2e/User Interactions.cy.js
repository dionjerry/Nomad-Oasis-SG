describe('User Interactions', () => {

  let resources;
  before(() => {
    cy.fixture('resources').then((res) => {
      resources = res;
    });
  });

  beforeEach(() => {
    cy.visit(resources.baseUrl);
  });


  it('Visit the page and interact with elements', () => {

    // Visit the base URL from the fixture
   
    
    // Wait for the page to load (optional, depending on your app's load time)
    cy.wait(5000);
    
    // Click on the element with the specified selector
    cy.get(':nth-child(4) > .block').click();
    
    // Ensure the page has fully loaded and the desired URL is correct
    cy.url().should('include', '/login');
    
    // Wait for elements to load on the new page
    cy.wait(10000);
    
    // Ensure the element with ID 'data.email' is present and visible before interacting
    cy.get('#data\\.email', { timeout: 10000 }).should('be.visible').click();
    
    // Type the email address from the fixture and submit the form

    cy.log(resources.Email);

    cy.get('#data\\.email').type(`${resources.Email}{enter}`);

    //cy.get('#data\\.email').type(`${resources.Email}{enter}`);
    cy.wait(10000);
        cy.get('#data\\.password').type(`${resources.Password}{enter}`);

    
  });

});
