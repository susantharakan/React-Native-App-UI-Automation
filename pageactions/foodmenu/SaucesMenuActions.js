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

  // From the Sauces menu selecting marinara
  selectSauceMarinara() {
    I.waitForElement(foodObjects.marinara);
    I.tap(foodObjects.marinara);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the Sauces menu selecting marinara
  selectSauceBluecheese() {
    I.waitForElement(foodObjects.blueCheese);
    I.tap(foodObjects.blueCheese);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the Sauces menu selecting marinara
  selectSauceHoneyBBQ() {
    I.waitForElement(foodObjects.honeyBBQsauce);
    I.tap(foodObjects.honeyBBQsauce);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
};
