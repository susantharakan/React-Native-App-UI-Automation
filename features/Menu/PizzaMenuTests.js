Feature("Pizza Menu Items Pricing and Calories");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let ccData;
let ccFile = "data/testdata/creditcards.yaml";
let imports;
let loginAction;
let localizationAction;
let foodMenuAction;
let pizzaMenuAction;
let detailAction;
let extrasAction;
let checkoutAction;
let homeAction;
let footerMenuAction;
let zip;
let checker;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  ccData = commonActions.readYaml(ccFile);
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
  foodMenuAction = eval(imports.foodMenuActions);
  foodMenuAction._init(commonActions);
  pizzaMenuAction = eval(imports.pizzaMenuActions);
  pizzaMenuAction._init(commonActions);
  detailAction = eval(imports.detailActions);
  detailAction._init(commonActions);
  extrasAction = eval(imports.extrasActions);
  extrasAction._init(commonActions);
  checkoutAction = eval(imports.checkoutActions);
  checkoutAction._init(commonActions);
  homeAction = eval(imports.homeActions);
  homeAction._init(commonActions);
  zip = envAuth.zip;
});

Scenario("Cheese Pizza Transaction Cash @regression @sanity @transactions @carryoutcheese @validTransactionPizza", async function(I) {
  // Authenticate
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
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

Scenario("Cheese Pizza Add Breadsticks Transaction @regression @transactions @extraitem", async function(I) {
  // Authenticate
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
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  I.runOnAndroid(() => {
    extrasAction.addItem("Breadsticks");
});
  //Add extra item for ios
I.runOnIOS(() => {
    extrasAction.addExtraItemforiOS();
 });
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCreditDebit();
  I.runOnAndroid(() => {
    checkoutAction.fillOutNewCCFields(ccData.NameOnCard, ccData.Visa, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
  });
I.runOnIOS(() => {
  checkoutAction.fillOutNewCCFieldsiOS(ccData.NameOnCard, ccData.Visa, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
});
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.seeReviewPopup();
});


Scenario("Pepperoni Pizza Transaction VISA @regression @transactions @pepperoni @visa @validTransactionPizza", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to pizza menu
  foodMenuAction.selectPizza();
  // Select cheese pizza button
  pizzaMenuAction.selectPepperoni();
  // Review details and add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCreditDebit();
  I.runOnAndroid(() => {
    checkoutAction.fillOutNewCCFields(ccData.NameOnCard, ccData.Visa, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
  });
I.runOnIOS(() => {
  checkoutAction.fillOutNewCCFieldsiOS(ccData.NameOnCard, ccData.Visa, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
});
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

Scenario("Meat Lovers Pizza Transaction Mastercard @regression @transactions @mastercard @validTransactionPizza", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to pizza menu
  foodMenuAction.selectPizza();
  // Select cheese pizza button
  pizzaMenuAction.selectMeat();
  // Review details and add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCreditDebit();
  I.runOnAndroid(() => {
    checkoutAction.fillOutNewCCFields(ccData.NameOnCard, ccData.Mastercard, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
  });
I.runOnIOS(() => {
  checkoutAction.fillOutNewCCFieldsiOS(ccData.NameOnCard, ccData.Mastercard, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
});
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

Scenario("Supreme Pizza Transaction AMEX @regression @transactions @amex @validTransactionPizza", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to pizza menu
  foodMenuAction.selectPizza();
  // Select cheese pizza button
  pizzaMenuAction.selectSupreme();
  // Review details and add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCreditDebit();
  I.runOnAndroid(() => {
    checkoutAction.fillOutNewCCFields(ccData.NameOnCard, ccData.AMEX, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
  });
I.runOnIOS(() => {
  checkoutAction.fillOutNewCCFieldsiOS(ccData.NameOnCard, ccData.AMEX, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
});
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

Scenario("Backyard BBQ Chicken Pizza Transaction Discover @regression @transactions @discover @validTransactionPizza", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to pizza menu
  foodMenuAction.selectPizza();
  // Select cheese pizza button
  pizzaMenuAction.selectBBQchick();
  // Review details and add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCreditDebit();
  I.runOnAndroid(() => {
    checkoutAction.fillOutNewCCFields(ccData.NameOnCard, ccData.Discover, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
  });
I.runOnIOS(() => {
  checkoutAction.fillOutNewCCFieldsiOS(ccData.NameOnCard, ccData.Discover, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
});
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

Scenario("Edit Pizza Order @editOrder", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // //
  // Go to pizza menu
  foodMenuAction.selectPizza();
  // Select cheese pizza button
  pizzaMenuAction.selectCheese();
  // Review details and add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  I.swipe({"xpath": ".//*[@text='Email address']"}, 0, -3200, 1000);
  I.swipe({"xpath": ".//*[@text='EDIT']"}, 0, -3200, 1000);
  I.tap({"xpath": ".//*[@text='EDIT']"});
  I.tap({"xpath": ".//*[@text='CRUST']"});
  I.tap({"xpath": ".//*[contains(@text, 'Thin')]"});
  I.tap({"xpath": ".//*[@text='SIZE']"});
  I.tap({"xpath": ".//*[@text='Medium']"});
  I.tap({"xpath": ".//*[@text='CRUST FLAVOR']"});
  I.tap({"xpath": ".//*[@text='Toasted Parmesan']"});
  I.swipe({"xpath": ".//*[@text='CRUST FLAVOR']"}, 0, -3200, 1000);
  I.tap({"xpath": ".//*[@text='SAUCE']"});
  I.tap({"xpath": ".//*[@text='CHANGE AMOUNT OF SAUCE']"});
  I.tap({"xpath": ".//*[@text='Light']"});
  I.tap({"xpath": ".//*[@text='Extra']"});
  I.tap({"xpath": ".//*[@text='Creamy garlic parmesan']"});
  I.tap({"xpath": ".//*[@text='CHEESE']"});
  I.tap({"xpath": ".//*[@text='Extra cheese']"});
  I.tap({"xpath": ".//*[@text='TOPPINGS']"});
  I.tap({"xpath": ".//*[@text='Pepperoni']"});
  I.tap({"xpath": ".//*[@text='Right']"});
  I.tap({"xpath": ".//*[@text='OK']"});
  I.tap({"xpath": ".//*[@text='SPECIAL INSTRUCTIONS']"});
  // TODO
  // pause();
  // I.fillField({"xpath":".//*[contains(@text, 'Enter')]"}, "1234567890123456789012345678");


  // checkoutAction.scrollToBottomOfcheckout();
  // //Place my order
  // checkoutAction.selectCreditDebit();
  // checkoutAction.fillOutNewCCFields(ccData.NameOnCard, ccData.Discover, ccData.ExpDate, ccData.CVV, ccData.ZipCode);
  // checkoutAction.placeMyOrder();
  // // Verify user is taken to home screen
  // homeAction.seeThankYou();
});

After((I) => { 
  I.clearCartAPI();
});

