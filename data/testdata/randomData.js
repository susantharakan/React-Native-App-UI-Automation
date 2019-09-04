let Data = require('chance');
let moment = require('moment');

let data = new Data();
moment().format();
let today = new Date();
let todaysDate = today.getMonth() + 1 + '/' + (today.getDate() - 1) + '/' + today.getFullYear();

module.exports = {

  /**
   *  creates random test data
   *
   * @returns {*}
   */

  todaysDate() {
    return todaysDate;
  },

  /**
   * returns valid first name
   * @returns {ElementFinder|any|any[]|*}
   */
  validFirstName() {
    let newname = data.first();
    newname = newname.replace(/\s+/g, '');
    return newname;
  },

  /**
   * returns valid last name
   * @returns {ElementFinder|any|any[]|*}
   */
  validLastName() {
    let newname = data.last();
    newname = newname.replace(/\s+/g, '');
    return newname;
  },

  /**
   * returns valid name
   */
  validName() {
    return data.name();
  },

  /**
   * returns valid address
   */
  validStreetAddress() {
    return data.address();
  },

  /**
   * returns valid city
   */
  validCity() {
    return data.city();
  },

  /**
   * returns valid state
   */
  validState() {
    return data.state();
  },

  /**
   * returns valid zip
   */
  validZip() {
    return data.zip();
  },

  /**
   * returns valid birth date over 21 years old
   * @returns {*}
   */
  valid21PlusBirthDate() {
    let newBirthday = data.birthday({ string: true, year: data.year({ min: 1935, max: 1997 }) });
    return moment(newBirthday, "M/D/YYYY").format("MM/DD/YYYY");

  },

  /**
   * returns valid email
   * @returns {*|{emailMrktng, grpEmail, optOutEmail}|{xpath}}
   */
  validEmail() {
    let newemail = data.last() + data.integer({ min: 10, max: 10000 }) + "@yum.com";
    newemail = newemail.replace(/\s+/g, '');
    return newemail;
  },

  /**
   * returns valid phone number
   */
  validPhoneNumber() {
    return data.phone({ formatted: false });
  },


  /**
   * returns valid date in the future
   */
  validFutureDate(){
    let dateSetter = new Date();
    let nextYear = dateSetter.getFullYear() + 1;
    let maxYear = nextYear + 5;
    return data.date({ string: true, year: data.year({ min: nextYear, max: maxYear }) });
  },

};
