# Welcome to the Pizza Hut Native App Automation Repository

# Reference Guides

https://codecept.io/mobile 
https://www.w3schools.com/xml/xpath_syntax.asp   
http://yaml.org/spec/1.2/spec.html   

Authors: Mobile App Support Team - PizzaHut.MobileAppSupport@yum.com
Jason Legako - jason.legako@yum.com

# Prerequisites and First Time Setup

Download and install Node.js from - https://nodejs.org/en/download/

Download and install Java from - https://java.com/en/download/

Download and install Python - https://www.python.org/

In terminal/bash/powershell install and configure test libraries and frameworks by running the following:

Install codeceptjs with webdriverIO support:

```bash
npm install -g npm install -g codeceptjs webdriverio
```

Install selenium-standalone: 

```bash 
npm install -g selenium-standalone
```

Install Appium: 

```bash
npm install -g Appium
```

Open a second console and start the Appium Server with this simple command"
```bash
Appium
```

BrowserStackLocal Using the scripts you can test ona  local device, or on browserstack. In order to test on Browserstack instead of running an appium server, you'll need to run a binary appriate for your OS from the collection of files inside of the project. the files have the following names:

BrowserStackLocal.exe - Windows
BrowserStackLocal - OSX / Mac
BrowserStackLocalunix - Docker / lunix

To run open a console and enter command:

./BrowserStackLocal --key yourbrowserstackkey --force-local

##### Running any Test using Scenarios from Features Files
You can run any test using the @tag from the scenario function inside of the files under the folders at \automation\features\, you can add @tags to create combinations of tests to be executed with a single tag.

```bash
codeceptjs run --grep @regression
```
Where "codeceptjs run" calls the test framework, "--grep @validMenuDessert" calls the specific test.

For debugging run with the --debug flag, and pause() inside of test files for breaks that you can run statements in manually.
```bash
codeceptjs run --debug --grep @regression
```
For verbose console log output use --verbose
```bash
codeceptjs run --verbose --grep @regression
```

# Options and configuration notes

##### codecept.json
This is the configuration file for codeceptjs

"uniqueScreenshotNames": false , make it "true" if you are getting "ENAMETOOLONG:" exception or if you want unique screenshot name

##### Test.js files
All main sceneario files must have Test as the last word in the filename, see features folder for examples.

For autocompletion on I objects add
```bash
/// <reference path="../../../autofill.d.ts" />
```
  in the very beginning of a test file to enable autocompletion for I object inside Scenario and within blocks.

##### Reporting tools

We use mochawesome reporter, you can run the reporter with the --reporter flag. Configuration for the reporter is in codecept.conf.js and package details are in this repo - https://www.npmjs.com/package/mochawesome. Reports are generated inside the "output" folder with screenshots and an html file.

codeceptjs run --grep @regression --reporter mochawesome

# Regression Suite 
#### @regression Current Sequential Runtime: 1 - 1.5 Hours
- The regression suite is the main automation suite for new builds and API changes. It's aim is to throughly check the most common functions and features the users work with within our app. The following sceanrios are included in a regression run:

###### Users
- Forgotton Password. @fp1
- New User App and Rewards Signup. @newUser
- New User Completed Transaction. @newUserTransaction

###### Localization
- Localize from deals using a delivery address. @deliveryfromdeals
- Localize using a zip code from menu. @carryoutfrommenu
- Localize to a test store. @995fromdeals

