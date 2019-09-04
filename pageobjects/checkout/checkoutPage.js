"use strict";

module.exports = {

  // Object Locators for the checkout screen footer navigation menu
  carryout: {
    xpath: ".//*[@text='CARRYOUT']",
  },
  delivery: {
    xpath: ".//*[@text='Delivering to']",
  },
  contactInfo: {
    xpath: ".//*[@text='Contact info']",
    ios: ".s//XCUIElementTypeStaticText[@name='Contact info']"
  },
  track: {
    xpath: ".//*[@text='TRACK YOUR ORDER']",
  },
  payment: {
    xpath: ".//*[@text='PAYMENT']",
  },
  couponCode: {
    xpath: ".//*[@text='Coupon code']",
    ios: "~Coupon code",
  },
  cashRadio: {
    xpath: ".//*[@text='Cash']",
    ios: "(.//*[@name='Cash'])[2]",
    },
  creditDebitRadio: {
    xpath: ".//*[@text='Credit/debit']",
    ios: "(//*[@name='Credit/debit'])[2]",
  },
  giftCardCheckbox: {
    xpath: ".//*[@text='Gift card']",
    ios: "~Gift card"
  },
  // existing CC confirmation fields
  cvvField: {
    xpath: ".//*[@text='Enter CVV']",
  },
  zipField: {
    xpath: ".//*[@text='Zip code']",
  },
  changeCard: {
    xpath: ".//*[@text='CHANGE CARD']",
  },
  newCard: {
    xpath: ".//*[@text='New Card']",
  },
  // new card fields
  nameOnCardField: {
    xpath: ".//*[@text='Full name']",
    ios: "~Full name"
  },
  cardNumberField: {
    xpath: ".//*[@text='Card #']",
    
   ios: "(.//*[@name='Card #'])[3]",
  },
  expDateField: {
    xpath: ".//*[@text='11/20']",
    ios: "~11/20"
  },
  newCVVField: {
    xpath: ".//*[@text='Enter CVV']",
    ios: "~Enter CVV"
  },
  newZipField: {
    xpath: ".//*[@text='Zip code'][2]",
    ios:"~Zip code Zip code",
  },
  cvvtext:
  {
    ios:"~CVV",
  },
  done:
  {
  //ios: "~Done",
  //ios: ".//*[@name='Done']",
  ios: ".//*[@name='Done']",
  },
  placeMyOrder: {
    xpath: ".//*[@text='PLACE MY ORDER']",
    ios: "~PLACE MY ORDER",
  },
  delete: {
    xpath: ".//*[@text='DELETE']",
    ios: "~Delete",
  },
  areYouSureYes: {
    xpath: ".//*[@text='YES']",
  },
  areYouSureNo: {
    xpath: ".//*[@text='NO']",
  },
  contactInfo: {
    xpath: ".//*[@text='Contact info']",
  },
  edit: {
    xpath: ".//*[@text='EDIT']",
    ios: "~Edit",
  },
  myOrder: {
    xpath: ".//*[@text='My order']",
    ios: ".//XCUIElementTypeStaticText[@name='My order']",
  },
  // Contact info fields
  firstName: {
    xpath: ".//*[@text='First']",
    ios: "~First",
  },
  lastName: {
    xpath: ".//*[@text='Last']",
    ios: "~Last",
  },
  emailAddress: {
    xpath: ".//*[@text='you@example.com']",
    ios: "~you@example.com",
  },
  phoneNumber: {
    xpath: ".//*[ends-with(@text, 'xxxx')]",
    ios: "~(xxx) xxx-xxxx",
  },
  ext: 
  {
  //ios: "~ext.",
  ios: ".//*[@name='ext.']",
  },
  agreeTerms: {
    xpath: "(.//*[@class='android.widget.ImageView'])[7]",
    ios: "~Toggle Age",
  },
  
};

