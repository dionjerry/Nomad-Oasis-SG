
describe('Website Address Check and verfy title', () => {
  let resources;

  before(() => {
    cy.fixture('resources').then((res) => {
      resources = res;
      // this is for setting the base url in test this is accessed from the resource file in fixture folder
    });
  });


  it('Checks Address and title', () => {
    cy.visit(resources.baseUrl);
    cy.get('body').should('be.visible');
    cy.title().should('include', 'Nomad Oasis');
  });
});
