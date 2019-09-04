Feature("P'Zone Menu Items and Transactions");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let foodMenuAction;
let pzoneMenuAction;
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
  extrasAction = eval(imports.extrasActions);
  extrasAction._init(commonActions);
  detailAction = eval(imports.detailActions);
  detailAction._init(commonActions);
  pzoneMenuAction = eval(imports.pzoneMenuActions);
  pzoneMenuAction._init(commonActions);
  checkoutAction = eval(imports.checkoutActions);
  checkoutAction._init(commonActions);
  homeAction = eval(imports.homeActions);
  homeAction._init(commonActions);
});

Scenario("PZone Menu Transaction Test @regression @transactions @pzone", async function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to P'Zone menu
  foodMenuAction.selectPZone();
  // Select P'Zone Pepperoni
  pzoneMenuAction.selectpepPzone();
  //Select Meaty P'Zone
  pzoneMenuAction.selectmeatPzone();
  //Select Supremo P'Zone
  pzoneMenuAction.selectsupPzone();
  //Back to the Menu
  detailAction.backarrowMenu();
  // Go to the Cart
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

