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
  selectPizza() {
    I.waitForElement(foodObjects.pizza);
    I.tap(foodObjects.pizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectbuffalochickenPizza() {
    I.waitForElement(foodObjects.buffalochickenPizza);
    I.tap(foodObjects.buffalochickenPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectPzone() {
    //I.swipe(foodObjects.pzone, 1000, 0, 500, 0);
    I.waitForElement(foodObjects.pzone);
    //I.swipe(foodObjects.pzone, 1000, 0, 500, 0);
    I.tap(foodObjects.pzone);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectpepPzone() {
    I.waitForElement(foodObjects.pepPzone);
    I.tap(foodObjects.pepPzone);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectPasta() {
    //I.swipe(foodObjects.pasta, 1000, 0, 500, 0);
    I.waitForElement(foodObjects.pasta);
    I.tap(foodObjects.pasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectmeatmarinaraPasta() {
    I.waitForElement(foodObjects.meatmarinaraPasta);
    I.tap(foodObjects.meatmarinaraPasta);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectWings() {
    I.waitForElement(foodObjects.wings);
   // I.swipe(foodObjects.wings, 1000, 0, 500, 0);
    I.tap(foodObjects.wings);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectbuffaloWings() {
    I.waitForElement(foodObjects.buffaloWings);
    I.tap(foodObjects.buffaloWings);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectSides() {
    
    I.waitForElement(foodObjects.sides);
    I.swipe(foodObjects.sides, 1000, 0, 500, 0);
    I.tap(foodObjects.sides);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectgarlicKnots() {
    I.waitForElement(foodObjects.garlicKnots);
    I.tap(foodObjects.garlicKnots);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectDesserts() {
    I.swipe(foodObjects.desserts, 1000, 0, 500, 0);
    I.waitForElement(foodObjects.desserts);
    I.tap(foodObjects.desserts);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selecthersheysCookie() {
    I.waitForElement(foodObjects.hersheysCookie);
    I.tap(foodObjects.hersheysCookie);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectDrinks() {
    I.swipe(foodObjects.drinks, 1000, 0, 500, 0);
    I.waitForElement(foodObjects.drinks);
    I.tap(foodObjects.drinks);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectchooseDrpep4() {
    I.waitForElement(foodObjects.chooseDrpep4);
    I.tap(foodObjects.chooseDrpep4);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectchoosePepsi4() {
    I.swipe(foodObjects.choosePepsi4, 1000, 0, 500, 0);
    I.waitForElement(foodObjects.choosePepsi4);
    I.tap(foodObjects.choosePepsi4);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectchooseDietpep4() {
    I.swipe(foodObjects.chooseDietpep4, 1000, 0, 500, 0);
    I.waitForElement(foodObjects.chooseDietpep4);
    I.tap(foodObjects.chooseDietpep4);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectchooseMTdew4() {
    I.waitForElement(foodObjects.chooseMTdew4);
    I.tap(foodObjects.chooseMTdew4);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectadd4Pk() {
    I.waitForElement(foodObjects.add4Pk);
    I.tap(foodObjects.add4Pk);
I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

};
