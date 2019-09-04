"use strict";

let I;
let imports;
let profilePage;
let commonObjects;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    profilePage = eval(imports.profilePage);
    commonObjects = eval(imports.commonObjects);

    
  },

 tapProfile(){
  I.waitForElement(profilePage.profile);
  I.tap(profilePage.profile);
 },

 tapFindPizzaHut() {
  I.waitForElement(profilePage.findaPizzaHut)
  I.tap(profilePage.findaPizzaHut);
 }


};
