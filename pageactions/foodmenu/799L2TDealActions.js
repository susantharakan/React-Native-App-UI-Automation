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

  // From the $799 deal, choose products
  selectCyo() {
    I.waitForElement(foodObjects.cyo);
    // I.wait(5);
    I.tap(foodObjects.cyo);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectyourCrust() {
    I.waitForElement(foodObjects.handtossed);
    I.tap(foodObjects.handtossed);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectcrustFlavor() {
    I.waitForElement(foodObjects.hutFav);
    I.tap(foodObjects.hutFav);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectyourSauce() {
    I.waitForElement(foodObjects.classMarinara);
    I.tap(foodObjects.classMarinara);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectCheese() {
    I.waitForElement(foodObjects.regCheese);
    I.tap(foodObjects.regCheese);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectitalianSausage() {
    I.waitForElement(foodObjects.italianSausage);
    I.tap(foodObjects.italianSausage);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectmeatBall() {
    I.waitForElement(foodObjects.meatBall);
    I.tap(foodObjects.meatBall);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selecttopOk() {
    I.waitForElement(foodObjects.topOk);
    I.tap(foodObjects.topOk);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },


};
