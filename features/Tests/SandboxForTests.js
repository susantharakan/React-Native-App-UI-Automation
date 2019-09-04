Feature("Sandbox Only!");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let footerMenuAction;
let foodMenuAction;
let pizzaMenuAction;
let detailAction;
let zip;
const fsPath = require('path');
const settings = require(fsPath.join(__dirname, '..', '..', 'codecept.conf.js'));


Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  zip = envAuth.zip;
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  foodMenuAction = eval(imports.foodMenuActions);
  foodMenuAction._init(commonActions);
  pizzaMenuAction = eval(imports.pizzaMenuActions);
  pizzaMenuAction._init(commonActions);
  detailAction = eval(imports.detailActions);
  detailAction._init(commonActions);
});

  
Scenario("Localization conditional test @localizetest", async function(I) {
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Conditionally find next steps for store connection
  //pause();
});

Scenario("swipe testing @swipetest", function(I) {
    I.waitForElement({"xpath": ".//*[@text='CREATE HUT REWARDS ACCOUNT']"});
    I.tap({"xpath": ".//*[@text='CREATE HUT REWARDS ACCOUNT']"});
    I.waitForElement({"xpath": ".//*[contains (@class, 'ScrollView')]"});
    // I.swipe({"xpath":".//*[@text='Zip code']"}, 0, 2200, 1000);
    // I.scrollScreen({"xpath":".//*[@text='Zip code']"});
  
    // no error but no function
    // I.performSwipe(100,200);
  
    // Scroll to the end and element [object Object] was not found
    //  I.swipeTo(
    //  {"xpath":".//*[@text='CREATE MY ACCOUNT']"}, // searchable element
    //  {"xpath":".//*[contains (@class, 'ScrollView')]"}, // scroll element
    //   "down", // direction
    //    30,
    //    200,
    //    500);
    // Can't call getLocation on element with selector "android=new UiSelector().text(".//*[contains (@class, 'ScrollView')]")" because element wasn't found
    let locator = {"xpath": ".//*[@text='Zip code']"};
    I.wait(2);
    I.swipeUp(locator);
  });

Scenario("Intentional failure @failtest", function(I) {
 loginAction.PHlogin(envAuth.email, envAuth.password);
 footerMenuAction.tapMenu();
 // Localize via carryout
 localizationAction.searchCarryout(zip);
 // Go to pizza menu
  foodMenuAction.selectPizza();
  // Select cheese pizza button
  pizzaMenuAction.selectCheese();
  // Review details and add to order
  detailAction.addToOrder();
  I.see("njvanfvldsnvklsdnvklsd")
});

Scenario("Clear cart via API @clearcartapi", function(I) {
  I.clearCartAPI();
});
