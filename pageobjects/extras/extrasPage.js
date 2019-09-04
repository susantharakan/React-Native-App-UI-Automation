"use strict";

module.exports = {

  // Object Locators for the Home screen footer navigation menu
  home: {
    xpath: "",
  },
  deals: {
    xpath: "",
  },
  account: {
    xpath: "",
  },
  backToDeals: {
    xpath: ".//*[@text='BACK TO DEALS']",
    ios: '~Go to Menu',
  },
  goToCheckout: {
    xpath: ".//*[@text='GO TO CHECKOUT']",
    ios:'~Go to Checkout',
  },
  goToCheckoutExtrasfromDeals:{
    xpath: ".//*[@text='GO TO CHECKOUT']",
    ios:'~Go to Checkout',
  },
  addExtraitem:
  {
    ios: "(.//*[@name='Add to Order'])[2]",
  }

};
