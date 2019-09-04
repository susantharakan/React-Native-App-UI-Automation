"use strict";

module.exports = {

  // Object Locators for the deals

  // Object Locators for selecting $5LU deal
  fiveLUDeal: {
    xpath: ".//*[ends-with(@text, 'Each')]",
    //ios: "~($5 Lineup menu - 2 or more, $5 each)",
    ios: "(.//*[@name='$5 Lineup menu - 2 or more, $5 each $5.00 GET STARTED'])[2]",
  },
  // Object Locators for selecting $7.99 L 2T Deal
  seven99LDeal:
   {
    android: "$7.99 Large 2-topping pizza, online only",
    ios: '~$7.99 Large 2-topping pizza, online only',
    //ios: ".//*[contains(@label,'GO TO CHECKOUT')]",
   },
   cheesyBiteDeal:
   {
    xpath: ".//*[@text='Cheesy Bites Pizza ']",
    ios: ".//*[contains(@name,'Cheesy Bites Pizza')]",
   // ios: "~Cheesy Bites Pizza",
    //ios: ".//*[@name='Cheesy Bites Pizza']",
   },
  // Object locators for the $5 LU products

  pizza: {
    android: "Pizza",
    ios: "(.//*[@name='Pizza'])[3]",
  },
  pzone: {
    xpath: ".//*[ends-with(@text, 'Zone')]",
    //ios: "(.//*[@name='P'Zone'])[3]",
    //ios: ".//*[ends-with(@name, 'Zone')][3]",
    ios: ".//*[contains(@label='P'Zone')]"
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
    ios: "(.//*[@name='Desserts'])[3]",
  },
  drinks: {
    xpath: ".//*[@text='Drinks']",
  },
  buffalochickenPizza:
{
  xpath: ".//*[@text='Buffalo Chicken']",
  ios: "~Buffalo Chicken",
},
  pepPzone: {
  // xpath: ".//*[contains(text, 'Pepperoni')]/following::*[@text='ADD'][0]",
    xpath: ".//*[ends-with(@text, 'ZONE®')]/following::*[@text='ADD'][1]",
    ios: "~Pepperoni P'ZONE®",
  },
  buffaloWings: {
    xpath: ".//*[@text='Buffalo mild']",
    ios: "(.//*[@name='Buffalo mild'])[3]",
  },
  meatmarinaraPasta: {
    xpath: ".//*[ends-with(@text,'Meaty Marinara pasta')]",
    ios: "~Tuscani® Meaty Marinara pasta",

  },
  garlicKnots: {
    xpath: ".//*[@text='Stuffed garlic knots']/following::*[@text='ADD'][1]",
    ios: "~Stuffed garlic knots",
  },
  hersheysCookie: {

    xpath: ".//*[ends-with(@text, 'cookie')]/following::*[@text='ADD'][1]",
    ios: "~Ultimate HERSHEY'S® chocolate chip cookie"

  },

  // Object locators for the Four 20oz drink pack, each has a plus or minus amount, values below are for the plus sign...to add to the four pack
  chooseDrpep4: {
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
  },
  choosePepsi4: {
    ios: "~PEPSI®",
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
  },
  chooseDietpep4: {
    ios: "~DIET PEPSI®",
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[3]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
  },
  chooseMTdew4: {
    ios: "~MTN DEW®",
    xpath: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[5]/android.view.ViewGroup[1]/android.view.ViewGroup[4]/android.widget.ImageView",
  },
  add4Pk:
  {
  xpath: ".//*[@text='ADD']",
  ios: "(.//*[@name='ADD'])[2]"
  },
  // Object locators for 799 Large 2 T Deal

  cyo:
{
  android: "Create your own",
  ios: '~Create Your Own Product',
},
  handtossed:
{
  android: "Handtossed",
  ios: "(.//*[@name='Hand tossed'])[1]",
},
  hutFav:
{
  android: "Hut Favorite",
  ios: 	"(.//*[@name='Hut Favorite'])[1]",
  //ios: ".//*[contains(@label,'MOST POPULAR Hut Favorite')]",
},
  garlicbutterBlend:
{
  android: "Garlic Buttery Blend",
  ios: ".//*[contains(@label,'Garlic Buttery Blend')]",
},
  classMarinara:
{
  android: "Classic marinara",
  ios: "(.//*[@name='Classic marinara'])[1]",
},
  creamygarlicParm:
{
  android: "Creamy garlic parmesan",
  ios: ".//*[contains(@label,'Creamy garlic parmesan')]",
},
  regCheese:
{
  android: "Regular cheese",
  ios: "(.//*[@name='Regular cheese'])[1]",
},
  pepperoni:
{
  xpath: "Pepperoni",
},
  italianSausage:
{
  android: "Italian sausage",
  ios: '~Italian sausage',
},
  meatBall:
{
  android: "Meatball",
  ios: '~Meatball',
},
  topOk:
{
  android: "OK",
  ios: '~Ok',
},

  // Object locators for selecting Big Dinner Box

  bdb:
{
  xpath: ".//*[@text='Big Dinner Box']",
  ios: ".//*[contains(@label,'Big Dinner Box')]",
},
  // Object locators for selecting Big Dinner Box with Wingstreet bone-out wings

  bdbboneoutWings:
{
  xpath: ".//*[ends-with(@text, 'bone-out wings')]/following::*[@text='CONTINUE'][1]",
},
  bdbStep1:
{
  xpath: ".//*[@text='Step 1: Build your pizza']",
},
  bdbStep2:
{
  xpath: ".//*[@text='Step 2: Build your pizza']",
},
  bdbStep3:{
    xpath: ".//*[@text='Step 3: Choose breadsticks or upgrade to Cheese sticks']",
  },
  bdbStep4:
{
  xpath: ".//*[@text='Step 4: Pick your wings']",
},
  breadSticks: {
  xpath: ".//*[@text='Breadsticks']/following::*[@text='ADD'][1]",
  },

  // Object locators for Tuscani Tuesday deals
  ttfamsize:
{
  xpath: ".//*[ends-with(@text,'Family Size')]",
},

  ttpasta42:
{
  xpath: ".//*[ends-with(@text, 'Pasta for 2')]",
},
  pickyourPasta:
{
  xpath: ".//*[@text='Pick your pasta']",
},
  famsizePasta:
{
  xpath: ".//*[@text='Family Size Mix & Match Pasta']",
},
  chickenalfredoPasta: {
    xpath: ".//*[ends-with(@text,'Chicken Alfredo Pasta')]",
  },

// Object locators for Wing Wednesday Deals

wwboneoutWings:
{
  xpath: ".//*[@text='Wing Wednesday breaded bone-out wings']",
},

wwtraditionalWings:
{
  xpath: ".//*[@text='Wing Wednesday large traditional wings']",
},
pickyourWings:
{
  xpath: ".//*[@text='Pick your wings']",
},
choosewingsQuantity:
{
  xpath: ".//*[@text='Choose your quantity']",
},
choosewingsFlavor:
{
  xpath: ".//*[@text='Choose your flavor']",
},
wingsQuantity:
{
  xpath: ".//*[@text='6 pieces']",
},
wingsQuantity1:
{
  xpath: ".//*[@text='8 pieces']",
},
wingsFlavor:
{
  xpath: ".//*[@text='Buffalo mild']",
},

//objects for validating the deals screen appeared
dealsText: 
{
xpath: ".//*[@text='DEALS']",
},
secondDealsText:
{
xpath: "(.//*[@text='DEALS'])[2]",  
ios: ".//*[@label='DEALS']",
},
menutext: 
{
  ios: ".//*[@label='MENU']",
}

};

