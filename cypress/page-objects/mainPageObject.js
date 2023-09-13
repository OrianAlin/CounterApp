import mainPage from "../fixtures/mainPage.json";

export default class mainPageObject {
  static checkWebSite() {
    cy.url().should("eq", "http://192.168.0.171:3000/");
    cy.get(mainPage.title).should("contain", "CounterApp");
    cy.get(mainPage.counterClock).should("contain", 10);
    cy.get(mainPage.addOne).should("contain", "+1");
    cy.get(mainPage.resetButton).should("contain", "Reset");
    cy.get(mainPage.decreaseOne).should("contain", "-1");
  }
  static incrementButton() {
    cy.get(mainPage.addOne).click();
    cy.get(mainPage.counterClock).should("contain", 11);
  }
  static decrementButton() {
    cy.get(mainPage.decreaseOne).click();
    cy.get(mainPage.counterClock).should("contain", 9);
  }
  static zeroLimit() {
    for (let i = 0; i < 11; i++) {
      cy.get(mainPage.decreaseOne).click();
    }
    cy.get(mainPage.counterClock).should("contain", 0);
  }
  static resetButton() {
    cy.get(mainPage.decreaseOne).click();
    cy.get(mainPage.resetButton).click();
    cy.get(mainPage.counterClock).should("contain", 10);
  }
  static verifyCounter() {
    for (let i = 0; i < 10; i++) {
      cy.get(mainPage.decreaseOne).click();
      cy.get(mainPage.addOne).click();
    }
    cy.get(mainPage.counterClock).should("contain", 0);
  }
}
