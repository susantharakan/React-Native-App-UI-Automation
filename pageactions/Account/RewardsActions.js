"use strict";

let I;
let imports;
let rewardPage;
let commonObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    rewardPage = eval(imports.rewardsPage);
    commonObjects = eval(imports.commonObjects);

    
  },
  /**
   * wait for menu element and tap when it appears
   */
  tapFavorites() {
    I.waitForElement(rewardPage.profile);
    I.downScrollerforios();
    I.waitForElement(rewardPage.favorites);
    I.tap(rewardPage.favorites);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  tapOrder() {
    I.waitForElement(rewardPage.ordernow);
    I.tap(rewardPage.ordernow);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  tapDialogCont() {
    I.ifThereClick(rewardPage.weresorryOrder);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  }


};
