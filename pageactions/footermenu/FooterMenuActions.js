"use strict";

let I;
let imports;
let footerMenuPage;
let commonObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    footerMenuPage = eval(imports.footerMenuPage);
    commonObjects = eval(imports.commonObjects);
  },
  /**
   * wait for menu element and tap when it appears
   */
  tapMenu() {
    I.waitForElement(footerMenuPage.menu);
    I.tap(footerMenuPage.menu);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  tapDeal() {
    I.waitForElement(footerMenuPage.deals);
    I.tap(footerMenuPage.deals);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
  
  tapAccount() {
    I.waitForElement(footerMenuPage.account);
    I.tap(footerMenuPage.account);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

};
