"use strict";
const Helper = codecept_helper;
const I = actor();
const fs = require("fs");
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', 'codecept.conf.js'));
const commonActions = require(fsPath.join(__dirname, '..', '/pageactions/CommonActions.js'));
let driver;
let homeObjects;
let imports;
imports = commonActions.importPages();
homeObjects = eval(imports.homePage);

class AppiumHelper extends Helper {

   /**
   * Checks the specified locator for existance, if it exists, return true
   * If it is not found log a warning and return false.
   */

  async checkElement(locator) 
  {
    let driver = this.helpers["Appium"].browser;
    let elementResult = await driver.$$(locator);
    if (elementResult === undefined || elementResult.length == 0) 
    {
      //console.log("Locator: " + locator + " Not Found");
      return false;
    } 
    else if (elementResult[0].elementId) 
    {
      //console.log("Locator: " + locator + " Found");
      return true;
    }
  }

  /**
   * Function to switch the context of the app
   * Conext name to switch to NATIVE WEB_VIEW
   */
  switchToContext(context) {
    driver = this.helpers["Appium"].browser;
    return driver._switchToContext(context);
  }
  /**
   * Accept Alert pop up
   *
   */
  // accept alert only for ios
  
  async getPageSource() {
    driver = this.helpers["Appium"].browser;
    console.log(await driver.getPageSource());
    return await driver.getPageSource();
  }
  
  /**
   * Checks the specified locator for existance, if it exists, attempt to click it
   * @param locator accepts xpath elements
   */
  async selectAlerts(platform) 
  {
    if(platform === "iOS")
    {
      return await this.acceptalert(locator);
    }
    // else if (platform === 'android')
    // {
    //   return await this.checkStoreNumberOrSearchAndroid();
    // }
    else {
        return console.log("Select alerts was passed an Unknown Platform!");
    }
  }
  // accpet alert pop up
  async acceptalert(locator) 
  {
    let driver = this.helpers["Appium"].browser;
    let elementResult = await driver.$$(locator);
    if (elementResult === undefined || elementResult.length == 0)
    {
      return console.log("Locator: " + locator + " Not Found");
      return false;
    }
    else if (elementResult[0].elementId)
    {
      console.log("Locator: " + locator + " Found");
      return elementResult[0].click();
    }
  }
  async appiumClick(locator)
  {
    let driver = this.helpers["Appium"].browser;
    let elementResult = await driver.$$(locator);
    if (elementResult === undefined || elementResult.length == 0)
    {
      return console.log("Locator: " + locator + " Not Found");
    }
    else if (elementResult[0].elementId)
    {
      return elementResult[0].click();
    }
  }

  /**
   * Returns the source DOM / XML tree of the current page of the app.
   *
   */
  async getPageSource() {
    driver = this.helpers["Appium"].browser;
    console.log(await driver.getPageSource());
    return await driver.getPageSource();
  }
  /**
   * Uses WDIO touch actions to scroll from an x,y Starting cordinate to an x,y ending cordinate.
   * @param xstart horizontal start position based on display pixels.
   * @param ystart vertical start position based on display pixels.
   * @param xend horizontal end position based on display pixels.
   * @param yend vertical start position based on display pixels.
   * @param millsec a wait in between press and moveTo functions that determines the speed of the swipe
   */
  async appiumScroll(xstart, ystart, xend, yend, millsec) {
    driver = this.helpers["Appium"].browser;
    driver.touchAction([
      { action: 'press', x: xstart, y: ystart },
      { action: 'wait', ms: millsec},
      { action: 'moveTo', x: xend, y: yend },
      'release']);
  }

  /**
   * Checks the current status of stores after searching for a store in localization,
   * ensuring the app either continues, places a preorder, warns about call store text,
   * or continues without any errors if store numbers are used instead of an address.
   * 
   * 
   * @Param platform to determine ios android passed from codecept.conf.js
   */
  async selectStore(platform) 
  {
    if(platform === "iOS")
    {
      return await this.checkStoreNumberOrSearchiOS();
    }
    else if (platform === 'android')
    {
      return await this.checkStoreNumberOrSearchAndroid();
    }
    else {
      console.log("Select Store Was passed an Unknown Platform!");
      return 
    }
  }

