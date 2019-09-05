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

  // Selection of deals from menu deals
  select5LUDeal() {
    I.waitForElement(foodObjects.fiveLUDeal);
    I.tap(foodObjects.fiveLUDeal);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectCheesyBiteDeal() {
    I.waitForElement(foodObjects.cheesyBiteDeal);
    I.tap(foodObjects.cheesyBiteDeal);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  select799LDeal() {
    I.waitForElement(foodObjects.seven99LDeal);
    I.tap(foodObjects.seven99LDeal);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectBDBDeal() {
    I.downScroller(foodObjects.bdb);
    I.tap(foodObjects.bdb);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectBDBBoneoutwings() {
    I.waitForElement(foodObjects.bdbboneoutWings);
    I.tap(foodObjects.bdbboneoutWings);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectTTFamSize() {
    I.downScroller(foodObjects.ttfamsize);
    I.tap(foodObjects.ttfamsize);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectTTPastafor2() {
    I.downScroller(foodObjects.ttpasta42);
    I.tap(foodObjects.ttpasta42);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectwwboneoutWings()
  {
    I.downScroller(foodObjects.wwboneoutWings);
    I.tap(foodObjects.wwboneoutWings);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectwwtraditionalWings()
  {
    I.downScroller(foodObjects.wwtraditionalWings);
    I.tap(foodObjects.wwtraditionalWings);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

};
