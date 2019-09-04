Feature("Sandwiches Menu Items and Transactions");
let envAuth;
let envAuthRawData = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let foodMenuAction;
let sandwichesMenuAction;
let detailAction;
let extrasAction;
let checkoutAction;
let homeAction;
let footerMenuAction;
let zip;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envAuthRawData);
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
  foodMenuAction = eval(imports.foodMenuActions);
  foodMenuAction._init(commonActions);
  detailAction = eval(imports.detailActions);
  detailAction._init(commonActions);
  sandwichesMenuAction = eval(imports.sandwichesMenuActions);
  sandwichesMenuAction._init(commonActions);
  extrasAction = eval(imports.extrasActions);
  extrasAction._init(commonActions);
  checkoutAction = eval(imports.checkoutActions);
  checkoutAction._init(commonActions);
  homeAction = eval(imports.homeActions);
  homeAction._init(commonActions);
  zip = envAuth.zip;
});

Scenario("Sandwiches Menu Transaction Test @regression @sandwich", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to Desserts, Sauces, and Drinks options
  detailAction.scrollingMenu1();
  foodMenuAction.selectSandwiches();
  // Select type of sandwiches
  sandwichesMenuAction.selectSandwichBBQ();
  sandwichesMenuAction.selectSandwichside();
  // Selecting second sandwich
  sandwichesMenuAction.selectSandwichBF();
  sandwichesMenuAction.selectSandwichsize();
  sandwichesMenuAction.selectSandwichside();
  // Selecting third sandwich
  sandwichesMenuAction.selectSandwichSupremo();
  sandwichesMenuAction.selectSandwichside();
  //detailAction.backarrowMenu();
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

