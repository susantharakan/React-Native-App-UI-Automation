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

  // From the Desserts menu selecting Cinnabon Minis
  selectDessert() {
    I.waitForElement(foodObjects.cinnabonMinis);
    I.tap(foodObjects.cinnabonMinis);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the Desserts menu selecting Hershey chocolate chip cookie
  selectDessert2() {
    I.waitForElement(foodObjects.hersheysCookie);
    I.tap(foodObjects.hersheysCookie);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the Desserts menu selecting Hershey chocolate brownie
  selectDessert3() {
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    //I.downScroller(foodObjects.hersheysBrownie);
    I.tap(foodObjects.hersheysBrownie);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },  

};