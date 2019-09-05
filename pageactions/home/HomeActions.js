"use strict";

let I;
let imports;
let commonObjects;
let homeObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    homeObjects = eval(imports.homePage);
  },

  seeReviewPopup() {
    I.runOnAndroid(() => {
      I.wait(3);
      I.waitForElement(homeObjects.reviewPopup);
      I.seeElement(homeObjects.reviewPopup);
    });
    I.runOnIOS(() => {
      I.waitForElement(homeObjects.reviewPopup);
      I.seeElement(homeObjects.reviewPopup);
      I.tap(homeObjects.reviewNotNow);
   });
  },

  seeThankYou() {
   I.waitForElement(homeObjects.thanksText);
   I.seeElement(homeObjects.thanksText);
  },

  tapRedeem() {
    I.waitForElement(homeObjects.redeemButton);
    I.tap(homeObjects.redeemButton);
  },


  scrollToReorder() {
    I.waitForElement(homeObjects.yourLastOrder);
    I.swipe(homeObjects.yourLastOrder, 0, 2200, 1000);
  },
  tapReorder() {
    I.waitForElement(homeObjects.orderNow);
    I.tap(homeObjects.orderNow);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  verifyHome() {
    I.runOnIOS(() => {
      I.waitForElement(homeObjects.home);
      I.tap(homeObjects.home);
   });
    I.runOnAndroid(() => {
      I.waitForElement(homeObjects.home);
    });
  },


};
