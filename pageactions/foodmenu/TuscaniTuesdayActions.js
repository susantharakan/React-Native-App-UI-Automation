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
    foodObjects = eval(imports.deals);
  },

  // From the $5 LU, choose products
  selectpickyourPasta() {
    I.waitForElement(foodObjects.pickyourPasta);
    I.tap(foodObjects.pickyourPasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectfamilysizePasta() {
    I.waitForElement(foodObjects.famsizePasta);
    I.tap(foodObjects.famsizePasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectchikenalfredoPasta() {
    I.waitForElement(foodObjects.chickenalfredoPasta);
    I.tap(foodObjects.chickenalfredoPasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },


};
