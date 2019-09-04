Feature("Pasta Menu Items Pricing and Calories");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let foodMenuAction;
let pastaMenuAction;
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
  pastaMenuAction = eval(imports.pastaMenuActions);
  pastaMenuAction._init(commonActions);
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

Scenario("Pasta Menu Transaction Test @regression @pasta", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to pasta menu
  foodMenuAction.selectPasta();
  // Select pasta Tuscani Chicken Alfredo
  pastaMenuAction.selectTuscaniChickenAlfredo();
  // Adding to order and back to menu
  detailAction.addToOrder();
  detailAction.backtoMenu();
  //Second Pasta, selecting Meat Marinara
  foodMenuAction.selectPasta();
  pastaMenuAction.selectMeatMarinaraPasta();
  // Adding to order and back to menu
  detailAction.addToOrder();
  detailAction.backtoMenu();
  //Third pasta, selecting Family Alfredo
  foodMenuAction.selectPasta();
  pastaMenuAction.selectFamilyAlfredoPasta();
  // Adding to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  //Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  //Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

After((I) => { 
  I.clearCartAPI();
});
