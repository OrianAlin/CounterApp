/// <reference types="cypress" />
import { url } from "../../config";
import mainPageObject from "../page-objects/mainPageObject";
describe("Counter App", () => {
  beforeEach(function () {
    cy.visit(url);
  });
  it("Should verify that we are on right website", () => {
    mainPageObject.checkWebSite();
  });
  it("Should Verify that clicking the increment button increases the counter value by 1.", () => {
    mainPageObject.incrementButton();
  });
  it("Should Verify that clicking the decrement button decrease the counter value by 1.", () => {
    mainPageObject.decrementButton();
  });
  it("Should Verify that the counter doesn't below 0 or exceed a predefined maximum", () => {
    mainPageObject.zeroLimit();
  });
  it("Should Verify that clicking Reset button sets the counter back to its initial value", () => {
    mainPageObject.resetButton();
  });
  it("Should Verify that the counter behaves correctly when the increment or decrement button is clicked multiple times in succession", () => {
    mainPageObject.verifyCounter();
  });
});
