let commonActions = require("./pageactions/CommonActions.js");
let envAuth = "data/envs/envAuth.yaml";
envAuth = commonActions.readYaml(envAuth);
const fsPath = require('path');

exports.config = {
  "tests": "features/*/*Tests.js",
  "output": "./output",
  "helpers": {
    //BrowserStack Config
    "Appium": {
      app: "bs://38de6d54ee97826027ef58919528de68c34b9474", //stage 5.1.1 "bs://38de6d54ee97826027ef58919528de68c34b9474", //prod 5.1.1 "bs://c9c13bd3ba5795c906dd35629317c7389b44e253", 
      platformName: "android",
      platform: "android",
      host: "hub-cloud.browserstack.com",
      waitForTimeout: 30000,
      port: 4444,
      user: envAuth.browserstackuser,
      key: envAuth.browserstackkey,
      device: "Samsung Galaxy S9 Plus",
      desiredCapabilities: {
        "browserstack.debug": "true",
        "browserstack.networkLogs": "true",
        "newCommandTimeout": 300,
        "deviceName": "Samsung Galaxy S9 Plus",
        "platform": "Android",
        "automationName": "UIAutomator2",
        "browserstack.appium_version": "1.12.1",
        "browserstack.video": "true",
        "browserstack.local": "true",
        "wdaStartupRetries": "4",
        "iosInstallPause":"8000",
        "wdaStartupRetryInterval": "20000",
        "systemPort": 8201,
      },
    },
    // Browserstack config for ios
    // "Appium": {
    //   app: "bs://0048a32ef3e3c3ddc22d4d05f67385f4f61bbb8a", //"bs://5d84c872e5cd7e05b2028d372343d850ea9695d2",
    //   platformName: "iOS",
    //   platform: "iOS",
    //   host: "hub-cloud.browserstack.com",
    //   waitForTimeout: 30000,
    //   port: 4444,
    //   user: envAuth.browserstackuser,
    //   key: envAuth.browserstackkey,
    //   device: "iPhone 8 Plus",
    //   desiredCapabilities: {
    //     "browserstack.debug": "true",
    //     "browserstack.networkLogs": "true",
    //     "newCommandTimeout": 300,
    //     "device": "iPhone 8 Plus",
    //     "platform": "iOS",
    //     "automationName": "XCUITest",
    //     "browserstack.appium_version": "1.12.1",
    //     "browserstack.video": "true",
    //     "browserstack.local": "true",
    //     "wdaStartupRetries": "4",
    //     "iosInstallPause":"8000",
    //     "wdaStartupRetryInterval": "20000",
    //     "os_version": "11",
    //     "autoAcceptAlerts": "true",
    //     "autoGrantPermissions": "true",
    //   },
    // },
    // Local device config
    //   "Appium": {
    //    "fullPageScreenshots": true,
    //    "disableScreenshots": false,
    //    "uniqueScreenshotNames": true,
    //   "app": fsPath.resolve(__dirname, 'PHappium/data/envs/app-release.apk'));
    //   "platform": "Android",
    //   "waitForTimeout": 30000,
    //   "desiredCapabilities": {
    //     //appActivity: "MainActivity",
    //     newCommandTimeout: 300,
    //     deviceName: "Nexus 5X",
    //     platform: "Android",
    //     platformVersion: "8.1.0",
    //     automationName: "uiautomator2",
    //     deviceName: "cv1",
    //     platform: "Android",
    //     platformVersion: "8.1.0",
    //   },
    // },
    //Local device config
    //   "Appium": {
    //   //stage
    //   app: "/Users/susantharakan/Documents/App/app-uatNoPinning.apk",
    //   platform: "Android",
    //   waitForTimeout : 30000,
    //   desiredCapabilities: {
    //     appActivity: "MainActivity",
    //     newCommandTimeout: 0,
    //     //deviceName: "Nexus 5X",
    //     platform: "Android",
    //     platformVersion: "8.1.0",
    //     automationName: "uiautomator2",
    //     deviceName: "cv1",
    //     platformName: "Android",
    //     //platformVersion: "8.1.0",
    //   },
    // },
    // "Appium": {
    //   //stage
    //   app: "/Users/susantharakan/Documents/App/pizzahut.ipa",
    //   platform: "iOS",
    //   waitForTimeout : 30000,
    //   // port: 4444,
    //   // user: envAuth.browserstackuser,
    //   // key: envAuth.browserstackkey,
    //   // device:"Samsung Galaxy S9 Plus",
    //   desiredCapabilities: {
    //     // appActivity: "MainActivity",
    //     // newCommandTimeout: 0,
    //     //deviceName: "Nexus 5X",
    //     platform: "iOS",
    //     platformVersion: "12.2",
    //     automationName: "XCUITest",
    //     deviceName: "Susan Thomas Iphone (12.2)",
    //     udid: "4d114a3efb98e1449c3adac076197bd149b86cff",
    //     xcodeOrgId: "84498CYU58",
    //     xcodeSigningId: "iPhone Developer",
    //     useNewWDA: "true",
    //     waitForQuiescence: "false",
    //     bundleId: "supreme.uat",
    //     wdaEventloopIdleDelay: "5",
    //     autoAcceptAlerts: "true",
    //     autoGrantPermissions: "true",
    //     locationServicesAuthorized: "false",
    //   },
    // },
    //Local device config
    //   "Appium": {
    //    "fullPageScreenshots": true,
    //    "disableScreenshots": false,
    //    "uniqueScreenshotNames": true,  
    //   //prod  
    //   //app: "/Users/jasonlegako/Documents/GitHub/React-App-Automation/PHappium/data/envs/app-release.apk",  
    //   //stage
    //   app: "/Users/susantharakan/Documents/App/app-uatNoPinning-3.apk",
    //   platform: "Android",
    //   waitForTimeout : 30000,
    //   desiredCapabilities: {
    //     //appActivity: "MainActivity",
    //     newCommandTimeout: 0,
    //     deviceName: "cv1",
    //     platform: "Android",
    //     platformVersion: "8.1.0",
    //     automationName: "uiautomator2",
    //     deviceName: "cv1",
    //     //platform: "Android",
    //     //platformVersion: "8.1.0",
    //   },
    // },
    "AppiumHelper": {
      require: "./helpers/appium_helper.js",
    },
    "APIHelper": {
      require: "./helpers/APIHelper.js",
    }
  },
  "include": {
    "commonActions": "./pageactions/CommonActions.js",
    "commonObjects": "./pageobjects/CommonObjects.js",
  },
  "bootstrap": null,
  "mocha": {
    "reporterOptions": {
      "reportDir": "./output",
      "reportFilename": "UI.html",
      "overwrite": false,
      "timestamp": true,
      "charts": true,
    },
  },
  "multiple": {
    "parallel": {
        // Splits test files into 10 chunks via array. 
        // This function is sent to chunk.js, if installed globally the path on a mac may look like: 
        // usr⁩/⁨local⁩/⁨lib⁩/⁨node_modules⁩/⁨codeceptjs-protractor⁩/⁨node_modules⁩/codeceptjs⁩/⁨lib⁩/⁨command⁩/⁨run-multiple⁩
      "chunks": 10
      
      // function(files){ 
      //   return[
      //   [ files[0] ],
      //   [ files[1] ],
      //   [ files[2] ],
      //   [ files[3] ],
      //   [ files[4] ],
      //   [ files[5] ],
      //   [ files[6] ],
      //   [ files[7] ],
      //   [ files[8] ],
      //   [ files[9] ],
      //   [ files[10] ]
      //   ]},
      },
    },
  "name": "Pizza Hut Native App UI Automation",
};
