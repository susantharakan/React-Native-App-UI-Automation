"use strict";

let I;
let imports;
let commonObjects;
let foodObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    foodObjects = eval(imports.foodMenu);
  },

  // From the Wings menu, selecting type of wings, traditional wings
  selectBonelessWings() {
    I.waitForElement(foodObjects.bonelessWings);
    I.tap(foodObjects.bonelessWings);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the Wings menu, selecting type of wings, Bone-out wings
  selectTradWings() {
    I.waitForElement(foodObjects.tradWings);
    I.tap(foodObjects.tradWings);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Wing quantity of six for traditional wings selection
  selectQuantitySix() {
    I.waitForElement(foodObjects.chooseQuantity);
    I.tap(foodObjects.chooseQuantity);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseSix);
    I.tap(foodObjects.chooseSix);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Wing quantity of eight for Breaded bone-out wings selection
  selectQuantityEight() {
    I.waitForElement(foodObjects.chooseQuantity);
    I.tap(foodObjects.chooseQuantity);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseEight);
    I.tap(foodObjects.chooseEight);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Wing quatity of 12 for traditional wings selection
  selectQuantityTwelve() {
    I.waitForElement(foodObjects.chooseQuantity);
    I.tap(foodObjects.chooseQuantity);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseTwelve);
    I.tap(foodObjects.chooseTwelve);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Wing flavor Bufflo Mild
  selectFlavorBufmild() {
    I.waitForElement(foodObjects.chooseFlavor);
    I.tap(foodObjects.chooseFlavor);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseBufmild);
    I.tap(foodObjects.chooseBufmild);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Wing flavor BBQ honey
  selectFlavorHoneyBBQ() {
    I.waitForElement(foodObjects.chooseFlavor);
    I.tap(foodObjects.chooseFlavor);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseHonBBQ);
    I.tap(foodObjects.chooseHonBBQ);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Wing flavor BBQ honey
  selectFlavorGarlicparm() {
    I.waitForElement(foodObjects.chooseFlavor);
    I.tap(foodObjects.chooseFlavor);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseGarparm);
    I.tap(foodObjects.chooseGarparm);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

};
