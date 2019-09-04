Feature("Full Menu Items Pricing and Calories");
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

Scenario("Full Menu Transaction Test @regression @sanity @validTransactionPizza @fullmenu", async function(I) {

  // Authenticate
  loginAction.PHlogin(envAuth.email, envAuth.password);
  footerMenuAction.tapMenu();
  // Localize via carryout
  localizationAction.searchCarryout(zip); 

  
  // Go to pizza menu and selecting custom pizza
  foodMenuAction.selectPizza();
  pizzaMenuAction.selectPizza();
  pizzaMenuAction.buildPizza();
  detailAction.addToOrder();
  detailAction.backtoMenu();
 
  // Go to P'Zone menu and selecting P'Zone Pepperoni
  foodMenuAction.selectPZone(); 
  pzoneMenuAction.selectpepPzone();
  detailAction.backarrowMenu();
 
  // Go to pasta menu and selecting pasta Tuscani Chicken Alfredo
  foodMenuAction.selectPasta(); 
  pastaMenuAction.selectTuscaniChickenAlfredo();
  detailAction.addToOrder();
  detailAction.backtoMenu();
 
  // Go to Wings menu and selecting Traditional wings, quantity and flavor
  foodMenuAction.selectWings(); 
  wingsMenuAction.selectTradWings();
  wingsMenuAction.selectQuantitySix();
  wingsMenuAction.selectFlavorBufmild();
  detailAction.addToOrder();
  detailAction.backtoMenu();
 
  // Go to Sides menu and selecting Garlic Knots
  foodMenuAction.selectSides(); 
  sidesMenuAction.selectSideGarlic();
  detailAction.backarrowMenu();
   
  // Go to Desserts menu and selecting Cinnabon Minis
  detailAction.scrollingMenu1(); 
  foodMenuAction.selectDesserts(); 
  dessertsMenuAction.selectDessert();
  detailAction.backarrowMenu();

  //Go to Salads menu and selecting a type of salad
  //detailAction.scrollingMenu1(); 
  foodMenuAction.selectSalads();
  saladsMenuAction.selectGardenSalad();  
  detailAction.backarrowMenu(); 

  //Go to Soups menu and selecting type of soup
  //detailAction.scrollingMenu1(); 
  foodMenuAction.selectSoups();
  soupsMenuAction.selectSoupTomato();
  detailAction.backarrowMenu(); 
  detailAction.backarrowMenu(); 

  //Go to Sandwiches menu and selecting a type of sandwich
  //detailAction.scrollingMenu1(); 
  foodMenuAction.selectSandwiches();
  sandwichesMenuAction.selectSandwichBBQ();
  sandwichesMenuAction.selectSandwichside();
  detailAction.backarrowMenu();

  // Go to Sauces menu and selecting marinara sauce 
  foodMenuAction.selectSauces(); 
  saucesMenuAction.selectSauceMarinara(); 
  detailAction.backarrowMenu();

  // Go to Drinks menu and selecting the four pack drinks
  foodMenuAction.selectDrinks(); 
  drinksMenuAction.select4pack();
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

