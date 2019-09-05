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

  // Shareable Garden salad selection
  selectGardenSalad() {
    I.waitForElement(foodObjects.gardenSalad);
    I.tap(foodObjects.gardenSalad);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  //Side Classic caesar salad slection
  selectSideCaesar() {
    I.waitForElement(foodObjects.sidecaesarSalad);
    I.tap(foodObjects.sidecaesarSalad);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseRanch);
    I.tap(foodObjects.chooseRanch);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  //Shareable classic caesar salad selection
  selectShareCaesar() {
    I.waitForElement(foodObjects.sharecaesarSalad);
    I.tap(foodObjects.sharecaesarSalad);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

};
