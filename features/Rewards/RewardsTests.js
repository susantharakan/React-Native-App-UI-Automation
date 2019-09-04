Feature("Rewards Points Features");
let envFile = "data/envs/envAuth.yaml";
let envAuth;
let ccData = "data/testdata/creditcards.yaml";
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
let buildAction;
let zip;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  ccData = commonActions.readYaml(ccData);
  zip = envAuth.zip;
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
  buildAction = eval(imports.buildActions);
  buildAction._init(commonActions);
});

Scenario("Rewards Points Transaction Breadsticks @regression @sanity @transactions @rewards @breadsticksreward", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  //loginAction.PHlogin(envAuth.pointsemail, envAuth.pointspassword);
  homeAction.tapRedeem();
  // Localize via carryout
  localizationAction.searchCarryout("Store-995");
  //Click Redeem Btn again for iOS
  I.runOnIOS(() => {
    homeAction.tapRedeem();
  });
 // Review details and add to order
  buildAction.addToOrder();
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

After((I) => { 
  I.clearCartAPI();
});
