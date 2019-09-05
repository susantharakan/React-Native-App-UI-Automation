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

  // From the sandwich menu selecting honey BBQ
  selectSandwichBBQ() {
    I.waitForElement(foodObjects.honeyBBQ);
    I.tap(foodObjects.honeyBBQ);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the sandwich menu selecting Black Forest
  selectSandwichBF() {
    I.waitForElement(foodObjects.blackForest);
    I.tap(foodObjects.blackForest);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the sandwich menu selecting Supremo
  selectSandwichSupremo() {
    I.runOnIOS(() => {
      I.downScrollerforios();
      I.tap(foodObjects.supremo);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
   I.runOnAndroid(() => {
    I.downScroller(foodObjects.supremo);
    I.tap(foodObjects.supremo);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
 });
   
  },

    // Selction of side to go with sandwich
  selectSandwichside() {
    I.waitForElement(foodObjects.chooseChips);
    I.tap(foodObjects.chooseChips);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

    // Selecting the size of the sandwich
  selectSandwichsize() {
    I.waitForElement(foodObjects.chooseWhole);
    I.tap(foodObjects.chooseWhole);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },


};