###### Transactions
- Creating CYO, Modifying CYO in the cart, and then transacting. @modifyorder
- Cheese Pizza Carryout Cash. @carryoutcheese
- Add upsell item with pizza transaction. @extraitem
- Pepperoni Pizza for Carryout with VISA. @visa
- Meat Lovers Pizza for carryout with Mastercard. @mastercard
- Supreme Pizza Transaction for Carryout with AMEX. @amex
- Backyard BBQ Chicken Pizza for Carryout. @discover
- Cheese Pizza Transaction for delivery. @validTransactionDelivery
- Pasta Menu Transaction. @pasta
- P'Zone Menu Transaction. @pzone
- Wings Menu Transaction. @wings
- Desserts Menu Transaction. @validTransactionDesserts
- Drinks Menu Transaction. @drinks
- Salads Menu Transaction. @salad
- Sandwiches Menu Transaction. @sandwich
- Sauces Menu Transaction. @sauces
- Sides Menu Transaction. @sides
- Soups Menu Transaction. @soups
- Full Menu Transaction. @fullmenu
- Coupon Transaction Test. @coupon
- Reordering a Favorite Order. @favorder
- Reordering the last order. @reorder
- Rewards transaction from Carryout. @rewards
- Booze test inside of purchase hours @booze1
- Booze test outside of purchase hours @booze2
- Guest login and checkout test @guest

###### Deals:
- Cheeseybites deal added to cart and transaction. @cheeseybite
- $5 Line Up deal added to cart and transaction. @5LU
- Big dinner Box deal added to cart and transaction. @bdb
- Validate editing cheeseybite deal. @dealedit

###### Misc
- Clear items in the cart. @emptycart
- Rewards Points Transaction Breadsticks with pizza @rewardsplusitems

# Sanity Suite 
#### @sanity Current Sequential Runtime: Less than 30 minutes.
- The sanity suite provides a quick glimpse into critial workflows and features with the app. With a focus on speed ensuring run time is a fraction of the full regression. The following sceanrios are included in a sanity run:

###### Users
- Forgotton Password. @fp1
- New User App and Rewards Signup. @newUser
- New User Completed Transaction. @newUserTransaction

###### Localization
- Localize from deals using a delivery address. @deliveryfromdeals
- Localize using a zip code from menu. @carryoutfrommenu

###### Transactions
- Cheese Pizza Transaction for delivery. @validTransactionDelivery
- Full Menu Transaction. @fullmenu
- Cheese Pizza Carryout Cash. @carryoutcheese
- Reordering the last order. @reorder
- Rewards transaction from Carryout. @rewards

# Localization Suite 
#### @localization
- The localization suite tests all of the known ways to localize to a store. The following scenarios are included in a localization run: 

- Using a delivery address from deals @deliveryfromdeals
- Using a delivery address from menu @deliveryfrommenu
- Using a delivery address from home @deliveryfromhome
- Using a delivery address from account @deliveryfromaccount
- Using a zip code from deals @carryfromdeals
- Using a zip code from menu @carryoutfrommenu
- Using a zip code from home @carryoutfromhome
- Using a zip code from account screen @carryoutfromaccount
- Using 995 from deals screen @995fromdeals
- Using 996 from menu screen @996frommenu
- Using 000127 from home screen @127fromhome
- Using 935 from account screen @935fromaccount

# All Completed Scenarios
#### codeceptjs run

-Validate change password, @cp
53.32s

-Validate forgot password, @regression @sanity @fp1
12.670s

-Coupon Transaction Test @regression @validTransactionPizza @coupon
2:07.667m

Validate the cheeseybite deal, @regression @susdemo @cheesybite
1:11.506m

Validate the $5 LU deal, @deals @regression @susdemo @5LU
1:28.228m

Validate the Big Dinner Box deal, @deals @regression @susdemo @bdb
55.513s

Validate the Tuscani Tuesday deal, @deals @ttd
1:10.53m

Validate the Wing Wednesday deal, @deals @wwd
1:15.541m

Favorite order @regression @favorder
1:15.611m

Using a delivery address from deals @localization @regression @sanity @delivery @deliveryfromdeals
55.975s

Using a delivery address from menu @localization @delivery @deliveryfrommenu
1:05.618m

Using a delivery address from home @localization @delivery @deliveryfromhome
54.279s

Using a delivery address from account @localization @delivery @deliveryfromaccount
57.773s

Using a zip code from deals @localization @carryout @carryfromdeals
40.325s

Using a zip code from menu @localization @regression @sanity @carryout @carryoutfrommenu
39.787s

Using a zip code from home @localization @carryout @carryoutfromhome
42.29s

