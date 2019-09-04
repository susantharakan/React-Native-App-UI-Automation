"use strict";
const Helper = codecept_helper;
const I = actor();
const fsPath = require('path');
const commonActions = require(fsPath.join(__dirname, '..', 'pageactions/CommonActions.js'));
let envFile = './data/envs/envAuth.yaml';
let envAuth = commonActions.readYaml(envFile);
let rp = require("request-promise");
let userKey = "RyAzYIiBQMB6ISN8CAOiulwmGHA68F4c";
let authResponseString;
let authBody = 
{
  "username": envAuth.email,
  "password": envAuth.password,
  "channel_id":"pizzahut"
};

class APIHelper extends Helper {

async clearCartAPI()
{


let authenticateUser = 
    {
    uri: "https://services-staging.digital.pizzahut.com/phdapi/v1/customer/login?key=" + userKey,
    method: "POST",
    body: authBody,
    json: true,
    headers: 
        {
        "akaatornr": "QOQAA",
        "Content-Type": "application/json",
        }
    };

  authResponseString = await rp(authenticateUser);
  //console.log("initial response auth_token " + authResponseString.auth_token);

  let deleteCart = 
  {
    uri: "https://services-staging.digital.pizzahut.com/phdapi/v1/session/clear?key=" + userKey,
    method: "DELETE",
    headers: 
    {
        "Auth-Token": authResponseString.auth_token,
        "Content-Type": "application/json",
        "cache-control": "no-cache",
    }
  };

  let processDeletion = await rp(deleteCart);
  console.log("User is logged out and cart is cleared");
}

}

module.exports = APIHelper;
