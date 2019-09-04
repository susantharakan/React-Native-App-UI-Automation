Feature("Sauces Menu Items and Transactions");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let foodMenuAction;
let saucesMenuAction;
let detailAction;
let extrasAction;
let checkoutAction;
let homeAction;
let footerMenuAction;
let zip;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  zip = envAuth.zip;
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
  saucesMenuAction = eval(imports.saucesMenuActions);
  saucesMenuAction._init(commonActions);
  extrasAction = eval(imports.extrasActions);
  extrasAction._init(commonActions);
  checkoutAction = eval(imports.checkoutActions);
  checkoutAction._init(commonActions);
  homeAction = eval(imports.homeActions);
  homeAction._init(commonActions);
});

//
Scenario("Sauces Menu Transaction Test @regression @sauces @transactions", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip); 
  // Scroll to Drinks
  detailAction.scrollingMenu1();
  // Go to Sauces menu
  foodMenuAction.selectSauces(); 
  // Select marinara sauce
  saucesMenuAction.selectSauceMarinara(); 
  // Selecting Blue Cheese sauce
  saucesMenuAction.selectSauceBluecheese();
  // Selecting Honey BBQ sauce
  saucesMenuAction.selectSauceHoneyBBQ();
  // Review details and add to order
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