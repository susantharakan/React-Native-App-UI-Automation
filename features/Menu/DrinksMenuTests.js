Feature("Drinks Menu Items and Transactions");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let footerMenuAction;
let localizationAction;
let foodMenuAction;
let drinksMenuAction;
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
  drinksMenuAction = eval(imports.drinksMenuActions);
  drinksMenuAction._init(commonActions);
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

Scenario("Drinks Menu Transaction Test @regression @drink", async function(I) {
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Scroll to Drinks
  detailAction.scrollingMenu1();
  // Go to Drinks menu
  foodMenuAction.selectDrinks();
  // Select type of drink
  drinksMenuAction.select4pack();
  // Review details and add to order
  detailAction.addToOrder();
  // Pop-up back to menu
  detailAction.backtoMenu();
  // Scroll to Drinks
  detailAction.scrollingMenu1();
  // Go to Drinks menu
  foodMenuAction.selectDrinks();
  // Select another type of drink
  drinksMenuAction.selectDrinks20();
  detailAction.backarrowMenu();
  // Select the third type of drink
  drinksMenuAction.selectDrinks2L();
  detailAction.backarrowMenu();
  detailAction.backarrowMenu();
  detailAction.tapOnCart();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  //Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  //Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

Scenario("Booze test inside of purchase hours @regression @booze1", async function(I) {
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Scroll to Drinks
  detailAction.scrollingMenu1();
  // Go to Drinks menu
  foodMenuAction.selectDrinks();
  // Selecting the 6-pack
  drinksMenuAction.select6pack();
  drinksMenuAction.selectCoorsLight();
  // Age dialog should only be asked once per session
  drinksMenuAction.boozeAgeDialog();
  detailAction.backarrowMenu();
  // Selecting the 2-pack
  drinksMenuAction.select2pack();
  drinksMenuAction.selectBlueMoon();
  detailAction.backarrowMenu();
  // Selecting the 12oz
  drinksMenuAction.select12oz();
  drinksMenuAction.selectBudLight()
  // Backing out of menu to go to cart
  detailAction.backarrowMenu();
  detailAction.backarrowMenu();
  detailAction.tapOnCart();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  //Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  //Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

Scenario("Booze test outside of purchase hours @regression @booze2", async function(I) {
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Scroll to Drinks
  detailAction.scrollingMenu1();
  // Go to Drinks menu
  foodMenuAction.selectDrinks();
  // Select type of drink
  drinksMenuAction.select6pack();
  drinksMenuAction.boozeDeniedcheck();
  detailAction.backarrowMenu();
  // Selecting the 2-pack
  drinksMenuAction.select2pack();
  drinksMenuAction.boozeDeniedcheck();
  detailAction.backarrowMenu();
  // Selecting the 12oz
  drinksMenuAction.select12oz();
  drinksMenuAction.boozeDeniedcheck();
});

After((I) => { 
  I.clearCartAPI();
});