Using a zip code from account screen @localization @carryout @carryoutfromaccount
43.577s

Using 995 from deals screen @localization @regression @teststores @995fromdeals
50.214s

Using 996 from menu screen @localization @teststores @996frommenu
35.427s

Using 000127 from home screen @localization @teststores @127fromhome
41.349s

Using 935 from account screen @localization @teststores @935fromaccount
47.291s

Delivery Cheese Pizza Transaction Cash @regression @sanity @transactions @cheese @validTransactionPizza @delivery
41.558s

Desserts Menu Transaction Test @regression @validTransactionDessert @desserts
49.154s

Drinks Menu Transaction Test @regression @drink
46.699s

Full Menu Transaction Test @regression @sanity @validTransactionPizza @fullmenu
41.370s

Pasta Menu Transaction Test @regression @pasta
2:14.269m

Cheese Pizza Transaction Cash @regression @sanity @transactions @carryoutcheese @validTransactionPizza
57.147s

Cheese Pizza Add Breadsticks Transaction @regression @transactions @extraitem
2:35.447m

Pepperoni Pizza Transaction VISA @regression @transactions @pepperoni @visa @validTransactionPizza
41.304s

Meat Lovers Pizza Transaction Mastercard @regression @transactions @mastercard @validTransactionPizza
2:04.985m

Supreme Pizza Transaction AMEX @regression @transactions @amex @validTransactionPizza
2:04.585m

Backyard BBQ Chicken Pizza Transaction Discover @regression @discover @transactions @validTransactionPizza - 1:20.268m

Edit Pizza Order @editOrder - 1:15.825m

PZone Menu Transaction Test @regression @transactions @pzone - 1:44.626m

Salads Menu Transaction Test @regression @salad - 1:10.711m

Sandwiches Menu Transaction Test @regression @sandwich - 1:10.948m

Sauces Menu Transaction Test @regression @sauces @transactions - 2:32.120m

Sides Menu Transaction Test @regression @sides - 2:17.594m

Soups Menu Transaction Test @regression @soup - 1:10.637m

Wings Menu Transaction Test @regression @wings - 2:55.519m

Reorder and transaction @regression @sanity @transactions @reorder - 2:09.345m

Rewards Points Transaction Breadsticks @regression @sanity @transactions @rewards @breadsticksreward - 45.945s

Register a new user and log in @regression @sanity @newUser - 41.98s

Register a new user and complete a transaction @regression @sanity @newUserTransaction @transactions - 1:54.767m

Modify Pizza in cart Transaction Cash @regression @modifyorder - 2:56.99m

Clear cart items @regression @emptycart 1:52.486m

Localization conditional test @localizetest 35.221s

swipe testing @swipetest 10.509s

Intentional failure @failtest 1:11.482m

Clear cart via API @clearcartapi 1ms

Booze test outside of purchase hours @booze2 2:00.897m

Validate editing cheeseybite deal. 1.25.87m

Rewards Points Transaction Breadsticks with pizza 2.37.39m

# Roadmap
- Dockerize repo.
- User Table for parallel tests
- @Morning, @afternoon, @evening regressions on schedule.
- Trigger for github, sending output folder to git repo. 
- ECONNREFUSED issue with webdriver
- Error: Session not started or terminated
- clear cart id
- Tipping
- All wings types
- All special pizzas
- All desserts
- All drinks
- Booze engine rules
- Flag and associated login logic for stage / prod, debug Akamai fix
- Move to React Repo / Test Driven Development Workflow
- Ordering items using rewards points with items in carts
- Parallel Execution (chunking algorithm)
- Machine Learning Framework implementation
- Timezone specific logic

# Blockers
- Akamai
- Tipping (unable to verify in labs)
- Checkout issue with multiple order in a row (sent back to menu from checkout)
- Cart issues with old orders (carts from recently placed orders appear in new installs/reloads)

# Needs Element Properties
- Plus and minus buttons to increase item counts
- Cart button
- Checkbox in checkout terms and agreement
