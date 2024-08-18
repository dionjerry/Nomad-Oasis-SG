
describe('Website Address Check', () => {
  let resources;

  before(() => {
    cy.fixture('resources').then((res) => {
      resources = res;
      // this is for setting the base url in test this is accessed from the resource file in fixture folder
    });
  });

  it('Check Address', () => {
    cy.visit(resources.baseUrl);
  });

  it('Checks title', () => {
    
  });
});