  async checkStoreNumberOrSearchAndroid()
  {
    let localized;
    localized = await this.waitForMenuOrResultsAndroid();
    if(localized)
    {
     return true;
    }
    else
    {
     return await this.waitForContPreOrCallAndroid();
    }
  }

  async checkStoreNumberOrSearchiOS()
  {
    let localized;
    localized = await this.waitForMenuOrDealsorResultsiOS();
    if(localized)
    {
     return true;
    }
    else
    {
     return await this.waitForContPreOrCalliOS();
    }
  }
  async waitForMenuOrDealsorResultsiOS() {
    let menu = false;
    let change = false;
    let deals = false;
    let search = false;
    let points = false;
    let cont = false;
    for (let x = 0; (menu === false) && (change === false) && (points === false) && (search === false) && (deals === false) && (x < 30); x++)
        {
          menu = await this.checkElement("(.//*[@name='MENU'])[7]");
          change = await this.checkElement("~Change");
          deals = await this.checkElement("(.//*[@name='DEALS'])[7]");
          points = await this.checkElement("~Points");
          search = await this.checkElement("~Search");
          cont = await this.checkElement("(.//*[@name='Continue'])[1]");
        }
        if((menu === true) || (deals === true))
        {
        console.log("I see Menu or Deals");
         return true;
        }
        else if(points === true)
        {
         console.log("I see Home Screen");
         //await this.appiumClick(homeObjects.redeemButton.ios);
         return true;

        }
        else if((change === true) || (cont === true))
        {
          console.log("Continue found, click it");
          //return await this.appiumClick("(.//*[@name='Continue'])[1]");
          return false;
          
        }
        else if ((change === true) || (cont === false))
        {
          console.log("continue not visible, time to scroll to the results");
          await this.appiumScroll(100, 600, 100, 100, 400);
          return false;
        }
        else {
          console.log("Both Menu Deal and Search Results (change/search) were not found");
        }
  }
 
  // If 'change' appears scroll down, if 'MENU' or 'DEALS' appears return resolved and continue
  async waitForMenuOrResultsAndroid() {
    let menu = false;
    let change = false;
    let points = false;
    let deals = false;
    let search = false;

        for (let x = 0; (menu === false) && (change === false) && (points === false) && (search === false) && (deals === false) && (x < 30); x++)
        {
          menu = await this.checkElement(".//*[@text='Wings']");
          deals = await this.checkElement(".//*[@text='GET STARTED']");
          change = await this.checkElement(".//*[@text='CHANGE']");
          points = await this.checkElement(".//*[@text='POINTS']");
          search = await this.checkElement(".//*[@text='SEARCH']");
          
        }
        if((menu === true) || (deals === true))
        {
         console.log("I see Menu or Deals");
         return true;
        }
        else if(points === true)
        {
         console.log("I see Home Screen");
         await this.appiumClick(homeObjects.redeemButton.xpath);
         return true;

        }
        else if((change === true) || (search === true))
        {
          console.log("Search/Change found, time to scroll to the results");
          await this.appiumScroll(100, 600, 100, 100, 400);
          return false;
        }
        else {
          console.log("Both Menu Deal and Search Results (change/search) were not found");
        }
  }

   /**
   * waits until Continue, Preorder, or Call Store
   */
  async waitForContPreOrCallAndroid() 
  {
  let cont = false;
  let pre = false;
  let call = false;
    for (let i = 0; (cont === false) && (pre === false) && (call === false) && (i < 30); i++) 
        {
          cont = await this.checkElement(".//*[@text='CONTINUE']");
          pre = await this.checkElement(".//*[@text='PREORDER']");
          call = await this.checkElement(".//*[@text='CALL STORE']");
        }
     if(cont === true)
     {
      console.log("Continue Appeared Attempted Click");
      return await this.appiumClick(".//*[@text='CONTINUE']");
     }
     else if(pre === true)
     {
       console.log("Preorder Appeared Attempted Click");
       return await this.appiumClick(".//*[@text='PREORDER']"); 
     }
     else if(call === true)
     {
       return console.log("Warning store not available! Call Store appearing!")
     }
  }
  async waitForContPreOrCalliOS() 
  {
  let cont = false;
  let pre = false;
  let call = false;
    for (let i = 0; (cont === false) && (pre === false) && (call === false) && (i < 30); i++) 
        {
          cont = await this.checkElement("(.//*[@name='Continue'])[1]");
          pre = await this.checkElement("(.//*[@name='PREORDER'])[1]");
          call = await this.checkElement(".//*[@name='CALL STORE']");
        }
     if(cont === true)
     {
      console.log("Continue Appeared Attempted Click");
      return await this.appiumClick("(.//*[@name='Continue'])[1]");
     }
     else if(pre === true)
     {
       console.log("Preorder Appeared Attempted Click");
       return await this.appiumClick("(.//*[@name='PREORDER'])[1]");
     }
     else if(call === true)
     {
       return console.log("Warning store not available! Call Store appearing!")
     }
  }


