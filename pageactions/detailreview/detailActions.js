"use strict";

let I;
let imports;
let commonObjects;
let foodObjects;
let detailObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    foodObjects = eval(imports.foodMenu);
    detailObjects = eval(imports.detailPage);
  },


  addToOrder() {
    I.waitForElement(detailObjects.addToOrder);
    I.tap(detailObjects.addToOrder);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  addToOrder5LU()
  {
    I.waitForElement(detailObjects.addToOrder5LU);
    I.tap(detailObjects.addToOrder5LU);
    I.waitForInvisible(commonObjects.progressBar);
  },
  
  addToDeal() {
    I.waitForElement(detailObjects.addToDeal);
    I.tap(detailObjects.addToDeal);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  continueToCheckoutPopup() {
   
    I.runOnIOS(() => {
      I.gotocheckoutforios();
    });
    I.runOnAndroid(() => {
      I.waitForElement(detailObjects.continueToCheckout);
      I.tap(detailObjects.continueToCheckout, 220,400);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    });
  },

  backtoMenu() {
   
    I.runOnIOS(() => {
      I.backtomenuforios();
    });
    I.runOnAndroid(() => {
      I.waitForElement(detailObjects.backtoMain);
      I.tap(detailObjects.backtoMain);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    });
    
  },

  backtoDeals() {
    I.waitForElement(detailObjects.backtoDeal);
    I.tap(detailObjects.backtoDeal);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  backarrowMenu() {
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.tap(detailObjects.backArrow);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

//Scrolling for the menu  
scrollingMenu1() {
  I.runOnAndroid(() => {
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.downScroller(detailObjects.swipeLocation2);
});

I.runOnIOS(() => {
  I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  I.downScrollerforios();
});
  },

scrollingMenu2() {
  I.waitForElement(detailObjects.swipeLocation2);
  I.swipe(detailObjects.swipeLocation2, 1000, 0, 300, 0); 
  },  

  tapOnCart() {
    I.waitForElement(detailObjects.cartButton);
    I.tap(detailObjects.cartButton);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  applyCoupon(coupon) {
    I.waitForElement(detailObjects.couponField);
    I.fillField(detailObjects.couponField, coupon);
    I.tap(detailObjects.applyButton);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.wait(3);
  },

  // Pasta upgrade to cheese sticks
  upgradeSticks() {
    I.tap(detailObjects.upgradeCheeseSticks);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

};
