Feature("Wings Menu Items and Transactions");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let footerMenuAction;
let localizationAction;
let foodMenuAction;
let wingsMenuAction;
let detailAction;
let extrasAction;
let checkoutAction;
let homeAction;
let zip;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
  foodMenuAction = eval(imports.foodMenuActions);
  foodMenuAction._init(commonActions);
  wingsMenuAction = eval(imports.wingsMenuActions);
  wingsMenuAction._init(commonActions);
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

Scenario("Wings Menu Transaction Test @regression @wings", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  //
  // Go to Wings menu
  foodMenuAction.selectWings();
  // Select Traditional wings
  wingsMenuAction.selectTradWings();
  // Select quantity and flavor
  wingsMenuAction.selectQuantitySix();
  wingsMenuAction.selectFlavorBufmild();
  // Review details and add to order
  detailAction.addToOrder();
  detailAction.backtoMenu();
  // Go to Wings menu
  foodMenuAction.selectWings();
  // Selecting second type of wings
  wingsMenuAction.selectTradWings();
  // Select quantity and flavor
  wingsMenuAction.selectQuantityTwelve();
  wingsMenuAction.selectFlavorHoneyBBQ();
  // Review details and add to order
  detailAction.addToOrder();
  detailAction.backtoMenu();
  // Go to Wings menu
  foodMenuAction.selectWings();
  // Selecting third type of wings
  wingsMenuAction.selectBonelessWings();
  // Select quantity and flavor
  wingsMenuAction.selectQuantityEight();
  wingsMenuAction.selectFlavorGarlicparm();
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

After((I) => { 
  I.clearCartAPI();
});
