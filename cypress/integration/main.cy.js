/// <reference types="cypress" />
import mainPage from "../fixtures/mainPage.json";
import { url } from "../../config";
describe("Counter App", () => {
  beforeEach(function () {
    cy.visit(url);
  });
  it("Should verify that we are on right website", () => {
    cy.url().should("eq", "http://192.168.0.171:3000/");
    cy.get(mainPage.title).should("contain", "CounterApp");
    cy.get(mainPage.counterClock).should("contain", 10);
    cy.get(mainPage.addOne).should("contain", "+1");
    cy.get(mainPage.resetButton).should("contain", "Reset");
    cy.get(mainPage.decreaseOne).should("contain", "-1");
  });
  it("Should Verify that clicking the increment button increases the counter value by 1.", () => {
    cy.get(mainPage.addOne).click();
    cy.get(mainPage.counterClock).should("contain", 11);
  });
  it("Should Verify that clicking the decrement button decrease the counter value by 1.", () => {
    cy.get(mainPage.decreaseOne).click();
    cy.get(mainPage.counterClock).should("contain", 9);
  });
  it("Should Verify that the counter doesn't below 0 or exceed a predefined maximum", () => {
    for (let i = 0; i < 11; i++) {
      cy.get(mainPage.decreaseOne).click();
    }
    cy.get(mainPage.counterClock).should("contain", 0);
  });
  it("Should Verify that clicking Reset button sets the counter back to its initial value", () => {
    cy.get(mainPage.decreaseOne).click();
    cy.get(mainPage.resetButton).click();
    cy.get(mainPage.counterClock).should("contain", 10);
  });
  it("Should Verify that the counter behaves correctly when the increment or decrement button is clicked multiple times in succession", () => {
    for (let i = 0; i < 10; i++) {
      cy.get(mainPage.decreaseOne).click();
      cy.get(mainPage.addOne).click();
    }
    cy.get(mainPage.counterClock).should("contain", 0);
  });
});
