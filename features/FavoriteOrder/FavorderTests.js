Feature("Favorite Order Features");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let ccData = "data/testdata/creditcards.yaml";
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
let buildAction;
let zip;
let favorderAction;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  zip = envAuth.zip;
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  favorderAction = eval(imports.favorderActions);
  favorderAction._init(commonActions);
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
  buildAction = eval(imports.buildActions)
  buildAction._init(commonActions);
});

Scenario("Favorite order @regression @favorder", async function(I) {

 // Authenticate
 loginAction.PHlogin(envAuth.email, envAuth.password);
 //loginAction.verifyforgotPassword(email);
 footerMenuAction.tapAccount();

 favorderAction.tapFavorites();
 favorderAction.tapOrder();
 favorderAction.tapDialogCont();
  
  // Continue to checkout from upsell screen
  checkoutAction.scrollToBottomOfcheckout();
  //Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.seeReviewPopup();
});

After((I) => { 
  I.clearCartAPI();
});

