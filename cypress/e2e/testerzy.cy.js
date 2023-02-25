import CategoryCypress from "../page-objects/CategoryCypress";
import CategoryTrening from "../page-objects/CategoryTrening";
import HomePage from "../page-objects/HomePage";
import SelectSpecificCategory from "../page-objects/SelectSpecificCategory";
import TraningDates from "../page-objects/TrainingDates";
import FillForm from "../page-objects/FillForm";

describe("E2E - testerzy", () => {
  beforeEach("testerzy", () => {
    cy.visit("/");
    cy.viewport(1280, 720);
  });

  it("Wyszukaj produkt i wypelnij dane do zlozenia zamowienia", function () {
    const homePage = new HomePage();

    homePage.acceptCookies();

    homePage.chooseCategory();

    const categoryTrening = new CategoryTrening();

    categoryTrening.chooseAutomationTesting();

    const selectSpecificCategory = new SelectSpecificCategory();

    selectSpecificCategory.chooseCypressIO();

    const categoryCypress = new CategoryCypress();

    categoryCypress.assertTittle();

    categoryCypress.showDates();

    const trainingDates = new TraningDates();

    trainingDates.chooseList();

    trainingDates.clickChooseOnlineOrStationary();

    trainingDates.chooseType("Online");

    trainingDates.bookDate();

    const fillForm = new FillForm();

    fillForm.chooseQuantityOfUsers(2);

    fillForm.assignData();

    fillForm.checkboxFirm();

    fillForm.invoiceSettlement();

    fillForm.contactForm();

    fillForm.writeNote();

    fillForm.clickTestingCup();
  });
});
