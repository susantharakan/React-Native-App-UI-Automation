Feature("New User Signup, Authentication and transactions");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let randomData;
let localizationAction;
let foodMenuAction;
let pizzaMenuAction;
let detailAction;
let extrasAction;
let checkoutAction;
let homeAction;
let footerMenuAction;
let zip;

Before(function(I, commonActions) {
  randomData = require(commonActions.getRootDirectory("data") + "data/testdata/randomData.js");
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
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

Scenario("Register a new user and log in @regression @sanity @newUser1", async function(I) {
  loginAction.tapCreateAnAccount();
  I.runOnAndroid(() => {
    loginAction.completeNewUserForm(randomData.validFirstName(), randomData.validLastName(), randomData.validEmail(), "Pizzahut2", randomData.validPhoneNumber(), randomData.validZip());
 });
  I.runOnIOS(() => {
    loginAction.completeNewUserFormforios(randomData.validFirstName(), randomData.validLastName(), randomData.validEmail(), "Pizzahut2", randomData.validPhoneNumber(), randomData.validZip());
    });
loginAction.verifyHomeScreenCongrats();
});

Scenario("Register a new user and complete a transaction @regression @sanity @newUserTransaction @transactions", async function(I) {
  loginAction.tapCreateAnAccount();
  I.runOnAndroid(() => {
    loginAction.completeNewUserForm(randomData.validFirstName(), randomData.validLastName(), randomData.validEmail(), "Pizzahut2", randomData.validPhoneNumber(), randomData.validZip());
 });
  I.runOnIOS(() => {
    loginAction.completeNewUserFormforios(randomData.validFirstName(), randomData.validLastName(), randomData.validEmail(), "Pizzahut2", randomData.validPhoneNumber(), randomData.validZip());
    });
  loginAction.verifyHomeScreenCongrats();
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