  /**
   * Finds a state abbrevation in the listview for delivery
   * Clicks it when it is found
   * 
   * @Param state or territory abbrevation that appears in the list
   */
  async stateScroller(state){
    const I = actor();
    let loopcheck = 0;
    let checker;
    while(loopcheck < 54){
      checker = await this.checkElement(".//*[@text='" + state + "']");
      if(checker === false){
        loopcheck++;
        await this.appiumScroll(900, 2000, 900, 1500, 400);
        if(loopcheck === 53){
          return console.log("All states and terrorties have been scrolled through and " + state + " was not found!");
        }
      }
      else{
        loopcheck = 1;
        return await this.appiumClick(".//*[@text='" + state + "']");
      }
    }
  }

  //for reading files with store info
  async accessfile(compare){
    let datafile;
    fs.readFile("storefile/storedata.csv", function(err, data) {
      if (err) {
        console.log("File read system unhandled exception!");
        return console.log(err);
      }
      datafile = data.toString();
      if (datafile.includes(compare)){
        return console.log("Successfully compared");
      }
    });
  }
 
   /**
   * Waits for an element to leave the dom before continuing.
   * @param locator accepts an xpath object
   */
  async waitForElementLeaveDom(platform,locator) 
  {
    if(platform === "iOS")
    {
      return await this.waitForElementLeaveDomiOS(locator);
    }
    else if (platform === 'android')
    {
      return await this.waitForElementLeaveDomAndroid(locator);
    }
    else {
      console.log("Wait For Element was passed an Unknown Platform!");
      return 
    }
  }

  async waitForElementLeaveDomAndroid(locator)
  {
    let i;
    let checkResults = await this.checkElement(locator.xpath);
    // Check a few more times for the progress bar to appear in case of a laggy phone, if no progress bar appears, 
    // then warn and attempt to continue.
    if(checkResults === false) 
    {
      for (i = 0; (i < 4) && (checkResults === false); i++) 
      {
       checkResults = await this.checkElement(locator.xpath);
      }
      if(i === 4 && checkResults === false)
      {
        return console.log("No Progress bar appeared");
      }
    }
    // If the progress bar appeared, wait for it to leave dom then continue. If it does not 
    // leave for ~30 seconds log a warning and attempt to continue anyway.
    if(checkResults === true)
    {
      for(let x = 0; (checkResults === true) && (x < 60) ; x++)
      {
        checkResults = await this.checkElement(locator.xpath);
      }
      if(checkResults === false)
      {
        return console.log("The element " + locator.xpath + " has left the DOM!");
      }
      else
      {
        return console.log("The element: " + locator.xpath + " has not left the DOM for over 30 seconds!")
      } 
    }
  }

  async waitForElementLeaveDomiOS(locator)
  {
    let i;
    let checkResults = await this.checkElement(locator.ios);
    // Check a few more times for the progress bar to appear in case of a laggy phone, if no progress bar appears, 
    // then warn and attempt to continue.
    if(checkResults === false) 
    {
      for (i = 0; (i < 4) && (checkResults === false); i++) 
      {
       checkResults = await this.checkElement(locator.ios);
      }
      if(i === 4 && checkResults === false)
      {
        return console.log("No Progress bar appeared");
      }
    }
    // If the progress bar appeared, wait for it to leave dom then continue. If it does not 
    // leave for ~30 seconds log a warning and attempt to continue anyway.
    if(checkResults === true)
    {
      for(let x = 0; (checkResults === true) && (x < 60) ; x++)
      {
        checkResults = await this.checkElement(locator.ios);
        console.log(checkResults);
      }
      if(checkResults === false)
      {
        return console.log("The element " + locator.ios + " has left the DOM!");
      }
      else
      {
        return console.log("The element: " + locator.ios + " has not left the DOM for over 30 seconds!")
      } 
    }
  }

