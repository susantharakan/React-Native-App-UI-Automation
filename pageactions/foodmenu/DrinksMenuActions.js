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

  // From the Drinks menu, select size of the drink or deal
  // Selecting 4 pack deal
  select4pack() {
    I.waitForElement(foodObjects.chooseFour);
    I.tap(foodObjects.chooseFour);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.chooseDrpep4);
    I.tap(foodObjects.chooseDrpep4);
    I.tap(foodObjects.chooseDrpep4);
    I.tap(foodObjects.chooseDrpep4);
    I.tap(foodObjects.chooseDrpep4);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selecting 20oz drinks and type
  selectDrinks20() {
    I.waitForElement(foodObjects.choose20oz);
    I.tap(foodObjects.choose20oz);
    I.waitForElement(foodObjects.choosePepsi);
    //I.downScroller(foodObjects.chooseX);
    I.tap(foodObjects.choosePepsi);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selecting 2 liter drinks and type
  selectDrinks2L() {
    I.waitForElement(foodObjects.choose2L);
    I.tap(foodObjects.choose2L);
    I.waitForElement(foodObjects.choosePepsi);
    //I.downScroller(foodObjects.chooseX);
    I.tap(foodObjects.choosePepsi);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Selecting single, 2pack or 6pack of booze
  select6pack() {
    I.waitForElement(foodObjects.choose6Pack);
    I.tap(foodObjects.choose6Pack);
  },

  select2pack() {
    I.waitForElement(foodObjects.choose2Pack);
    I.tap(foodObjects.choose2Pack);
  },

  select12oz() {
    I.waitForElement(foodObjects.choose12oz);
    I.tap(foodObjects.choose12oz);
  },

  // Selecting the type of booze
  selectCoorsLight() {  
    I.waitForElement(foodObjects.chooseCoorsLight);
    I.tap(foodObjects.chooseCoorsLight);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectBlueMoon() {
    I.waitForElement(foodObjects.chooseBlueMoon);
    I.tap(foodObjects.chooseBlueMoon);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  selectBudLight() {
    I.waitForElement(foodObjects.chooseBudLight);
    I.tap(foodObjects.chooseBudLight);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // Age check dialog
  boozeAgeDialog() {
    I.runOnAndroid(() => {
      I.waitForElement(foodObjects.boozeAgeDialog);
      I.tap(foodObjects.boozeDialogY);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
   I.runOnIOS(() => {
    I.acceptboozeage();
 });
  //   I.runOnIOS(() => {
  //     I.acceptboozeage();
  //   //   I.touchPerform([{
  //   //     action: 'press',
  //   //     options: {
  //   //       x: 280,
  //   //       y: 600
  //   //     }
  //   // }, {action: 'release'}])
  //     //I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  //  });
    
  },

  // Check text for denied purchase of booze
  boozeDeniedcheck() {
    I.seeElement(foodObjects.boozeNotselling)
  },

};
