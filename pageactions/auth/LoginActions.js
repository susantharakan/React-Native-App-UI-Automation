"use strict";

let I;
let imports;
let loginPage;
let commonObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    loginPage = eval(imports.loginPage);
    commonObjects = eval(imports.commonObjects);
  },
  /**
   * Login to the mobile app
   * @param email
   * @param password
   */
  PHlogin(email, password) {
    I.runOnIOS(() => {
      I.waitForElement(loginPage.guestButton);
      I.tap(loginPage.guestButton);
      I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar)
      I.waitForElement(loginPage.signIn);
      I.tap(loginPage.signIn);
   });
    I.waitForElement(loginPage.newAccount);
    I.fillField(loginPage.email, email);
    I.fillField(loginPage.password, password);
    I.tap(loginPage.loginButton);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar)
  },

  //Validate Forgot Password

  verifyforgotPassword(email)
  {
    I.waitForElement(loginPage.newAccount);
    I.waitForElement(loginPage.forgotpass);
    I.tap(loginPage.forgotpass);
    I.waitForElement(loginPage.newAccount);
    I.fillField(loginPage.forgotpassEmail, email);
    I.tap(loginPage.submitemail);
    I.runOnAndroid(() => {
      I.waitForElement(loginPage.emailinstruction);
      I.tap(loginPage.checkemailok);
   });
    I.runOnIOS(() => {
      I.waitForElement("~Dismiss");
      I.forgotpasswordforios();
   });
   
  },

  // Change Password from Account

  changePassword(oldpassword, newpassword) {
    I.waitForElement(loginPage.profile);
   // I.downScrollerforios();
   I.tap(loginPage.profile);
   I.waitForElement(loginPage.editProfile);
   I.tap(loginPage.editProfile);
   I.waitForElement(loginPage.changePassword);
   I.tap(loginPage.changePassword);
   I.waitForElement(loginPage.oldPassword);
   I.tap(loginPage.oldPassword);
   I.fillField(loginPage.oldPassword, oldpassword);
   I.fillField(loginPage.newPassword, newpassword);
   I.waitForElement(loginPage.saveProfile);
   I.tap(loginPage.saveProfile);
  },


  /**
   * Create a new account in the mobile app
   * @param email
   * @param password
   */
  tapCreateAnAccount() {
    I.waitForElement(loginPage.newAccount);
    I.tap(loginPage.newAccount);
  },

  /**
   * Create a new account in the mobile app
   * @params for all fields that require data, first and last name, email password phone dob and zip.
   */
  completeNewUserForm(first, last, email, password, phone, zip) {
    I.waitForElement(loginPage.firstnamefield);
    I.fillField(loginPage.firstnamefield, first);
    I.fillField(loginPage.lastnamefield, last);
    I.fillField(loginPage.emailfield, email);
    I.fillField(loginPage.passwordfield, password);
    I.fillField(loginPage.phonefield, phone);
    I.waitForElement(loginPage.dobfield);
    I.swipe(loginPage.dobfield, 0, 2200, 2000);
    I.swipe(loginPage.yessendmeoffers, 0, 2200, 2000);
    // I.fillField(loginPage.dobfield, dob); not required, date picker needs special actions.
    I.fillField(loginPage.zipfield, zip);
    I.swipe(loginPage.termscheckbox, 0, 2200, 2000);
    I.tap(loginPage.termscheckbox);
    I.tap(loginPage.createmyaccount);
    I.waitForElement(commonObjects.progressBar);
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

  completeNewUserFormforios(first, last, email, password, phone, zip) {
    I.waitForElement(loginPage.firstnamefield);
    I.fillField(loginPage.firstnamefield, first);
    I.fillField(loginPage.lastnamefield, last);
    I.fillField(loginPage.emailfield, email);
    I.fillField(loginPage.passwordfield, password);
   // I.downScrollerforios();
    I.fillField(loginPage.phonefield, phone);
    I.tap(loginPage.done);
    I.tap(loginPage.done);
    //I.downScrollerforios();
    I.tap(loginPage.confirm);
    I.waitForElement(loginPage.zipfield);
    // I.swipe(loginPage.dobfield, 0, 2200, 2000);
    // I.swipe(loginPage.yessendmeoffers, 0, 2200, 2000);
    // I.fillField(loginPage.dobfield, dob); not required, date picker needs special actions.
    I.fillField(loginPage.zipfield, zip);
    //I.wait(5);
    I.waitForElement(loginPage.done);
    I.tap(loginPage.done);
    I.waitForElement(loginPage.dobfield);
    I.tap(loginPage.dobfield);
    I.waitForElement(loginPage.cancel);
    I.tap(loginPage.cancel);
    I.waitForElement(loginPage.done);
    I.tap(loginPage.done);
    I.downScrollerforios();
    I.waitForElement(loginPage.termscheckbox);
    I.tap(loginPage.termscheckbox);
    I.tap(loginPage.createmyaccount);
    
    I.waitForElementLeaveDom(settings.config.helpers.Appium.platform, commonObjects.progressBar);
  },

 // seen after registering a new user
  verifyHomeScreenCongrats() {
    I.waitForElement(loginPage.congrats);
    I.seeElement(loginPage.congrats);
  },

  // Using a guest account 
  guestLogin() {
    I.waitForElement(loginPage.newAccount);
    I.tap(loginPage.guestButton);
  },
};
