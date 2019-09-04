"use strict";

module.exports = {

  // Login Page
  email: {
    xpath: ".//*[contains(@class, 'EditText')]",
    ios: '~emailInput'
  },
  
  password: {
    xpath: "(.//*[@class='android.widget.EditText'])[2]",
   ios: '~passwordInput'
  },
  loginButton: {
    android: "SIGN IN",
    ios: '~Sign In'
  },
  guestButton: {
    xpath: ".//*[@text='Continue as guest']",
    ios: "~Continue as Guest",
  },
  signIn: {
    ios: "~SIGN IN",
  },
 // New account form
  newAccount: {
    android: "CREATE HUT REWARDS ACCOUNT",
    ios: '~Create an Account',
  },
  firstnamefield: {
    xpath: ".//*[@text='First']",
    ios: "~First",
  },
    lastnamefield: {
    xpath: ".//*[@text='Last']",
    ios: '~Last',
  },
    emailfield: {
    xpath: ".//*[@text='you@example.com']",
    ios: '~you@example.com',
  },
    passwordfield: {
    xpath: ".//*[@text='Create password']",
    ios: '~Create password',
  }, 
    phonefield: {
    xpath: ".//*[@text='(xxx) xxx-xxxx']",
    ios: '(//XCUIElementTypeOther[@name="(xxx) xxx-xxxx"])[1]',
  },
    dobfield: {
    xpath: ".//*[@text='xx/xx/xxxx']",
    ios: '~Date Input',
  },
    zipfield: {
    xpath: ".//*[@text='xxxxx']",
    ios: '~xxxxx',
  },
    extfield: {
    xpath: ".//*[@text='ext.']",
    ios: '~ext.',
  },
     termscheckbox: {
    xpath: "//android.widget.TextView[starts-with(@text, 'I accept the Terms of Use')]",
    ios: "~Toggle Age",
  },
    createmyaccount: {
    xpath: ".//*[@text='CREATE MY ACCOUNT']",
    ios: '~Create My Account',
  }, 
    yessendmeoffers: {
      xpath: ".//*[@text='YES! Send me offers']",
      ios: 'XCUIElementTypeOther',
  },
    congrats: {
      xpath: ".//*[@text='CONGRATS!']",
      ios: '~CONGRATS!',
  },
  done: {
  ios: "~Done",  
  },
  confirm: 
  {
ios: ".//*[@name='Confirm']",
  },
  cancel: 
  {
    ios: ".//*[@name='Cancel']",
//ios: "~Cancel",
  },
  
  // Forgot password

  forgotpass: {
    xpath: ".//*[contains(@text, 'Forgot')]",
    ios: "~Forgot Password",
   },
  forgotpassEmail: {
    xpath: ".//*[contains(@class, 'EditText')]",
    ios: "~forgotEmailInput",
  },
  submitemail: {
    xpath: ".//*[@text='SUBMIT']",
    ios: "~Submit",
  },
  emailinstruction:
  {
    xpath: ".//*[@text='Please check your email for password reset instructions.']",
  },
  checkemailok:
  {
    xpath: ".//*[@text='OK']", 
  },

  //Profile 
 
  profile: 
  {
    xpath: ".//*[@text='REWARDS']", 
    ios: "~Profile",
  },

  editProfile: 
  {
    ios: "~Edit Profile",
  },
  changePassword: 
  {
    ios: "~Change Password",
  },
  oldPassword: 
  {
    ios: ".//*[@name='Password']/XCUIElementTypeSecureTextField",
  },
  newPassword:
  {
    ios: ".//*[@name='New password']/XCUIElementTypeSecureTextField",
  },
  saveProfile:
  {
    ios: "~Save Profile",
  },

};
