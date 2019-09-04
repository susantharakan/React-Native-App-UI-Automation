Feature("Desserts Menu Items and Transactions");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let foodMenuAction;
let dessertsMenuAction;
let detailAction;
let extrasAction;
let checkoutAction;
let homeAction;
let footerMenuAction;
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
  dessertsMenuAction = eval(imports.dessertsMenuActions);
  dessertsMenuAction._init(commonActions);
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

Scenario("Desserts Menu Transaction Test @regression @validTransactionDessert @desserts", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to Desserts menu
  detailAction.scrollingMenu1();
  // Select Deserts from menu
  foodMenuAction.selectDesserts();
  // Selecting Cinnabon Minis
  dessertsMenuAction.selectDessert();
  // Selecting Chocolate chip
  dessertsMenuAction.selectDessert2();
  // Selecting Chocolate brownie
  dessertsMenuAction.selectDessert3(); 
  // Go to cart to checkout
  detailAction.backarrowMenu();
  detailAction.tapOnCart();
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
