"use strict";

let I;
let imports;
let commonObjects;
let checkoutObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    checkoutObjects = eval(imports.checkoutPage);
  },

 scrollToBottomOfcheckout() 
  {
I.runOnAndroid(() => {
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.downScroller(checkoutObjects.cashRadio);
});
  I.runOnIOS(() => {
    I.downScrollerforios();
 });
 },

 scrollToTopOfcheckout() {
 
  I.runOnAndroid(() => {
    I.upScroller(checkoutObjects.myOrder);
});
  I.runOnIOS(() => {
    I.upScrollerforios();
 });
   
 },

 scrollToBottomDelivery() {
    I.waitForElement(checkoutObjects.delivery);
    I.swipe(checkoutObjects.delivery, 0, 2200, 1000);
    I.waitForElement(checkoutObjects.track);
    I.swipe(checkoutObjects.track, 0, 2200, 1000);
    I.waitForElement(checkoutObjects.payment);
    I.swipe(checkoutObjects.payment, 0, 2200, 1000);
    I.waitForElement(checkoutObjects.couponCode);
    I.swipe(checkoutObjects.couponCode, 0, 2200, 1000);
  },     
  scrollToBottomOfcheckoutforfavorder(){
    I.waitForElement(checkoutObjects.carryout);
    I.swipe(checkoutObjects.carryout, 0, 2200, 1000);
    I.waitForElement(checkoutObjects.payment);
    I.swipe(checkoutObjects.payment, 0, 2200, 1000);
    I.waitForElement(checkoutObjects.couponCode);
    I.swipe(checkoutObjects.couponCode, 0, 2200, 1000);
  },

  editItem(){
    I.waitForElement(checkoutObjects.edit);
    I.tap(checkoutObjects.edit);
    I.waitForElementLeaveDom(commonObjects.progressBar);
  },

  fillOutNewCCFields(name, number, exp, cvv, zip) {
   I.waitForElement(checkoutObjects.nameOnCardField);
    this.fillNameOnCardField(name);
    this.fillCCNumberField(number);
    this.fillExpDateField(exp);
    this.fillNewCVVField(cvv);
    this.fillNewZIPField(zip);
  },

  selectCash() {
    I.waitForElement(checkoutObjects.cashRadio);
    I.tap(checkoutObjects.cashRadio);
  },

  selectCreditDebit() {
    I.waitForElement(checkoutObjects.creditDebitRadio);
    I.tap(checkoutObjects.creditDebitRadio);
  },

  selectGiftCard() {
    I.tap(checkoutObjects.giftCardCheckbox);
  },

  // Security check for saved card
  fillCVVField(cvv) {
    I.fillField(checkoutObjects.cvvField, cvv);
  },

  fillZIPField(zip) {
    I.fillField(checkoutObjects.zipField, zip);
  },

  // existing CC confirmation fields
  tapChangeCard() {
    I.tap(checkoutObjects.changeCard);
  },
  tapNewCard() {
    I.tap(checkoutObjects.newCard);
  },

  // new card
  fillNameOnCardField(name) {
    I.fillField(checkoutObjects.nameOnCardField, name);
  },
  fillCCNumberField(cc) {
    I.fillField(checkoutObjects.cardNumberField, cc);
  },
  fillExpDateField(exp) {
    I.fillField(checkoutObjects.expDateField, exp);
  },
  fillNewCVVField(cvv) {
    I.fillField(checkoutObjects.newCVVField, cvv);
  },
  fillNewZIPField(zip) {
    I.fillField(checkoutObjects.newZipField, zip);
  },

  // new card fields

 fillOutNewCCFieldsiOS(name, number, exp, cvv, zip){
  I.waitForElement(checkoutObjects.nameOnCardField);
  this.fillNameOnCardField(name);
  I.tap(checkoutObjects.cardNumberField);
  I.appiumScroll(100, 200, 100, 100, 400);
  this.fillCCNumberField(number); 
  this.fillExpDateField(exp); 
  this.fillNewCVVField(cvv); 
  this.fillNewZIPField(zip);
  I.waitForElement(checkoutObjects.done);
  I.tap(checkoutObjects.done);
  I.downScrollerforios();

},

  placeMyOrder() {
   I.runOnAndroid(() => {
    I.downScroller(checkoutObjects.placeMyOrder);
    I.tap(checkoutObjects.placeMyOrder);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
});
   I.runOnIOS(() => {
      I.tap(checkoutObjects.placeMyOrder);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
  },

  deleteItems() {
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.delete(checkoutObjects.delete);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  fillContactinfo() {
    I.fillField(checkoutObjects.firstName, "Testaccount");
    I.fillField(checkoutObjects.lastName, "Testlastname");
    I.fillField(checkoutObjects.emailAddress, "test4321@test.com");
    I.fillField(checkoutObjects.phoneNumber, "9721234321");
  },
  fillContactinfoforiOS() {
    I.waitForElement(checkoutObjects.firstName);
    I.fillField(checkoutObjects.firstName, "Testaccount");
    I.waitForElement(checkoutObjects.lastName);
    I.fillField(checkoutObjects.lastName, "Testlastname");
    I.waitForElement(checkoutObjects.emailAddress);
    I.fillField(checkoutObjects.emailAddress, "test4321@test.com");
    I.waitForElement(checkoutObjects.phoneNumber);
    I.fillField(checkoutObjects.phoneNumber, "9721234321");
    I.waitForElement(checkoutObjects.done);
    I.tap(checkoutObjects.done);
    I.tap(checkoutObjects.done);
  },

  guestPlaceMyOrder() {
    I.runOnIOS(() => {
      I.downScrollerforios();
      I.tap(checkoutObjects.agreeTerms);
      I.tap(checkoutObjects.placeMyOrder);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
   });
   I.runOnAndroid(() => {
    I.downScroller(checkoutObjects.placeMyOrder);
    I.tap(checkoutObjects.agreeTerms);
    I.tap(checkoutObjects.placeMyOrder);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
 });
    
  },

};
