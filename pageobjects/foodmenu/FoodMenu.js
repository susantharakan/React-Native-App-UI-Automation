"use strict";

module.exports = {

  // Object Locators for the main food categories menu from home screen
  pizza: {
    xpath: ".//*[@text='Pizza']",
    //ios: ".//*[contains(@label, 'Pizza')]",
    ios: ".//*[@label='Pizza']",
  },
  pzone: {
    xpath: ".//*[ends-with(@text, 'Zone')]",
    ios: ".//*[contains(@name='one')]",
   
  },
  pasta: {
    xpath: ".//*[@text='Pasta']",
    ios: "(.//*[@name='Pasta'])[3]",
  },
  wings: {
    xpath: ".//*[@text='Wings']",
    ios: "(.//*[@name='Wings'])[3]",
  },
  sides: {
    xpath: ".//*[@text='Sides']",
    ios: "(.//*[@name='Sides'])[3]"
  },
  desserts: {
    xpath: ".//*[@text='Desserts']",
   // ios: "(.//*[@name='Desserts'])[3]",
    ios: "(.//*[@name='Desserts'])[2]",
    
  },
  sauces: {
    xpath: ".//*[@text='Sauces']",
    ios: "(.//*[@name='Sauces'])[3]",
  },
  drinks: {
    xpath: ".//*[@text='Drinks']",
    ios: "(.//*[@name='Drinks'])[2]",
  },
  salads: {
    xpath: ".//*[@text='Salads']",
    ios: "(.//*[@name='Salads'])[3]",
  },
  soups: {
    xpath: ".//*[@text='Soups']",
    ios: "(.//*[@name='Soups'])[3]",
  },
  sandwiches: {
    xpath: ".//*[@text='Sandwiches']",
    ios: "(.//*[@name='Sandwiches'])[3]",
  },


  // Object Locators for the pizza menu from categories menu
  customPizza: {
    xpath: ".//*[@text='Create your own']",
    ios: "~Create Your Own Product",
  },
  cheesePizza: {
    xpath: ".//*[@text='Cheese']",
    ios: "~Cheese",
  },
  pepperoniPizza: {
    xpath: ".//*[@text='Pepperoni']",
    ios: "~Pepperoni",
  },
  meatPizza: {
    xpath: ".//*[contains(@text, 'Meat Lover')]",
    ios: "~Meat Lover's®",
  },
  supremePizza: {
    xpath: ".//*[@text='Supreme']",
    ios: "~Supreme",
  },
  bbqchickPizza: {
    xpath: ".//*[@text='Backyard BBQ Chicken']",
    ios: "~Backyard BBQ Chicken",
  },
  peploverPizza: {
    xpath: ".//*[starts-with(@text, 'Pepperoni Lover')]",
    ios: "~Pepperoni Lover's®",
  },
  hawaiianPizza: {
    xpath: ".//*[@text='Hawaiian Chicken']",
    ios: "~Hawaiian Chicken",
  },
  chickbaconPizza: {
    xpath: ".//*[@text='Chicken-Bacon Parmesan']",
    ios: "~Chicken-Bacon Parmesan",
  },
  buffaloPizza: {
    xpath: ".//*[@text='Buffalo Chicken']",
    ios: "~Buffalo Chicken",
  },
  cheeseloverPizza: {
    xpath: ".//*[starts-with(@text, 'Ultimate Cheese')]",
    ios: "~Ultimate Cheese Lover's®",
  },
  vegloverPizza: {
    xpath: ".//*[starts-with(@text, 'Veggie')]",
    ios: "~Veggie Lover's®",
  },
  fiestabeefPizza: {
    xpath: ".//*[@text='Fiesta Taco Beef']",
  },
  fiestachickPizza: {
    xpath: ".//*[@text='Fiesta Taco Chicken']",
  },
  bbqbeefPizza: {
    xpath: ".//*[@text='BBQ Beef Brisket']",
  },
  luauPizza: {
    xpath: ".//*[@text='Hawaiian Luau']",
  },
  supersupPizza: {
    xpath: ".//*[@text='Super Supreme']",
    ios: "~Super Supreme",
  },

  // Object Locators for the custom pizza, Size
  largeSize: {
    xpath: ".//*[@text='Large']",
    ios: "~Large",
  },
  mediumSize: {
    xpath: ".//*[@text='Medium']",
    ios: "~Medium",
  },
  personalSize: {
    xpath: ".//*[@text='Personal Pan']",
    ios: "~Personal Pan",
  },
  smallSize: {
    xpath: ".//*[@text='Small']",
    ios: "~Small",
  },
  extralargeSize: {
    xpath: ".//*[@text='Extra Large']",
    ios: "~Extra Large",
  },
  heartshapeSize: {
    // temp offer
    xpath: ".//*[@text='Heart-Shaped, Medium']",
    ios: "(.//*[@name='Heart-Shaped, Medium'])[3]",
  },

  // Object Locators for the custom pizza, Crust
  originalCrust: {
    xpath: ".//*[@text='MOST POPULAR']",
    ios: "(.//*[@name='Original Pan®'])[1]",
  },
  handtossCrust: {
    xpath: ".//*[@text='	Handtossed']",
    ios: "(.//*[@name='Hand tossed'])[1]",
  },
  thinCrust: {
    xpath: ".//*[starts-with(@text, 'Thin')]",
    ios: "(.//*[@name='Thin ‘N Crispy®'])[1]",
  },
  stuffedCrust: {
    xpath: ".//*[starts-with(@text, 'Original Stuffed')]",
    ios: "(.//*[@name='Original Stuffed Crust®'])[1]",
  },
  ultcheesyCrust: {
    xpath: ".//*[@text='Ultimate Cheesy Crust']",
    ios: "(.//*[@name='Cheesy Bites Crust'])[1]"
  },

  // Object Locators for the custom pizza, Crust Flavor
  hutFlavor: {
    xpath: ".//*[@text='MOST POPULAR']",
    ios: "(.//*[@name='Hut Favorite'])[1]",
  },
  garlicFlavor: {
    xpath: ".//*[@text='Garlic Buttery Blend']",
    ios: "(.//*[@name='Garlic Buttery Blend'])[1]",
  },
  toastedFlavor: {
    xpath: ".//*[@text='Toasted Parmesan']",
    ios: "(.//*[@name='Toasted Parmesan'])[1]",
  },
  noFlavor: {
    xpath: ".//*[@text='No crust flavor']",
    ios: "(.//*[@name='No crust flavor'])[3]",
  },

  // Object Locators for the custom pizza, Sauce
  marinaraSauce: {
    xpath: ".//*[@text='MOST POPULAR']",
    ios: "(.//*[@name='Classic marinara'])[1]",
  },
  garlicSauce: {
    xpath: ".//*[@text='Creamy garlic parmesan']",
    ios: "(.//*[@name='Creamy garlic parmesan'])[1]",
  },
  barbequeSauce: {
    xpath: ".//*[@text='Barbeque']",
    ios: "(.//*[@name='Barbeque'])[1]",
  },
  buffaloSauce: {
    xpath: ".//*[@text='Buffalo']",
    ios: "(.//*[@name='Buffalo'])[1]",
  },
  noSauce: {
    xpath: ".//*[@text='No sauce']",
    ios: "(.//*[@name='No sauce'])[3]",
  },

  // Object Locators for the custom pizza, Cheese
  regularCheese: {
    xpath: ".//*[@text='MOST POPULAR']",
    ios: "(.//*[@name='Regular cheese'])[1]",
  },
  extraCheese: {
    xpath: ".//*[@text='Extra cheese']",
    ios: "(.//*[@name='Extra cheese'])[1]",
  },
  lightCheese: {
    xpath: ".//*[@text='Light cheese']",
    ios: "(.//*[@name='Light cheese'])[1]",
  },
  noCheese: {
    xpath: ".//*[@text='No cheese']",
    ios: "(.//*[@name='No cheese'])[3]",
  },

  // Object Locators for the custom pizza, Toppings
  pepperoniTop: {
    xpath: ".//*[@text='Pepperoni']",
    ios: "~Pepperoni",
  },
  sausageTop: {
    xpath: ".//*[@text='Italian sausage']",
    ios: "~Italian sausage",
  },
  meatballTop: {
    xpath: ".//*[@text='Meatball']",
    ios: "~Meatball",

  },
  hamTop: {
    xpath: ".//*[@text='Ham']",
    ios: "~Ham",

  },
  baconTop: {
    xpath: ".//*[@text='Bacon']",
    ios: "~Bacon",
  },
  chickenTop: {
    xpath: ".//*[@text='Grilled chicken']",
    ios: "~Grilled chicken",
  },
  beefTop: {
    xpath: ".//*[@text='Beef']",
    ios: "~Beef",
  },
  porkTop: {
    xpath: ".//*[@text='Pork']",
    ios: "~Pork",
  },
  mushroomsTop: {
    xpath: ".//*[@text='Mushrooms']",
    ios: "~Mushrooms",
  },
  spinachTop: {
    xpath: ".//*[@text='Roasted spinach']",
    ios: "~Roasted spinach",
  },
  onionsTop: {
    xpath: ".//*[@text='Red onions']",
    ios: "~Red onions",
  },
  blackolivesTop: {
    xpath: ".//*[@text='Mediterranean black olives']",
    ios: "Mediterranean black olives",
  },
  greenolivesTop: {
    xpath: ".//*[@text='Green olives']",
    ios: "~Green olives",
  },
  greenpepTop: {
    xpath: ".//*[@text='Green bell peppers']",
    ios: "~Green bell peppers",
  },
  bananapepTop: {
    xpath: ".//*[@text='Banana peppers']",
    ios: "~Banana peppers",
  },
  onionsTop: {
    xpath: ".//*[@text='Red onions']",
    ios: "~Mushrooms",
  },
  pineappleTop: {
    xpath: ".//*[@text='Pineapple']",
    ios: "~Pineapple",
  },
  jalpepTop: {
    xpath: ".//*[starts-with(@text, 'Jalape')]",
    ios: "~Jalapeño peppers",
  },
  tomatoesTop: {
    xpath: ".//*[@text='Roma tomatoes']",
    ios: "~Roma tomatoes",
  },

  // Objects Locators for topping menu
  seeall: {
    xpath: ".//*[@text='See all']",
    ios: "~See All"
  },
  seeless: {
    xpath: ".//*[@text='See less']",
    ios: "(.//*[@name='See Less'])[2]",
  },
  whole: {
    xpath: ".//*[@text='Whole']",
  },
  leftside: {
    xpath: ".//*[@text='Left']",
  },
  rightside: {
    xpath: ".//*[@text='Right']",
  },
  extra: {
    xpath: ".//*[@text='OFF']",
  },
  noextra: {
    xpath: ".//*[@text='ON']",
  },
  okButton: {
    xpath: ".//*[@text='OK']",
    ios: "~Ok",
  },

  // Object Locators for Pizza Details page
  sizeDetails: {
    xpath: ".//*[@text='SIZE']",
    //ios: "~Large",
    ios:".//*[@name='Large']",
  },
  sauceDetails: {
    xpath: ".//*[@text='SAUCE']",
    ios: ".//*[@name='Classic marinara']",

  },
  instructionsDetails: {
    xpath: ".//*[@text='SPECIAL INSTRUCTIONS']",
    ios: "~ie: Cut into squares",
  },
  saveDetails: {
    xpath: ".//*[@text='SAVE']",
    ios: "(.//*[@name='SAVE'])[2]",
  },

  // Object Locators for the pasta menu from categories menu
  chickalfredoPasta: {
    xpath: ".//*[@text='Tuscani® Chicken Alfredo Pasta']",
    ios: "~Tuscani® Chicken Alfredo Pasta",
  },
  meatmarinaraPasta: {
    xpath: ".//*[@text='Tuscani® Meaty Marinara Pasta']",
    ios: "~Tuscani® Meaty Marinara Pasta",
  },
  familyalfredoPasta: {
    xpath: ".//*[@text='Family Size Meaty Marinara Pasta']",
    ios: "~Family Size Chicken Alfredo Pasta",
  },
  familymarinaraPasta: {
    xpath: ".//*[@text='Family Size Chicken Alfredo Pasta']",
    ios: "~Family Size Meaty Marinara Pastak",
  },
  familyMixMatchPasta: {
    xpath: ".//*[@text='Family Size Mix & Match Pasta']",
    ios: "~Family Size Mix & Match Pasta",
  },


  // Object locators for the P'zones menu from the categories menu
  pepPzone: {
    xpath: ".//*[starts-with(@text, 'Pepperoni')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  meatyPzone: {
    xpath: ".//*[starts-with(@text, 'Meaty')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },
  supremoPzone: {
    xpath: ".//*[starts-with(@text, 'Supremo')]/following::*[@text='ADD'][1]", 
    ios: "(.//*[@name='Add to Order'])[3]",
  },


  // Object locators for the Wings menu from the categories menu
  tradWings: {
    xpath: ".//*[@text='Large traditional wings']",
    ios: "(.//*[@name='Large traditional wings'])[3]",
  },
  bonelessWings: {
    xpath: ".//*[@text='Breaded bone-out wings']",
    ios: "(.//*[@name='Breaded bone-out wings'])[3]",
  },
  honeyBBQWings: {
    xpath: ".//*[@text='Honey BBQ boneless wings']",
    ios: "(.//*[@name='Honey BBQ boneless wings'])[3]",
  },


  // Object locators for the Wings quantity and flavor from wings menu
  chooseQuantity: {
    xpath: ".//*[@text='QUANTITY']",
    ios: "~Choose your quantity",
  },
  chooseFlavor: {
    xpath: ".//*[@text='FLAVOR']",
    ios: "~Choose your flavor",
  },


  // Object locators for the Wings quantity selection
  // regular wing quantities
  chooseSix: {
    xpath: ".//*[@text='6 pieces']",
    ios: "(.//*[@name='6 pieces'])[3]",
  },
  chooseTwelve: {
    xpath: ".//*[@text='12 pieces']",
    ios: "(.//*[@name='12 pieces'])[3]",
  },
  chooseEighteen: {
    xpath: ".//*[@text='18 pieces']",
    ios: "(.//*[@name='18 pieces'])[3]",
  },
  chooseThirtysix: {
    xpath: ".//*[@text='36 pieces']",
    ios: "(.//*[@name='36 pieces'])[3]",
  },

  // bone-out wing quantities
  chooseEight: {
    xpath: ".//*[@text='8 pieces']",
    ios: "(.//*[@name='8 pieces'])[3]",
  },
  chooseSixteen: {
    xpath: ".//*[@text='16 pieces']",
    ios: "(.//*[@name='16 pieces'])[3]",
  },
  chooseTwentyfour: {
    xpath: ".//*[@text='24 pieces']",
    ios: "(.//*[@name='24 pieces'])[3]",
  },
  chooseFortyeight: {
    xpath: ".//*[@text='48 pieces']",
    ios: "(.//*[@name='48 pieces'])[3]",
  },


  // Object locators for the Wings flavor selection
  chooseBufmild: {
    xpath: ".//*[@text='Buffalo mild']",
    ios: "~Buffalo mild",
  },
  chooseBufmed: {
    xpath: ".//*[@text='Buffalo medium']",
    ios: "~Buffalo medium",
  },
  chooseBufhot: {
    xpath: ".//*[ends-with(@text, 'hot')]",
    ios: "~Buffalo burnin' hot",
  },
  chooseHonBBQ: {
    xpath: ".//*[@text='Honey BBQ']",
    ios: "~Honey BBQ",
  },
  chooseGarparm: {
    xpath: ".//*[@text='Garlic parmesan']",
    ios: "~Garlic parmesan",
  },
  chooseHawter: {
    xpath: ".//*[@text='Hawaiian teriyaki']",
    ios: "~Hawaiian teriyaki",
  },
  chooseSpicygar: {
    xpath: ".//*[@text='Spicy garlic']",
    ios: "~	Spicy garlic",
  },
  chooseCajdry: {
    xpath: ".//*[@text='Cajun dry rub']",
    ios: "~Cajun dry rub",
  },
  chooseLemonpep: {
    xpath: ".//*[@text='Lemon pepper dry rub']",
    ios: "~Lemon pepper dry rub",
  },
  chooseNaked: {
    xpath: ".//*[@text='Naked']",
    ios: "~Naked",
  },


  // Object locators for the Sides menu from the categories menu

  chooseGarlicKnots: {
    xpath: ".//*[@text='Stuffed garlic knots']/following::*[@text='ADD'][1]",
   ios: "(.//*[@name='Add to Order'])[1]",
    //ios: "~Stuffed garlic knots//following::*[contains(@label,'ADD')]",
  },
  chooseBreadSticks: {
    xpath: ".//*[@text='Breadsticks']/following::*[@text='CONTINUE'][1]",
    ios: "(.//*[@name='Add to Order'])[2]"
  },
  chooseCSticks: {
    xpath: ".//*[@text='Cheese sticks']/following::*[@text='CONTINUE'][1]",
    ios: "(.//*[@name='Add to Order'])[3]",
    //ios:"(.//*[@name='CONTINUE'])[2]",
  },
  chooseFries: {
    xpath: ".//*[@text='CONTINUE']",
   // ios: "(.//*[@name='CONTINUE'])[3]",
    ios: "~CONTINUE",
  },
  chooseFriedMozz: {
    xpath: ".//*[@text='Fried mozzarella sticks']/following::*[@text='ADD'][1]",
    ios: "~Fried mozzarella sticks/following::*[@text='ADD'][1]"
  },
  pepPzoneS: {
    xpath: ".//*[starts-with(@text, 'Pepperoni')]/following::*[@text='ADD'][1]",
    ios: "~	Pepperoni P'ZONE®/following::*[@text='ADD'][1]",
  },
  meatyPzoneS: {
    xpath: ".//*[starts-with(@text, 'Meaty')]/following::*[@text='ADD'][1]",
    ios: "~Meaty P'ZONE®/following::*[@text='ADD'][1]",
  },
  supremoPzoneS: {
    xpath: ".//*[starts-with(@text, 'Supremo')]/following::*[@text='ADD'][1]", 
    ios: "~Supremo P'ZONE®/following::*[@text='ADD'][1]",
  },


  // Object locators for the Sides sub menus
  chooseStrfries: {
    xpath: ".//*[@text='Straight-cut']",
    ios: "~Straight-cut",
  },
  chooseCajunfries: {
    xpath: ".//*[@text='Cajun seasoned']",
    ios: "~Cajun seasoned",
  },
  chooseLemfries: {
    xpath: ".//*[@text='Lemon pepper seasoned']",
    ios: "~Lemon pepper seasoned",
  },
  chooseOrder: {
    xpath: ".//*[@text='Order']",
    ios: "~Order",
  },
  chooseDoubleorder: {
    xpath: ".//*[@text='Double order']",
    ios: "~Double order",
  },

  //Object locater for side styles

  sidestyle:
  {
  ios: "~With Cheese",
  },


  // Object locators for the Desserts menu from the categories menu
  cinnabonMinis: {
    xpath: ".//*[ends-with(@text, 'mini rolls')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  hersheysCookie: {
    xpath: ".//*[ends-with(@text, 'cookie')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },
  hersheysBrownie: {
    xpath: ".//*[ends-with(@text, 'brownie')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[3]",
  },
  cinnamonSticks: {
    xpath: ".//*[@text='Cinnamon sticks']/following::*[@text='ADD'][1]",
    ios: "~Naked",
  },
  applePies: {
    xpath: ".//*[@text='Apple pies']/following::*[@text='ADD'][1]",
    ios: "~Naked",
  },
  creamcheeseFrosting: {
    xpath: ".//*[ends-with(@text, 'Frosting')]/following::*[@text='ADD'][1]",
    ios: "~Naked",
  },
  icingDip: {
    xpath: ".//*[@text='Icing dip']/following::*[@text='ADD'][1]",
    ios: "~Naked",
  },


  // Object locators for the Sauces menu from the categories menu
  marinara: {
    xpath: ".//*[@text='Marinara']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  blueCheese: {
    xpath: ".//*[@text='Blue cheese']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },
  honeyBBQsauce: {
    xpath: ".//*[@text='Honey BBQ']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[3]",
  },
  ranch: {
    xpath: ".//*[@text='Ranch']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[4]",
  },
  garlic: {
    xpath: ".//*[@text='Garlic']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[5]",
  },
  creamcheeseFrosting: {
    xpath: ".//*[ends-with(@text, 'Frosting')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[7]",
  },
  icingDip: {
    xpath: ".//*[@text='Icing dip']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[8]",
  },
  salsa: {
    xpath: ".//*[@text='Buffalo medium']/following::*[@text='ADD'][1]",
  },


  // Object locators for the drinks menu from the categories menu
  choose20oz: {
    xpath: ".//*[@text='20 oz.']",
    ios: "(.//*[@name='20 oz.'])[3]",
  },
  choose2L: {
    xpath: ".//*[@text='2 Liter']",
    ios:"(.//*[@name='2 Liter'])[3]",
  },
  choose6Pack: {
    xpath: ".//*[@text='6 Pack - 12 oz bottles']",
    ios: "(.//*[@name='6 Pack - 12 oz bottles'])[3]",
  },
  choose2Pack: {
    xpath: ".//*[@text='2 Pack - 12 oz bottles']",
    ios: "(.//*[@name='2 Pack - 12 oz bottles'])[3]",
  },
  chooseSmallBot: {
    xpath: ".//*[@text='Small Bottle']",
    ios: "(.//*[@name='Small Bottle'])[3]",
  },
  choose16oz: {
    xpath: ".//*[@text='16.9 oz.']",
    ios: "(.//*[@name='16.9 oz.'])[3]",
  },
  choose12oz: {
    xpath: ".//*[@text='12 oz.']",
    ios: "(.//*[@name='12 oz.'])[3]",
  },
  chooseFour: {
    xpath: ".//*[@text='PEPSI-COLA® 4-Pack']", 
    ios: "(.//*[@name='PEPSI-COLA® 4-Pack'])[3]",
  },

  // Object locators for the different  20oz drinks and 2 Liter
  choosePepsi: {
    xpath: ".//*[contains(@text, 'PEPSI')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  chooseDietpepsi: {
    xpath: ".//*[contains(@text, 'DIET PEPSI')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },
  chooseMTNdew: {
    xpath: ".//*[contains(@text, 'MTN DEW')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[3]",
  },
  chooseDietMTNdew: {
    xpath: ".//*[contains(@text, 'DIET MTN')]/following::*[@text='ADD'][1]",
  },
  chooseAquafina: {
    xpath: ".//*[contains(@text, 'Aquafina')]/following::*[@text='ADD'][1]",
  },
  chooseDrpep: {
    xpath: ".//*[contains(@text, 'Dr Pepper')]/following::*[@text='ADD'][1]",
  },
  chooseDietDrpep: {
    xpath: ".//*[contains(@text, 'Diet Dr Pepper')]/following::*[@text='ADD'][1]",
  },


  // Object locators for the Four 20oz drink pack, each has a plus or minus amount, values below are for the plus sign...to add to the four pack
  chooseDrpep4: {
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
  ios: "(.//*[@name='Increment Quantity'])[1]",
  },
  choosePepsi4: {
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
    ios: "(.//*[@name='Increment Quantity'])[2]",
  },
  chooseDietpep4: {
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[4]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
    ios: "(.//*[@name='Increment Quantity'])[3]",
  },
  chooseMTdew4: {
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
    ios: "(.//*[@name='Increment Quantity'])[4]",
  },

  // Object locators for the different 6pack, 2pack and 12oz 
  chooseCoorsLight: {
    xpath: ".//*[starts-with(@text, 'Coors')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  chooseBlueMoon: {
    xpath: ".//*[starts-with(@text, 'Blue')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },
  chooseMillerLife: {
    xpath: ".//*[starts-with(@text, 'Miller')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[3]",
  },
  chooseBudLight: {
    xpath: ".//*[starts-with(@text, 'Bud')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  chooseBudweiser: {
    xpath: ".//*[starts-with(@text, 'Budweiser')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[5]",
  },
  chooseDosEquis: {
    xpath: ".//*[starts-with(@text, 'Dos')]/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[6]",
  },

  // Object locators for the different Small Bottle
  chooseStrawberry: {
    xpath: ".//*[starts-with(@text, 'Strawberry & Raspberry')]/following::*[@text='ADD'][1]",
  },
  chooseApple: {
    xpath: ".//*[starts-with(@text, 'Apple Fruit')]/following::*[@text='ADD'][1]",
  },
  chooseBerry: {
    xpath: ".//*[starts-with(@text, 'Berry Burst Fruit')]/following::*[@text='ADD'][1]",
  },

  // Object locators for the different 16.9 oz 
  chooseAquafina: {
    xpath: ".//*[starts-with(@text, 'AQUA')]/following::*[@text='ADD'][1]",
  },

  // Object locators for the different dialogs related to booze engine
  boozeAgeDialog: {
    xpath: ".//*[@text='MUST BE 21 OR OLDER']",
  },
  boozeDialogY: {
    xpath: ".//*[@text='YES']",
  },
  boozeNotselling: {
    xpath: ".//*[@text='Not Able to Sell Beer']",
  },
  

  // Objects locators for the Salads
  gardenSalad: {
    xpath: ".//*[@text='Shareable garden salad']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  sidecaesarSalad: {
    xpath: ".//*[ends-with(@text, 'classic caesar salad')]/following::*[@text='CONTINUE'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },
  sharecaesarSalad: {
    xpath: ".//*[@text='Shareable classic caesar salad']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[3]",
  },
  wingstreetSalad: {
    xpath: ".//*[ends-with(@text, 'buffalo chicken salad')]/following::*[@text='ADD'][1]",
  },
  zestySalad: {
    xpath: ".//*[@text='Zesty Italian salad']/following::*[@text='CONTINUE'][1]",
  },
  sidegardenSalad: {
    xpath: ".//*[@text='Side garden salad']/following::*[@text='CONTINUE'][1]",
  },
  asianSalad: {
    xpath: ".//*[@text='Asian salad']/following::*[@text='CONTINUE'][1]",
  },

  // Objects locators for the salad dressings
  chooseRanch: {
    xpath: ".//*[@text='Ranch']",
    ios: "~Ranch",
  },
  chooseBlue: {
    xpath: ".//*[@text='Blue cheese']",
    ios:"~Blue cheese",
  },
  chooseCaesar: {
    xpath: ".//*[@text='Caesar']",
    ios: "~Caesar",
  },
  chooseItalian: {
    xpath: ".//*[@text='Creamy Italian']",
    ios: "~Creamy Italian",
  },
  chooseNone: {
    xpath: ".//*[@text='No dressing']",
    ios: "~No dressing",
  },


  // Objects locators for the Soups menu from main
  chooseCup: {
    xpath: ".//*[@text='Cup']",
    ios: "(.//*[@name='Cup'])[3]",
  },
  chooseBowl: {
    xpath: ".//*[@text='Bowl']",
    ios: "(.//*[@name='Bowl'])[3]",
  },

  // Objects locators for types of soups
  tomatoSoup: {
    xpath: ".//*[@text='Tomato basil soup']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  BroccoliSoup: {
    xpath: ".//*[@text='Broccoli and cheese soup']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },


  // Object locators for the Sandwiches
  honeyBBQ: {
    xpath: ".//*[@text='Honey BBQ chicken sandwich']/following::*[@text='CONTINUE'][1]",
    ios: "(.//*[@name='Add to Order'])[1]",
  },
  blackForest: {
    xpath: ".//*[@text='Black forest ham & cheese sandwich']/following::*[@text='CONTINUE'][1]",
    ios: "(.//*[@name='Add to Order'])[2]",
  },
  steakCheese: {
    xpath: ".//*[@text='Steak & cheese hoagie']/following::*[@text='ADD'][1]",
    ios: "(.//*[@name='Add to Order'])[3]",
  },
  supremo: {
    xpath: ".//*[@text='Supremo sandwich']/following::*[@text='CONTINUE'][1]",
    ios: "(.//*[@name='Add to Order'])[4]",
    //ios:"(.//*[@name='CONTINUE'])[3]",
  },

  // Object locators for the Sandwich options
  chooseWhole: {
    xpath: ".//*[@text='Whole']",
    ios: "~Whole",
  },
  chooseKids: {
    xpath: ".//*[starts-with(@text, 'Kid')]",
    ios: "~Kid's"
  },
  chooseFries: {
    xpath: ".//*[@text='Straight-cut fries']",
    ios: "~Straight-cut fries"
  },
  chooseChips: {
    xpath: ".//*[@text='Chips']",
    ios: "~Chips",
  },
  chooseNone: {
    xpath: ".//*[@text='No option']",
    ios: "~No option",
  },

};
