"use strict";

let I;
let imports;
let localizationPage;
let commonObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));
let homePage;
let dealsPage;
let menuPage;
let buildPage;
let profilePage;



module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    localizationPage = eval(imports.localizationPage);
    commonObjects = eval(imports.commonObjects);
    dealsPage = eval(imports.deals);
    homePage = eval(imports.homePage);
    menuPage = eval(imports.foodMenu);
    buildPage = eval(imports.buildPage);
    profilePage = eval(imports.profilePage)
  },

  /**
   * Search and select a store for Carryout
   * @param zip for closest store
   */
  searchCarryout(zip) {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, zip);
    I.tap(localizationPage.searchButton);
    I.say("Zip code is " + zip);
    I.runOnIOS(() => {
      I. waitForPopupToLeaveDom(localizationPage.acceptalert);
      I.selectStore(settings.config.helpers.Appium.platform);
   });
   I.runOnAndroid(() => {
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
      I.selectStore(settings.config.helpers.Appium.platform);
 });
  },

  searchDelivery(address, city, state, deliveryzip) {
    I.waitForElement(localizationPage.addressField);
    I.fillField(localizationPage.addressField, address);
    I.fillField(localizationPage.cityField, city);
    I.tap(localizationPage.stateSelector);
    I.waitForElement(localizationPage.waitBe4scroll);
    I.stateScroller(state);
    I.tap({"xpath": ".//*[@text='"+state+"']"});
    I.fillField(localizationPage.zipField, deliveryzip);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(localizationPage.noButton);
    I.tap(localizationPage.noButton);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(localizationPage.searchButton);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.selectStore(settings.config.helpers.Appium.platform);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  searchDeliveryforios()
  {
    I.waitForElement(localizationPage.savedAddress);
    I.tap(localizationPage.savedAddress);
    I.selectsavedaddress();
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    //I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.selectStore(settings.config.helpers.Appium.platform);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },
   /**
   * Search and select a store for Carryout explicitly from home screen
   */
  searchCarryoutFromHome(zip)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, zip);
    I.tap(localizationPage.searchButton);
    I.runOnIOS(() => {
    I.waitForPopupToLeaveDom(localizationPage.acceptalert)
    });
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);

    I.downScroller(localizationPage.continue);
    I.tap(localizationPage.continue)
    I.waitForElement(buildPage.buildYourDeal);
    I.seeElement(buildPage.buildYourDeal);
  },
   /**
   * Search and select a store for Carryout explicitly from deals screen
   */
  searchCarryoutFromDeals(zip)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, zip);
    I.tap(localizationPage.searchButton);
    I.runOnIOS(() => {
    I.waitForPopupToLeaveDom(localizationPage.acceptalert)
    I.tap(localizationPage.continue)
    I.waitForElement(dealsPage.secondDealsText);
    I.seeElement(dealsPage.secondDealsText);
    });

    I.runOnAndroid(() => {
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.downScroller(localizationPage.continue);
    I.tap(localizationPage.continue)
    I.waitForElement(dealsPage.secondDealsText);
    I.seeElement(dealsPage.dealsText);
    I.seeElement(dealsPage.secondDealsText);
 });
    
  },
     /**
   * Search and select a store for Carryout explicitly from menu screen
   */
  searchCarryoutFromMenu(zip)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, zip);
    I.tap(localizationPage.searchButton);
    I.runOnIOS(() => {
      I.waitForPopupToLeaveDom(localizationPage.acceptalert)
      I.tap(localizationPage.continue)
      I.waitForElement(dealsPage.menutext);
      I.seeElement(dealsPage.menutext);
      });
      I.runOnAndroid(() => {
        I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
        I.downScroller(localizationPage.continue);
        I.tap(localizationPage.continue)
        I.waitForElement(menuPage.wings);
        I.seeElement(menuPage.wings);
     });
  },
      /**
   * Search and select a store for Carryout explicitly from account screen
   */
  searchCarryoutFromAccount(zip)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, zip);
    I.tap(localizationPage.searchButton);
    I.say("Zip code is " + zip);
    I.runOnIOS(() => {
      I.waitForPopupToLeaveDom(localizationPage.acceptalert)
      I.tap(localizationPage.continue)
      I.waitForElement(profilePage.findaPizzaHut);
      I.seeElement(profilePage.findaPizzaHut);
      });
      I.runOnAndroid(() => {
        I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
        I.downScroller(localizationPage.continue);
        I.tap(localizationPage.continue)
        I.waitForElement(profilePage.findaPizzaHut);
        I.seeElement(profilePage.findaPizzaHut);
     });
  },
    /**
   * Search and select a store for delivery explicitly from home screen
   */
  searchDeliveryFromHome(address, city, state, deliveryzip)
  {
    I.waitForElement(localizationPage.addressField);
    I.fillField(localizationPage.addressField, address);
    I.fillField(localizationPage.cityField, city);
    I.tap(localizationPage.stateSelector);
    I.waitForElement(localizationPage.waitBe4scroll);
    I.stateScroller(state);
    I.fillField(localizationPage.zipField, deliveryzip);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(localizationPage.noButton);
    I.tap(localizationPage.noButton);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.downScroller(localizationPage.continue);
    I.tap(localizationPage.continue)
    I.waitForElement(buildPage.buildYourDeal);
    I.seeElement(buildPage.buildYourDeal);


  },
    /**
   * Search and select a store for delivery explicitly from deals screen
   */
  searchDeliveryFromDeals(address, city, state, deliveryzip)
  {
    I.waitForElement(localizationPage.addressField);
    I.fillField(localizationPage.addressField, address);
    I.fillField(localizationPage.cityField, city);
    I.tap(localizationPage.stateSelector);
    I.waitForElement(localizationPage.waitBe4scroll);
    I.stateScroller(state);
    I.fillField(localizationPage.zipField, deliveryzip);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(localizationPage.noButton);
    I.tap(localizationPage.noButton);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.downScroller(localizationPage.continue);
    I.tap(localizationPage.continue)
    I.waitForElement(dealsPage.secondDealsText);
    I.seeElement(dealsPage.dealsText);
    I.seeElement(dealsPage.secondDealsText);
  },
    /**
   * Search and select a store for delivery explicitly from menu screen
   */
  searchDeliveryFromMenu(address, city, state, deliveryzip)
  {
    I.waitForElement(localizationPage.addressField);
    I.fillField(localizationPage.addressField, address);
    I.fillField(localizationPage.cityField, city);
    I.tap(localizationPage.stateSelector);
    I.waitForElement(localizationPage.waitBe4scroll);
    I.stateScroller(state);
    I.fillField(localizationPage.zipField, deliveryzip);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(localizationPage.noButton);
    I.tap(localizationPage.noButton);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.downScroller(localizationPage.continue);
    I.tap(localizationPage.continue)
    I.waitForElement(menuPage.wings);
    I.seeElement(menuPage.wings);
  },
    /**
   * Search and select a store for delivery explicitly from account screen
   */
  searchDeliveryFromAccount(address, city, state, deliveryzip)
  {
    I.waitForElement(localizationPage.addressField);
    I.fillField(localizationPage.addressField, address);
    I.fillField(localizationPage.cityField, city);
    I.tap(localizationPage.stateSelector);
    I.waitForElement(localizationPage.waitBe4scroll);
    I.stateScroller(state);
    I.fillField(localizationPage.zipField, deliveryzip);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(localizationPage.noButton);
    I.tap(localizationPage.noButton);
    I.waitForElement(localizationPage.searchButton);
    I.tap(localizationPage.searchButton);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.downScroller(localizationPage.continue);
    I.tap(localizationPage.continue);
    I.waitForElement(profilePage.findaPizzaHut);
    I.seeElement(profilePage.findaPizzaHut);
  },
  
      /**
   * Search and select a store for delivery explicitly from deals screen
   */
  searchStoreNumberFromHome(storenum)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, storenum);
    I.tap(localizationPage.searchButton);
    I.runOnIOS(() => {
    I.waitForPopupToLeaveDom(localizationPage.acceptalert)
    });
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(homePage.redeemButton);
    I.seeElement(homePage.redeemButton);
  },
      /**
   * Search and select a store for delivery explicitly from deals screen
   */
  searchStoreNumberFromDeals(storenum)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, storenum);
    I.tap(localizationPage.searchButton);
  I.runOnIOS(() => {
    I.waitForElement(dealsPage.secondDealsText);
    I.seeElement(dealsPage.secondDealsText);
  });
  I.runOnAndroid(() => {
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(dealsPage.secondDealsText);
    I.seeElement(dealsPage.dealsText);
    I.seeElement(dealsPage.secondDealsText);
  });
   
  },
      /**
   * Search and select a store for delivery explicitly from deals screen
   */
  searchStoreNumberFromMenu(storenum)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, storenum);
    I.tap(localizationPage.searchButton);
    I.runOnIOS(() => {
    I.waitForPopupToLeaveDom(localizationPage.acceptalert)
    });
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(menuPage.wings);
    I.seeElement(menuPage.wings);
  },
      /**
   * Search and select a store for delivery explicitly from deals screen
   */
  searchStoreNumberFromAccount(storenum)
  {
    I.waitForElement(localizationPage.carryouttab);
    I.tap(localizationPage.carryouttab);
    I.waitForElement(localizationPage.carryoutzip);
    I.fillField(localizationPage.carryoutzip, storenum);
    I.tap(localizationPage.searchButton);
    I.runOnIOS(() => {
    I.waitForPopupToLeaveDom(localizationPage.acceptalert)
    });
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
    I.waitForElement(profilePage.findaPizzaHut);
    I.seeElement(profilePage.findaPizzaHut);  
  },

  };

