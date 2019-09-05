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

  // Select type of pizza
  selectPizza() {
    I.waitForElement(foodObjects.customPizza);
    I.tap(foodObjects.customPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  buildPizza() {
    // select Size
    I.waitForElement(foodObjects.largeSize);
    I.tap(foodObjects.largeSize);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select Crust
    I.waitForElement(foodObjects.originalCrust);
    I.tap(foodObjects.originalCrust);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select Crust Flavor
    I.waitForElement(foodObjects.hutFlavor);
    I.tap(foodObjects.hutFlavor);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select sauce for the pizza
    I.waitForElement(foodObjects.marinaraSauce);
    I.tap(foodObjects.marinaraSauce);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select Cheese
    I.waitForElement(foodObjects.regularCheese);
    I.tap(foodObjects.regularCheese);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select toppings
    I.waitForElement(foodObjects.pepperoniTop);
    I.tap(foodObjects.pepperoniTop);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // ok button to complete the order
    I.tap(foodObjects.okButton);
  },

  // This is for the coupons or deals that don't ask for size or crust type of the pizza.
  altbuildPizza() {
    // select Crust
  // I.waitForElement(foodObjects.originalCrust);
  // I.tap(foodObjects.originalCrust);
  // I.waitForElement(commonObjects.progressBar);
  I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select Crust Flavor
    I.waitForElement(foodObjects.hutFlavor);
    I.tap(foodObjects.hutFlavor);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select sauce for the pizza
    I.waitForElement(foodObjects.marinaraSauce);
    I.tap(foodObjects.marinaraSauce);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select Cheese
    I.waitForElement(foodObjects.regularCheese);
    I.tap(foodObjects.regularCheese);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // select toppings
    I.waitForElement(foodObjects.pepperoniTop);
    I.tap(foodObjects.pepperoniTop);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    // ok button to complete the order
    I.tap(foodObjects.okButton);
  },
  selectCheese() {
    I.waitForElement(foodObjects.cheesePizza);
    I.tap(foodObjects.cheesePizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectPepperoni() {
    I.waitForElement(foodObjects.pepperoniPizza);
    I.tap(foodObjects.pepperoniPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectMeat() {
    I.waitForElement(foodObjects.meatPizza);
    I.tap(foodObjects.meatPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectSupreme() {
    I.waitForElement(foodObjects.supremePizza);
    I.tap(foodObjects.supremePizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectBBQchick() {
    I.waitForElement(foodObjects.bbqchickPizza);
    I.tap(foodObjects.bbqchickPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectpeplover() {
    I.waitForElement(foodObjects.peploverPizza);
    I.tap(foodObjects.peploverPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectHawaiian() {
    I.waitForElement(foodObjects.hawaiianPizza);
    I.tap(foodObjects.hawaiianPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectChickbacon() {
    I.waitForElement(foodObjects.chickbaconPizza);
    I.tap(foodObjects.chickbaconPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectBuffalo() {
    I.waitForElement(foodObjects.buffaloPizza);
    I.tap(foodObjects.buffaloPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectCheeselover() {
    I.waitForElement(foodObjects.cheeseloverPizza);
    I.tap(foodObjects.cheeseloverPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectVeglover() {
    I.waitForElement(foodObjects.vegloverPizza);
    I.tap(foodObjects.vegloverPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectFiestabeef() {
    I.waitForElement(foodObjects.fiestabeefPizza);
    I.tap(foodObjects.fiestabeefPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectFiestachick() {
    I.waitForElement(foodObjects.fiestachickPizza);
    I.tap(foodObjects.fiestachickPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectBBQbeef() {
    I.waitForElement(foodObjects.bbqbeefPizza);
    I.tap(foodObjects.bbqbeefPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectLuau() {
    I.waitForElement(foodObjects.luauPizza);
    I.tap(foodObjects.luauPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  selectSupersup() {
    I.waitForElement(foodObjects.supersupPizza);
    I.tap(foodObjects.supersupPizza);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  editingSize() {
    I.waitForElement(foodObjects.sizeDetails);
    I.tap(foodObjects.sizeDetails);
    I.waitForElement(foodObjects.mediumSize);
    I.tap(foodObjects.mediumSize);
    I.waitForElement(foodObjects.saveDetails);
    I.tap(foodObjects.saveDetails);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  editingSauce() {
    I.waitForElement(foodObjects.sizeDetails);
    I.appiumScroll(500, 2000, 500, 1500, 400);
    I.tap(foodObjects.sauceDetails);
    I.waitForElement(foodObjects.garlicSauce);
    I.tap(foodObjects.garlicSauce);
    I.waitForElement(foodObjects.saveDetails);
    I.tap(foodObjects.saveDetails);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
    // edge case where saving without actual edits causes errors
  saveEdit() {
    I.waitForElement(foodObjects.sizeDetails);
    I.tap(foodObjects.saveDetails);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
};
