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

  // From the soup menu, selecting cup of tomato soup
  selectSoupTomato() {
    I.waitForElement(foodObjects.chooseCup);
    I.tap(foodObjects.chooseCup);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.tomatoSoup);
    I.tap(foodObjects.tomatoSoup);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  // From the soup menu, selecting bowl of Broccoli soup
  selectSoupBroc() {
    I.waitForElement(foodObjects.chooseBowl);
    I.tap(foodObjects.chooseBowl);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(foodObjects.BroccoliSoup);
    I.tap(foodObjects.BroccoliSoup);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
};
