"use strict";

module.exports = {

  // Object Locators for the Localization screen
  carryouttab: {
    xpath: ".//*[@text='CARRYOUT']",
    ios: '~Carryout',
  },
  carryoutzip: {
    xpath: ".//*[@text='City, state or zip code']/following::*[contains(@class, 'EditText')]",
    ios: '//XCUIElementTypeOther[@name="City, state or zip code"]/XCUIElementTypeOther/XCUIElementTypeOther[1]/XCUIElementTypeTextField',
  },
  searchButton: {
    xpath: ".//*[@text='SEARCH']",
    ios: '~Search',
  },
  changebutton: {
    xpath: ".//*[@text='CHANGE']",
    ios: '~Change',
  },
  maparea:
  {
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ImageView[1]",
    ios: '',
  },
  addressField: {
    xpath: ".//*[@text='1234 Sample Street']",
   // ios:"(.//*[@name='1234 Sample Street'])[2]/XCUIElementTypeTextField",
    ios: "(.//*[@label='1234 Sample Street'])"
  },
  aptno:
  {
ios: "(.//*[@name='Apt/Ste/Rm'])[3]/XCUIElementTypeTextField"
  },
  cityField: {
    xpath: ".//*[@text='City'][2]",
    ios: ".//*[@name='City']"
  },
  suggestedAddress:{
    ios:"(.//*[@name='Untracked'])[1]"
  },
  stateSelector: {
    xpath: ".//*[@text='XX']",
    ios: ".//*[@name='ios_touchable_wrapper']"
  },
  zipField: {
    xpath: ".//*[@text='xxxxx']",
    ios: ".//*[@name='xxxxx']/XCUIElementTypeTextField"
  },
  noButton: {
    xpath: ".//*[@text='NO']",
  },
  yesButton: {
    xpath: ".//*[@text='YES']",
  },
  waitBe4scroll: {
    xpath: ".//*[@text='AK']",
    ios: ".//*[@name='ios_picker']/XCUIElementTypePickerWheel/XCUIElementTypeOther[1]"
  },
  // Objects appearing after searching for selecting a store
  continue: {
    xpath: ".//*[@text='CONTINUE']",
    ios: ".//*[@label='CONTINUE']",
  },
  preorder: {
    xpath: ".//*[@text='PREORDER']",
  },
  callStore: {
    xpath: ".//*[@text='CALL STORE']",
  },
acceptalert:
{
 ios: ".//*[@name='Allow']",
 //ios: "~SBSwitcherWindow",
},
savedAddress:
{
ios: "~Saved Addresses",
},

};