  /**
   * Checks for element, then scrolls down.  Repeats till finds element
   * 
   */
  async downScroller(locator){
    let driver = this.helpers["Appium"].browser;
    let loopcheck = 0;
    let checker;
    let screensize;
    let height;
    let height2;
    let width;
    screensize = await driver.getWindowSize();
    //console.log(screensize);
    height = screensize.height - 76;
    width = screensize.width /2;
    height2 = height  / 2;
    //console.log(height);
    //console.log(width);
    //console.log(height2);
    while(loopcheck < 20){
      checker = await this.checkElement(locator.xpath);
      //console.log(checker);
      if(checker === false){
        loopcheck++;
        await this.appiumScroll(width, height, width, height2, 400);
      }
      else{
        return
      }  
    }
  }

  /**
   * Checks for element, then scrolls up.  Repeats till finds element
   * 
   */
  async upScroller(locator){
    let driver = this.helpers["Appium"].browser;
    let loopcheck = 0;
    let checker;
    let screensize;
    let height;
    let height2;
    let width;
    screensize = await driver.getWindowSize();
    //console.log(screensize);
    height = screensize.height - 1;
    width = screensize.width /2;
    height2 = height  / 2;
    while(loopcheck < 20){
      checker = await this.checkElement(locator.xpath);
      //console.log(checker);
      if(checker === false){
        loopcheck++;
        await this.appiumScroll(width, height2, width, height, 500);
      }
      else{
        return
      }
    }
  }
  /**
   * To handle 'Go to checkout' modal for ios
   * 
   */
  async gotocheckoutforios(){
    driver = this.helpers["Appium"].browser;
    //let popup = await this.checkElement("~Dismiss");
    let popup = await driver.$("~Dismiss");
    let size = await popup.getSize();
    let location= await popup.getLocation();
    // console.log(location);
    // console.log(size);
    let xleft= location.x;
    let yleft= location.y;
    let heightval = size.height;
    let widthvalue= size.width;
    let xcenter= (widthvalue/2);
    let x_OK = xcenter + 50;
    let y_OK = (heightval * 0.6);
    // console.log(x_OK);
    // console.log(y_OK);
    driver = this.helpers["Appium"].browser;
    driver.touchAction([
      { action: 'press', x: x_OK, y: y_OK },
      'release']);
    }

    // Accept Booze Age Dialog for iOS
    async acceptboozeage(){
      driver = this.helpers["Appium"].browser;
      //let popup = await this.checkElement("~Dismiss");
      let popup = await driver.$("~Dismiss");
      let size = await popup.getSize();
      let location= await popup.getLocation();
      console.log(location);
      console.log(size);
      let xleft= location.x;
      let yleft= location.y;
      let heightval = size.height;
      let widthvalue= size.width;
      let xcenter= (widthvalue/2);
      let x_OK = xcenter - 93;
      let y_OK = (heightval * 0.8);
      console.log(x_OK);
      console.log(y_OK);
      driver = this.helpers["Appium"].browser;
      driver.touchAction([
        { action: 'tap', x: x_OK, y: y_OK },
        'release']);
      }
  
/**
   * To handle 'Go to checkout' modal for ios
   * 
   */
  async backtomenuforios(){
    driver = this.helpers["Appium"].browser;
    //let popup = await this.checkElement("~Dismiss");
    let popup = await driver.$("~Dismiss");
    let size = await popup.getSize();
    let location= await popup.getLocation();
    console.log(location);
    console.log(size);
    let xleft= location.x;
    let yleft= location.y;
    let heightval = size.height;
    let widthvalue= size.width;
    let xcenter= (widthvalue/2);
    let x_OK = xcenter - 50;
    let y_OK = (heightval * 0.6);
    console.log(x_OK);
    console.log(y_OK);
    driver = this.helpers["Appium"].browser;
    driver.touchAction([
      { action: 'press', x: x_OK, y: y_OK },
      'release']);
    }
// click pzone
async clickpzone(){
  driver = this.helpers["Appium"].browser;
  driver.touchAction([
    { action: 'press', x: 157, y: 305 },
    'release']);
  }
  /**
   * Checks for dialog related to fav or reorder
   * 
   */
  async ifThereClick(locator) {
    let checker;
    checker = await this.checkElement(locator.xpath);
    if(checker === true){
      await this.appiumClick(locator.xpath);
      return
    }
    else{
      return
    }
  }

