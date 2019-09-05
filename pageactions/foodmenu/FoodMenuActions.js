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

  // Selection of Pizza from main menu
  selectPizza() {
    I.waitForElement(foodObjects.pizza);
    I.tap(foodObjects.pizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selection of Pasta from main menu
  selectPasta() {
    I.waitForElement(foodObjects.pasta);
    I.tap(foodObjects.pasta);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selection of PZone from main menu
  selectPZone() {
    I.runOnIOS(() => {
      I.waitForElement(foodObjects.pizza);
      I.clickpzone();
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
   I.runOnAndroid(() => {
    I.waitForElement(foodObjects.pzone);
    I.tap(foodObjects.pzone);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  });
   },

  // Selection of Wings from main menu
  selectWings() {
    I.waitForElement(foodObjects.wings);
    I.tap(foodObjects.wings);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selection of Sides from main menu
  selectSides() {
    I.waitForElement(foodObjects.sides);
    I.tap(foodObjects.sides);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selection of Desserts from main menu
  selectDesserts() {
    I.waitForElement(foodObjects.desserts);
    I.tap(foodObjects.desserts);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selection of Sauces from main menu
  selectSauces() {
    I.waitForElement(foodObjects.sauces);
    I.tap(foodObjects.sauces);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selection of Drinks from main menu
  selectDrinks() {
    I.runOnIOS(() => {
      I.downScrollerforios();
      I.waitForElement(foodObjects.drinks);
    I.tap(foodObjects.drinks);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
   I.runOnAndroid(() => {
    I.waitForElement(foodObjects.drinks);
    I.tap(foodObjects.drinks);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
 });
    
  },

  // Selection of Salads from main menu
  selectSalads() {
    I.waitForElement(foodObjects.salads);
    I.tap(foodObjects.salads);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selection of Soups from main menu
  selectSoups() {
    I.runOnIOS(() => {
      I.downScrollerforios();
      I.waitForElement(foodObjects.soups);
      I.tap(foodObjects.soups);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
   I.runOnAndroid(() => {
    I.waitForElement(foodObjects.soups);
    I.tap(foodObjects.soups);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
 });
    
  },

  // Selection of Sandwiches from main menu
  selectSandwiches() {
    I.runOnIOS(() => {
      I.downScrollerforios();
      I.waitForElement(foodObjects.sandwiches);
      I.tap(foodObjects.sandwiches);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
   I.runOnAndroid(() => {
    I.waitForElement(foodObjects.sandwiches);
    I.tap(foodObjects.sandwiches);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
 });
    
  },


};
