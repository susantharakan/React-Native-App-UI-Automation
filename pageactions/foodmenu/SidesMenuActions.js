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

  // From the Sides menu selecting Garlic Knots
  selectSideGarlic() {
    I.waitForElement(foodObjects.chooseGarlicKnots);
    I.tap(foodObjects.chooseGarlicKnots);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selecting Bread sticks from sides menu
  selectSideBsticks() {
    I.waitForElement(foodObjects.chooseBreadSticks);
    I.tap(foodObjects.chooseBreadSticks);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.tap(foodObjects.chooseOrder);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.sidestyle);
    I.tap(foodObjects.sidestyle);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selecting Cheese sticks from the sides menu
  selectSideCsticks() {
    I.waitForElement(foodObjects.chooseCSticks);
    I.tap(foodObjects.chooseCSticks);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.tap(foodObjects.chooseOrder);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
};
