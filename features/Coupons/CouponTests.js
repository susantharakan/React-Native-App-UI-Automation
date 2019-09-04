Feature("Coupons and Related Transactions");
let envAuth;
let envAuthRawData = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let foodMenuAction;
let detailAction;
let extrasAction;
let checkoutAction;
let homeAction;
let pizzaMenuAction;
let pastaMenuAction;
let pzoneMenuAction;
let wingsMenuAction;
let sidesMenuAction;
let dessertsMenuAction;
let saucesMenuAction;
let drinksMenuAction;
let saladsMenuAction;
let soupsMenuAction;
let sandwichesMenuAction;

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
  pastaMenuAction = eval(imports.pastaMenuActions);
  pastaMenuAction._init(commonActions);
  pzoneMenuAction = eval(imports.pzoneMenuActions);
  pzoneMenuAction._init(commonActions);
  wingsMenuAction = eval(imports.wingsMenuActions);
  wingsMenuAction._init(commonActions);
  sidesMenuAction = eval(imports.sidesMenuActions);
  sidesMenuAction._init(commonActions);
  dessertsMenuAction = eval(imports.dessertsMenuActions);
  dessertsMenuAction._init(commonActions);
  saucesMenuAction = eval(imports.saucesMenuActions);
  saucesMenuAction._init(commonActions);
  drinksMenuAction = eval(imports.drinksMenuActions);
  drinksMenuAction._init(commonActions);
  saladsMenuAction = eval(imports.saladsMenuActions);
  saladsMenuAction._init(commonActions);
  soupsMenuAction = eval(imports.soupsMenuActions);
  soupsMenuAction._init(commonActions);
  sandwichesMenuAction = eval(imports.sandwichesMenuActions);
  sandwichesMenuAction._init(commonActions);
});

Scenario("Coupon Transaction Test @regression @validTransactionPizza @coupon", async function(I) {
// Authenticate
  // I.getPageSource();
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout("store-995");
  // Go to the cart
  detailAction.tapOnCart();
  // Input coupon into the field
  detailAction.applyCoupon("cheesybites");
  pizzaMenuAction.selectPizza();
  pizzaMenuAction.altbuildPizza();
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

