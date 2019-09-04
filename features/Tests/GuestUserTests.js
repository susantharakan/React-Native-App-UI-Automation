Feature("Guest login and checkout test");
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
let wingsMenuAction;
let drinksMenuAction;
let zip;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envAuthRawData);
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  zip = envAuth.zip;
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
  foodMenuAction = eval(imports.foodMenuActions);
  foodMenuAction._init(commonActions);
  detailAction = eval(imports.detailActions);
  detailAction._init(commonActions);
  extrasAction = eval(imports.extrasActions);
  extrasAction._init(commonActions);
  checkoutAction = eval(imports.checkoutActions);
  checkoutAction._init(commonActions);
  homeAction = eval(imports.homeActions);
  homeAction._init(commonActions);
  wingsMenuAction = eval(imports.wingsMenuActions);
  wingsMenuAction._init(commonActions);
  drinksMenuAction = eval(imports.drinksMenuActions);
  drinksMenuAction._init(commonActions);
});

Scenario("Guest login and checkout test @regression @guest", async function(I) {

  // Authenticate
  loginAction.guestLogin();
  
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to Wings menu and selecting Traditional wings, quantity and flavor
  foodMenuAction.selectWings(); 
  wingsMenuAction.selectTradWings();
  wingsMenuAction.selectQuantitySix();
  wingsMenuAction.selectFlavorBufmild();
  detailAction.addToOrder();
  detailAction.backtoMenu();
  // Go to Drinks menu and selecting the four pack drinks
  detailAction.scrollingMenu1();
  foodMenuAction.selectDrinks(); 
  drinksMenuAction.select4pack();
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  // Fill out Contact info for guest account
  I.runOnAndroid(() => {
    checkoutAction.fillContactinfo();
  } );
  //Contact info for ios
  I.runOnIOS(() => {
  checkoutAction.fillContactinfoforiOS();
  });
  // Scroll to the bottom of the checkout page
  checkoutAction.scrollToBottomOfcheckout();
  //Place my order
  checkoutAction.selectCash();
  //  Agree to the terms for guest account and place order
  checkoutAction.guestPlaceMyOrder() 
  //Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

After((I) => { 
  I.clearCartAPI();
});

