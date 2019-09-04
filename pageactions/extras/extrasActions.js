"use strict";

let I;
let imports;
let commonObjects;
let extrasObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    extrasObjects = eval(imports.extrasPage);
 },

 goToCheckoutExtras() {
 	I.waitForElement(extrasObjects.goToCheckout);
 	I.tap(extrasObjects.goToCheckout);
  I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);

 },
 goToCheckoutExtrasfromDeals()
 {
  I.waitForElement(extrasObjects.backToDeals);
  I.waitForElement(extrasObjects.goToCheckout);
  I.tap(extrasObjects.goToCheckout);
  I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
 },
 addItem(item) {
  I.waitForElement({"xpath": ".//*[@text='" + item + "']/following::*[@text='ADD'][1]"});
  I.tap({"xpath": ".//*[@text='" + item + "']/following::*[@text='ADD'][1]"});
  I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  I.wait(commonObjects.getShortLoadTime); // wait for the "added" popup to fade.
  //I.waitForElement({"xpath": ".//*[@text='ADDED!']"});
  //I.waitForInvisible({"xpath": ".//*[@text='ADDED!']"});
 },
 addExtraItemforiOS() 
 {
  I.waitForElement(extrasObjects.addExtraitem);
  I.tap(extrasObjects.addExtraitem);
  I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  I.wait(commonObjects.getShortLoadTime); 
 }


};
