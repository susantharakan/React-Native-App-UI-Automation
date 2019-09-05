"use strict";

let I;
let imports;
let commonObjects;
let foodObjects;

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    foodObjects = eval(imports.deals);
  },

  // Choose products from the BDB
  // Complete Step1
  selectStep1() {
    I.waitForElement(foodObjects.bdbStep1);
    I.tap(foodObjects.bdbStep1);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectCyo() {
    I.waitForElement(foodObjects.cyo);
    I.tap(foodObjects.cyo);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },

  selectcrustFlavor() {
    I.waitForElement(foodObjects.hutFav);
    I.tap(foodObjects.hutFav);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectcrustFlavor1() {
    I.waitForElement(foodObjects.garlicbutterBlend);
    I.tap(foodObjects.garlicbutterBlend);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectyourSauce() {
    I.waitForElement(foodObjects.classMarinara);
    I.tap(foodObjects.classMarinara);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectyourSauce1() {
    I.waitForElement(foodObjects.creamygarlicParm);
    I.tap(foodObjects.creamygarlicParm);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectCheese() {
    I.waitForElement(foodObjects.regCheese);
    I.tap(foodObjects.regCheese);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectitalianSausage() {
    I.waitForElement(foodObjects.italianSausage);
    I.tap(foodObjects.italianSausage);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectmeatBall() {
    I.waitForElement(foodObjects.meatBall);
    I.tap(foodObjects.meatBall);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selecttopOk() {
    I.waitForElement(foodObjects.topOk);
    I.tap(foodObjects.topOk);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectStep2() {
    I.waitForElement(foodObjects.bdbStep2);
    I.tap(foodObjects.bdbStep2);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },

  selectStep4() {
    I.waitForElement(foodObjects.bdbStep4);
    I.tap(foodObjects.bdbStep4);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },
  selectbuffaloWings() {
    I.waitForElement(foodObjects.buffaloWings);
    I.tap(foodObjects.buffaloWings);
I.waitForElementLeaveDom(commonObjects.progressBar);
  },

};
