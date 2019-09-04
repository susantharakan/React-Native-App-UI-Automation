"use strict";

module.exports = {

  // Object Locators for buttons and points to complete actions
  addToOrder: {
    xpath: ".//*[@text='ADD TO ORDER']",
    ios: "(.//*[@name='ADD TO ORDER'])[2]"
    
  },
  addToOrder5LU: {
    xpath: ".//*[@text='ADD TO ORDER']",
    ios: "~Add to $5 Lineup",
  },
  continueToCheckout: {
    xpath: ".//*[@text='GO TO CHECKOUT']",
    //ios: ".//*[@name='Dismiss']",
    //ios: ".//*[ends-with(@label, 'CHECKOUT')]",
     //ios:  ".//*[@name='Dismiss']/following::*[contains(@label,'ADDED! BACK TO DEALS GO TO CHECKOUT')]",
     ios: ".//*[contains(@label,'GO TO CHECKOUT')]",
    
    // /hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup[2]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[3]/android.widget.TextView"
  },
  backtoMain: {
    xpath: ".//*[@text='BACK TO MENU']",
  },

  backtoDeal: {
    xpath: ".//*[@text='BACK TO DEALS']",
  },

  backArrow: {
    xpath: "//*[@content-desc='Back']",
    ios: "~Back",
  },

  // location to grab onto at the main menu to help move the main menu down
  swipeLocation1: {
    xpath: ".//*[@text='Desserts']",
    ios: "(.//*[@name='Desserts'])[3]",
  },
  swipeLocation2: {
    xpath: ".//*[@text='Drinks']",
    //ios: "(.//*[@name='Drinks'])[3]",
    ios: ".//*[contains(@label,'Drinks')]",
  },

  cartButton: {
    xpath: "(.//*[@class='android.widget.ImageView'])[1]",
    ios: "~Cart",
  },

  couponField: {
    xpath: ".//*[@text='123456']",
    ios: "~123456",
  },

  applyButton: {
    xpath: ".//*[@text='Apply']",
    ios: "~Apply Coupon",
  },

  upgradeCheeseSticks: {
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.widget.ImageView",
  },
  // Object Locators for the pizza deals(like $5 LU) to add to deal
  addToDeal: {
    xpath: ".//*[@text='ADD TO DEAL']",
    ios: "~Add to Deal",
  },


};
