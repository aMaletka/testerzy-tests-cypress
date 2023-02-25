export default class FillForm {
  chooseQuantityOfUsers(amount) {
    cy.xpath('//span[@id="select2-numberOfParticipants-container"]').click();
    cy.get("span").contains(amount).click();
  }
  assignData() {
    const tableValueForm = {
      '//input[@id="participantFirstName_1"]': "Anna",
      '//input[@id="participantLastName_1"]': "Kowalska",
      '//input[@id="participantEmail_1"]': "a.kowalska@test.pl",
      '//input[@id="participantFirstName_2"]': "Jan",
      '//input[@id="participantLastName_2"]': "Kowalski",
      '//input[@id="participantEmail_2"]': "j.kowalski@test.pl",
    };
    Object.entries(tableValueForm).forEach(([key, value]) => {
      cy.xpath(key).type(value);
    });
  }
  checkboxFirm() {
    cy.xpath('//input[@id="type_2"]').check();
  }
  invoiceSettlement() {
    const testInvoiceData = {
      '//input[@id="name"]': "Firma Testowa",
      '//input[@id="nip"]': "3782034338",
      '//input[@id="city"]': "Test",
      '//input[@id="street"]': "Test 1",
      '//input[@id="zipCode"]': "22-222",
    };
    Object.entries(testInvoiceData).forEach(([key, value]) => {
      cy.xpath(key).type(value);
    });
    cy.xpath('//span[@id="select2-country-container"]').click();
    cy.get("span").contains("Polska").click();
  }
  contactForm() {
    const contactFormDetails = {
      '//input[@id="firstName"]': "Jan",
      '//input[@id="lastName"]': "Kowalski",
      '//input[@id="email"]': "j.kowalski@test.pl",
      '//input[@id="phoneNumber"]': "+48 888 888 888",
    };
    Object.entries(contactFormDetails).forEach(([key, value]) => {
      cy.xpath(key).type(value);
    });
  }
  writeNote() {
    cy.xpath('//textarea[@id="message"]').type(
      "Brak uwag, ćwiczę cypress'a na waszej stronie :)"
    );
  }
  clickTestingCup() {
    cy.get("label")
      .contains("Uczestniczyłem w zawodach i/lub konferencji TestingCup ")
      .click();
  }
}
