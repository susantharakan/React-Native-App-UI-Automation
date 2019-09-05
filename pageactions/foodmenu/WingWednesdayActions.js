"use strict";

let I;
let imports;
let commonObjects;
let foodObjects;

module.exports = {

  _init(commonActions) {
    I = actor();
    imports = commonActions.importPages();
    commonObjects = eval(imports.commonObjects);
    foodObjects = eval(imports.deals);
  },
 
  // From the $5 LU, choose products
selectpickyourWings()
{
  I.waitForElement(foodObjects.pickyourWings);
  I.tap(foodObjects.pickyourWings);
I.waitForElementLeaveDom(commonObjects.progressBar);
},
selectchoosewingsQuantity()
{
  I.waitForElement(foodObjects.choosewingsQuantity);
  I.tap(foodObjects.choosewingsQuantity);
I.waitForElementLeaveDom(commonObjects.progressBar);
},
selectwingsQuantity()
{
  I.waitForElement(foodObjects.wingsQuantity);
  I.tap(foodObjects.wingsQuantity);
I.waitForElementLeaveDom(commonObjects.progressBar);
},
selectwingsQuantity1()
{
  I.waitForElement(foodObjects.wingsQuantity1);
  I.tap(foodObjects.wingsQuantity1);
I.waitForElementLeaveDom(commonObjects.progressBar);
},
selectchoosewingsFlavor()
{
  I.waitForElement(foodObjects.choosewingsFlavor);
  I.tap(foodObjects.choosewingsFlavor);
I.waitForElementLeaveDom(commonObjects.progressBar);
},

selectwingsFlavor()
{
  I.waitForElement(foodObjects.wingsFlavor);
  I.tap(foodObjects.wingsFlavor);
I.waitForElementLeaveDom(commonObjects.progressBar);
},


};
