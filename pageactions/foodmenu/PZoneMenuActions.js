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

  // From the P'Zone menu, selecting Pepperoni PZone
  selectpepPzone() {
    I.waitForElement(foodObjects.pepPzone);
    I.tap(foodObjects.pepPzone);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the P'Zone menu, selecting Meaty PZone
  selectmeatPzone() {
    I.waitForElement(foodObjects.meatyPzone);
    I.tap(foodObjects.meatyPzone);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the P'Zone menu, selecting Supremo PZone
  selectsupPzone() {
    I.downScroller(foodObjects.supremoPzone);
    I.tap(foodObjects.supremoPzone);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
};
