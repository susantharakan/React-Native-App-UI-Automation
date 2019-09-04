Feature("Deals Menu Items Pricing and Calories");
let envAuth;
let envFile = "data/envs/envAuth.yaml";
let imports;
let loginAction;
let localizationAction;
let footerMenuAction;
let deals5LUActions;
let deals799LAction;
let dealsbdbAction;
let dealsttdAction;
let dealswwdAction;
let dealsMenuActions;
let detailAction;
let extrasAction;
let address;
let city;
let state;
let zip;
let deliveryzip;
let homeAction;
let checkoutAction;
let email;

Before(function(I, commonActions) {
  imports = commonActions.importActions();
  envAuth = commonActions.readYaml(envFile);
  address = envAuth.address;
  city = envAuth.city;
  state = envAuth.state;
  zip = envAuth.zip;
  email= envAuth.email;
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  dealsMenuActions = eval(imports.dealsMenuActions);
  dealsMenuActions._init(commonActions);
  dealsbdbAction = eval(imports.dealsbdbActions);
  dealsbdbAction._init(commonActions);
  pizzaMenuAction = eval(imports.pizzaMenuActions);
  pizzaMenuAction._init(commonActions);
  deals799LAction = eval(imports.deals799LActions);
  deals799LAction._init(commonActions);
  dealsttdAction = eval(imports.dealsttdActions);
  dealsttdAction._init(commonActions);
  detailAction = eval(imports.detailActions);
  detailAction._init(commonActions);
  extrasAction = eval(imports.extrasActions);
  extrasAction._init(commonActions);
  checkoutAction = eval(imports.checkoutActions);
  checkoutAction._init(commonActions);
  homeAction = eval(imports.homeActions);
  homeAction._init(commonActions);
});

Scenario("Validate the cheeseybite deal, @regression @susdemo @dealedit", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  //loginAction.verifyforgotPassword(email);
  footerMenuAction.tapDeal();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // I.acceptalert(".//*[@name='Allow']");
  // Cheesy Bite deal
  dealsMenuActions.selectCheesyBiteDeal();
  // Go for the CYO flow
  deals799LAction.selectCyo();
  // Select the crust flavor
  //deals799LAction.selectyourCrust();
  deals799LAction.selectcrustFlavor();
  //Select the sauce
  deals799LAction.selectyourSauce();
  //Choose your cheese
  deals799LAction.selectCheese();
  //Select the toppings
  deals799LAction.selectitalianSausage();
  deals799LAction.selectmeatBall();
  //Review and tap ok
  deals799LAction.selecttopOk();
  // Review details and add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtrasfromDeals();
  // Scroll to the top of cart
  checkoutAction.scrollToTopOfcheckout();
  // Edit the custom pizza in the cart
  checkoutAction.editItem();
  // Make a change to the Pizza
  pizzaMenuAction.editingSauce();
  // Scroll to the bottom
  checkoutAction.scrollToBottomOfcheckout();
  //Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.verifyHome();
  //Verify review popup on Android
  I.runOnAndroid(() => {
    homeAction.seeReviewPopup();
  });
  });


 After((I) => { 
  I.clearCartAPI();
});
