Feature("Test Delivery");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let ccData = "data/testdata/creditcards.yaml";
let ccra;
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
let address;
let city;
let state;
let zip;
let deliveryzip;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  ccData = commonActions.readYaml(ccData);
  address = envAuth.address;
  city = envAuth.city;
  state = envAuth.state;
  zip = envAuth.zip;
  deliveryzip = envAuth.deliveryzip;
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
});

Scenario("Delivery Cheese Pizza Transaction Cash @regression @sanity @transactions @cheese @validTransactionPizza @delivery", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via delivery
  I.runOnAndroid(() => {
    localizationAction.searchDelivery(address, city, state, deliveryzip);
  });
  I.runOnIOS(() => {
  localizationAction.searchDeliveryforios();
  //localizationAction.searchDelivery(address, city, state, deliveryzip);
  });
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
  //checkoutAction.scrollToBottomDelivery();
  checkoutAction.scrollToBottomOfcheckout();
  //Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  //Verify user is taken to home screen
  homeAction.seeReviewPopup();
});
