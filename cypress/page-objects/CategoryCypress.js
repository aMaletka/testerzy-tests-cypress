export default class CategoryCypress {
  assertTittle() {
    cy.xpath('//div[@class="col"]/h1').should(
      "have.text",
      "Cypress.IO - Automatyzacja testów aplikacji webowych w JavaScript"
    );
  }
  showDates() {
    cy.xpath('//a[@class="btn btn-primary btn-lg btn-block"]').click();
  }
}
