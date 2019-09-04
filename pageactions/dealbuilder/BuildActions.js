"use strict";

let I;
let imports;
let commonObjects;
let buildPages;

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    buildPages = eval(imports.buildPage);
  },

  addToOrder() {
    I.waitForElement(buildPages.addToOrder);
    I.tap(buildPages.addToOrder);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  verifyDealBuilder() {
    I.waitForElement(buildPages.buildYourDeal);
    I.seeElement(buildPages.buildYourDeal);
  }

};
