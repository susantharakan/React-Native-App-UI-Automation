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

  // From the pasta types, select Tuscani Chicken Alfredo
  selectTuscaniChickenAlfredo() {
    I.waitForElement(foodObjects.chickalfredoPasta);
    I.tap(foodObjects.chickalfredoPasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the pasta types, select x
  selectMeatMarinaraPasta() {
    I.waitForElement(foodObjects.meatmarinaraPasta);
    I.tap(foodObjects.meatmarinaraPasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the pasta types, select x
  selectFamilyAlfredoPasta() {
    I.waitForElement(foodObjects.familyalfredoPasta);
    I.tap(foodObjects.familyalfredoPasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

};
