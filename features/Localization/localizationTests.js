Feature("Authentication and Localization to Open Stores");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let ccData;
let ccFile = "data/testdata/creditcards.yaml";
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
let accountAction;
let zip;
let checker;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  ccData = commonActions.readYaml(ccFile);
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
  accountAction = eval(imports.profileActions);
  accountAction._init(commonActions);
  zip = envAuth.zip;
});

Scenario("Using a delivery address from deals @localization @regression @sanity @delivery @deliveryfromdeals", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapDeal();
  // Localize via delivery
  I.runOnAndroid(() => {
    localizationAction.searchDeliveryFromDeals(envAuth.explicitaddress, envAuth.explicitcity, envAuth.explicitstate, envAuth.explicitzip);
  });
  
  I.runOnIOS(() => {
    localizationAction.searchDeliveryforios();
    //localizationAction.searchDelivery(address, city, state, deliveryzip);
    });
});

Scenario("Using a delivery address from menu @localization @delivery @deliveryfrommenu", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via delivery
  I.runOnAndroid(() => {
    localizationAction.searchDeliveryFromMenu(envAuth.explicitaddress, envAuth.explicitcity, envAuth.explicitstate, envAuth.explicitzip);
  });
  
  I.runOnIOS(() => {
    localizationAction.searchDeliveryforios();
    //localizationAction.searchDelivery(address, city, state, deliveryzip);
    });
});

Scenario("Using a delivery address from home @localization @delivery @deliveryfromhome", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  homeAction.tapRedeem();
  // Localize via delivery
  I.runOnAndroid(() => {
    localizationAction.searchDeliveryFromHome(envAuth.explicitaddress, envAuth.explicitcity, envAuth.explicitstate, envAuth.explicitzip);
  });
  
  I.runOnIOS(() => {
    localizationAction.searchDeliveryforios();
    //localizationAction.searchDelivery(address, city, state, deliveryzip);
    });
  
});

Scenario("Using a delivery address from account @localization @delivery @deliveryfromaccount", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapAccount();
  accountAction.tapProfile();
  accountAction.tapFindPizzaHut();
  // Localize via delivery
  I.runOnAndroid(() => {
    localizationAction.searchDeliveryFromAccount(envAuth.explicitaddress, envAuth.explicitcity, envAuth.explicitstate, envAuth.explicitzip);
  });
  
  I.runOnIOS(() => {
    localizationAction.searchDeliveryforios();
    //localizationAction.searchDelivery(address, city, state, deliveryzip);
    });
 
});

Scenario("Using a zip code from deals @localization @carryout @carryfromdeals", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapDeal();
  // Localize via carryout
  localizationAction.searchCarryoutFromDeals(envAuth.explicitzip);
});

Scenario("Using a zip code from menu @localization @regression @sanity @carryout @carryoutfrommenu", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout

  localizationAction.searchCarryoutFromMenu(envAuth.explicitzip);
});

Scenario("Using a zip code from home @localization @carryout @carryoutfromhome", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  homeAction.tapRedeem();
  // Localize via carryout
  localizationAction.searchCarryoutFromHome(envAuth.explicitzip);
});

Scenario("Using a zip code from account screen @localization @carryout @carryoutfromaccount", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapAccount();
  accountAction.tapProfile();
  accountAction.tapFindPizzaHut();  
  // Localize via carryout
  localizationAction.searchCarryoutFromAccount(envAuth.explicitzip);
});

Scenario("Using 995 from deals screen @localization @regression @teststores @995fromdeals", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapDeal();
  // Localize via carryout
  localizationAction.searchStoreNumberFromDeals(envAuth.explicit995);
});

Scenario("Using 996 from menu screen @localization @teststores @996frommenu", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchStoreNumberFromMenu(envAuth.explicit996);
});

Scenario("Using 000127 from home screen @localization @teststores @127fromhome", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  homeAction.tapRedeem();
  // Localize via carryout
  localizationAction.searchStoreNumberFromHome(envAuth.explicit127);
});

Scenario("Using 935 from account screen @localization @teststores @935fromaccount", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapAccount();
  accountAction.tapProfile();
  accountAction.tapFindPizzaHut();  
  // Localize via carryout

  localizationAction.searchStoreNumberFromAccount(envAuth.explicit935);
});