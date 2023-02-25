export default class HomePage {
  acceptCookies() {
    cy.get("#cookie-law-close").click();
  }
  chooseCategory() {
    cy.xpath('//a[@data-test="menu-trainings"]').click();
  }
}