  //  Scrolling up for ios
  async downScrollerforios(){
    let driver = this.helpers["Appium"].browser;
    //await this.appiumScroll(100, 600, 100, 300, 500);
    let screensize = await driver.getWindowSize();
    let height = screensize.height;
    let width = screensize.width;
    // console.log(height);
    // console.log(width);
    let startX= width * 0.1;
    let startY= height * 0.8;
    let endY= height* 0.2;
    // console.log(startX);
    // console.log(startY);
    // console.log(endY);
    driver.touchAction([
      { action: 'press', x: startX, y: startY },
      { action: 'wait', ms: 500},
      { action: 'moveTo', x: startX, y: endY },
      'release']);
  }
 // Scrolling down for ios
  async upScrollerforios(){
    let driver = this.helpers["Appium"].browser;
    let screensize = await driver.getWindowSize();
    let height = screensize.height;
    let width = screensize.width;
    console.log(height);
    console.log(width);
    let startX= width * 0.1;
    let startY= height * 0.2;
    let endY= height* 0.8;
    console.log(startX);
    console.log(startY);
    console.log(endY);
    driver.touchAction([
      { action: 'press', x: startX, y: startY },
      { action: 'wait', ms: 500},
      { action: 'moveTo', x: startX, y: startY },
      'release']);
  }

  async waitForPopupToLeaveDom(locator)
  {
    let i;
    let checkResults = await this.checkElement(locator.ios);
    console.log(checkResults);

    // Check a few more times for the progress bar to appear in case of a laggy phone, if no progress bar appears, 
    // then warn and attempt to continue.
    if(checkResults === false) 
    {
      for (i = 0; (i < 4) && (checkResults === false); i++) 
      {
       checkResults = await this.checkElement(locator.ios);
      }
      if(i === 4 && checkResults === false)
      {
        return console.log("No Popup appeared");
      }
    }
    // If the progress bar appeared, wait for it to leave dom then continue. If it does not 
    // leave for ~30 seconds log a warning and attempt to continue anyway.
    if(checkResults === true)
    {
      for(let x = 0; (checkResults === true) && (x < 60) ; x++)
      {
        checkResults = await this.checkElement(locator.ios);
        console.log(checkResults);
      }
      if(checkResults === false)
      {
        return console.log("The popup " + locator.ios + " has left the DOM!");
      }
      else
      {
        return console.log("The popup: " + locator.ios + " has not left the DOM for over 30 seconds!")
      } 
    }
  }

  async forgotpasswordforios(){
    driver = this.helpers["Appium"].browser;
    //let popup = await this.checkElement("~Dismiss");
    let popup = await driver.$("~Dismiss");
    let size = await popup.getSize();
    let location= await popup.getLocation();
    console.log(location);
    console.log(size);
    let xleft= location.x;
    let yleft= location.y;
    let heightval = size.height;
    let widthvalue= size.width;
    let xcenter= (widthvalue/2);
    let x_OK = xcenter;
    let y_OK = (heightval * 0.6);
    console.log(x_OK);
    console.log(y_OK);
    driver = this.helpers["Appium"].browser;
    driver.touchAction([
      { action: 'press', x: x_OK, y: y_OK },
      'release']);
    
  }


  /**
   * Checks for items to delete from cart/checkout
   * 
   */
  async delete(locator) {
    const I = actor();
    let checker;

    for(let x = 0; (x < 40); x++ ) {
      checker = await this.checkElement(locator.xpath);
      if(checker === true){
        await this.appiumClick(locator.xpath);
        await this.appiumClick(".//*[@text='YES']");
      }
      else{
        return
      }
    }
  }


}
module.exports = AppiumHelper;

