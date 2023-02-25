export default class TraningDates {
  chooseList() {
    cy.xpath('//a[@data-view="2"]').click();
  }
  clickChooseOnlineOrStationary() {
    cy.xpath('//span[@id="select2-type-container"]').click();
  }
  chooseType(type) {
    cy.get("li").contains(type).click();
  }
  bookDate() {
    cy.xpath(
      '//button[@data-url="https://testerzy.pl/rezerwuj-szkolenie/1521"]'
    ).click();
  }
}
