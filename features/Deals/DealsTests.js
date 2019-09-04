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
  zip = envAuth.luzip;
  email= envAuth.email;
  loginAction = eval(imports.loginActions);
  loginAction._init(commonActions);
  localizationAction = eval(imports.localizationActions);
  localizationAction._init(commonActions);
  footerMenuAction = eval(imports.footerMenuActions);
  footerMenuAction._init(commonActions);
  dealsMenuActions = eval(imports.dealsMenuActions);
  dealsMenuActions._init(commonActions);
  deals5LUActions = eval(imports.deals5LUActions);
  deals5LUActions._init(commonActions);
  deals799LAction = eval(imports.deals799LActions);
  deals799LAction._init(commonActions);
  dealsbdbAction = eval(imports.dealsbdbActions);
  dealsbdbAction._init(commonActions);
  dealsttdAction = eval(imports.dealsttdActions);
  dealsttdAction._init(commonActions);
  dealswwdAction = eval(imports.dealswwdActions);
  dealswwdAction._init(commonActions);
  detailAction = eval(imports.detailActions);
  detailAction._init(commonActions);
  extrasAction = eval(imports.extrasActions);
  extrasAction._init(commonActions);
  checkoutAction = eval(imports.checkoutActions);
  checkoutAction._init(commonActions);
  homeAction = eval(imports.homeActions);
  homeAction._init(commonActions);
});

Scenario("Validate the cheeseybite deal, @regression @susdemo @cheesybite", function(I) {
// Authenticate
loginAction.PHlogin(envAuth.email, envAuth.password);
//loginAction.verifyforgotPassword(email);
footerMenuAction.tapDeal();
// Localize via carryout
localizationAction.searchCarryout(zip);
//localizationAction.searchStoreNumberFromDeals(envAuth.explicit995);
// I.acceptalert(".//*[@name='Allow']");
// Cheesy Bite deal
dealsMenuActions.selectCheesyBiteDeal();
// Go for the CYO flow
deals799LAction.selectCyo();
// Select the crust flavor
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

Scenario("Validate the $5 LU deal, @deals @regression @susdemo @5LU ", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapDeal();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to $5 LU Deal NOTE: elements for other items are available under dealsMenuActions/dealsMenu object files
  dealsMenuActions.select5LUDeal();
  // Select Wings from the list
  deals5LUActions.selectWings();
  // Select Buffalo wings
  deals5LUActions.selectbuffaloWings();
  // Select Pasta from the list
  deals5LUActions.selectPasta();
  // Select Meaty marinara Pasta
  deals5LUActions.selectmeatmarinaraPasta();
  // Review details and add to order
  detailAction.addToOrder5LU();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtras();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.verifyHome();
  //Verify review popup on Android
  I.runOnAndroid(() => {
  homeAction.seeReviewPopup();
  });
});

Scenario("Validate the Big Dinner Box deal, @deals @regression @susdemo @bdb" , function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapDeal();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to Big Dinner Box Deal
  dealsMenuActions.selectBDBDeal();
  // Select the Big Dinner Box with bone out Wings
  dealsMenuActions.selectBDBBoneoutwings();
  // Select Step1
  dealsbdbAction.selectStep1();
  dealsbdbAction.selectCyo();
  // Select the crust flavor
  dealsbdbAction.selectcrustFlavor();
  // Select the sauce
  dealsbdbAction.selectyourSauce();
  // Choose your cheese
  dealsbdbAction.selectCheese();
  // Select the toppings
  dealsbdbAction.selectitalianSausage();
  // Review and tap ok
  dealsbdbAction.selecttopOk();
  // Review details and add to order
  detailAction.addToDeal();
  // Select Step2
  dealsbdbAction.selectStep2();
  // Go for the CYO flow
  dealsbdbAction.selectCyo();
  // Select the crust flavor
  dealsbdbAction.selectcrustFlavor1();
  // Select the sauce
  dealsbdbAction.selectyourSauce1();
  // Choose your cheese
  dealsbdbAction.selectCheese();
  // Select the toppings
  dealsbdbAction.selectmeatBall();
  // Review and tap ok
  dealsbdbAction.selecttopOk();
  // Review details and add to order
  detailAction.addToDeal();
  //Select Step3
  dealsbdbAction.selectStep3();
  // Select breadsticks
  dealsbdbAction.selectSticks();
  // Select Step4
  dealsbdbAction.selectStep4();
  // Select buffalo wings
  dealsbdbAction.selectbuffaloWings();
  // Review details and add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtrasfromDeals();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.verifyHome();
  homeAction.seeReviewPopup();
});

//******
//This test will only work on tuesdays
//****** 

Scenario("Validate the Tuscani Tuesday deal, @deals @ttd", function(I) {
  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapDeal();
  // Localize via carryout
  localizationAction.searchCarryout(zip);
  // Go to TT Fam Size Pasta deal
  dealsMenuActions.selectTTFamSize();
  // Select TT Fam Pasta
  dealsttdAction.selectpickyourPasta();
  // Select Fim size pasta
  dealsttdAction.selectfamilysizePasta();
  // Add to order
  detailAction.addToOrder();
  detailAction.backtoDeals();
  // Select the TT pasta for 2 deal
  dealsMenuActions.selectTTPastafor2();
  // Select the pasta  option
  dealsttdAction.selectpickyourPasta();
  // Choose your pasta
  dealsttdAction.selectchikenalfredoPasta();
  // Add to order
  detailAction.addToOrder();
  // Go to checkout from "added" popup
  detailAction.continueToCheckoutPopup();
  // Continue to checkout from upsell screen
  extrasAction.goToCheckoutExtrasfromDeals();
  checkoutAction.scrollToBottomOfcheckout();
  // Place my order
  checkoutAction.selectCash();
  checkoutAction.placeMyOrder();
  // Verify user is taken to home screen
  homeAction.verifyHome();
  homeAction.seeReviewPopup();
});

//******
//This test will only work on Wednesday
//****** 

 Scenario("Validate the Wing Wednesday deal, @deals @wwd", function(I) {
 // Authenticate
 loginAction.PHlogin(envAuth.email, envAuth.password);
 footerMenuAction.tapDeal();
 // Localize via carryout
 localizationAction.searchCarryout(zip);
// localizationAction.searchDelivery();
// Go to Wing Wednesday bone out deal
dealsMenuActions.selectwwboneoutWings();
dealswwdAction.selectpickyourWings();
dealswwdAction.selectchoosewingsQuantity();
dealswwdAction.selectwingsQuantity1();
dealswwdAction.selectchoosewingsFlavor();
dealswwdAction.selectwingsFlavor();
 // Review details and add to deal
 detailAction.addToDeal();
 // Add to order
detailAction.addToOrder();
detailAction.backtoDeals();
dealsMenuActions.selectwwtraditionalWings();
dealswwdAction.selectpickyourWings();
dealswwdAction.selectchoosewingsQuantity();
dealswwdAction.selectwingsQuantity();
dealswwdAction.selectchoosewingsFlavor();
dealswwdAction.selectwingsFlavor();
// Review details and add to deal
 detailAction.addToDeal();
// Add to order
detailAction.addToOrder();
// Go to checkout from "added" popup
detailAction.continueToCheckoutPopup();
// Continue to checkout from upsell screen
extrasAction.goToCheckoutExtrasfromDeals();
checkoutAction.scrollToBottomOfcheckout();
//Place my order
checkoutAction.selectCash();
checkoutAction.placeMyOrder();
// Verify user is taken to home screen
homeAction.verifyHome();
homeAction.seeReviewPopup();
});

 After((I) => { 
  I.clearCartAPI();
});
