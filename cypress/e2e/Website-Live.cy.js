
describe('Website Address Check and verfy title', () => {
  let resources;

  before(() => {
    cy.fixture('resources').then((res) => {
      resources = res;
      // this is for setting the base url in test this is accessed from the resource file in fixture folder
    });
  });

  beforeEach(() => {
    cy.visit(resources.baseUrl);
  });


  it('Checks Address and title', () => {

    

    cy.get('body').should('be.visible');

    cy.title().should('include', 'Nomad Oasis');

   
  });
  it('Checks body text', () => {
    
    cy.get('body').should('contain', 'Internet');

  });

});
