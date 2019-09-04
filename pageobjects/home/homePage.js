"use strict";

module.exports = {

  // Object Locators for the home screen exclusding the footer navigation menu
  reviewPopup: {
    xpath: ".//*[@text='Tell us how we are doing']",
    ios: "~Enjoying Pizza Hut?",
    
  },

  thanksText: {
    xpath: ".//*[@text='Thank You']",
    ios: "~Thank You"  // not working
  },
   
  reviewNotNow: {
    ios: "~Not Now",
  },

  redeemButton: {
    xpath: ".//*[@text='REDEEM']",
    ios: ".//*[@label='REDEEM']",
   },
  yourLastOrder: {
    xpath: ".//*[@text='Your last order']",
    ios: ".//*[@name='Your last order']",
  },
  orderNow: {
    xpath: ".//*[@text='ORDER NOW']",
    ios: "~Start an Order > Order Now",
    //ios: ".//*[contains(@label,'ORDER NOW')]",
  },
  home: {
    xpath: ".//*[@text='HOME']",
    ios: "~HOME",
  },
  cart: {
    
    xpath: ".//*",
  },
};
