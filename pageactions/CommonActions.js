"use strict";

let I;
let assert = require("assert");
let yaml = require("js-yaml");
let fs = require("fs");
let Imap = require("imap");
let path = require("path");
let read = require("string-to-stream");
let moment = require("moment");


module.exports = {

  _init() {
    I = actor();
  },

  /**
   * To get the path of the root directory.
   * @param subDirectory
   * @return {string}
   */
  getRootDirectory: (subDirectory) => path.parse(__dirname).dir.split(subDirectory)[0] + "/",

  /**
   * Function for comparing expected vs actual
   * @param expectedText
   * @param actualText
   */
  validateText(expectedText, actualText) {
    assert.equal(expectedText, actualText);
  },
  /**
   * Function for comparing expected vs actual for inequality
   * @param expectedText
   * @param actualText
   */
  validateTextNotEqual(expectedText, actualText) {
    assert.notEqual(expectedText, actualText);
  },

  /**
   * Compare 2 json objects
   * @param actual
   * @param expected
   */
  jsonValidator(actual, expected) {
    assert.equal(JSON.stringify(actual), JSON.stringify(expected));
  },

  /**
   * Function to return the data from yml file
   * @return yaml data
   */
  readYaml(filePath) {
    let datafile;
    let isDev = true;
    if (filePath === undefined) {
      process.argv.forEach((val, index) => {
        if (val.includes("env")) {
          let env = JSON.parse(val);
          // console.log("Enviroment: " + env.env);
          datafile = this.getRootDirectory("features") + "data/envs/" + env.env + ".yaml";
          isDev = false;
        }
      });
      if (isDev) {
        console.log("Enviroment: Developer");
        datafile = this.getRootDirectory("features") + "data/envs/dev.yaml";
      }
    } else {
      datafile = this.getRootDirectory("features") + filePath;
    }
    let yamlData = yaml.safeLoad(fs.readFileSync(datafile, "utf8"));
    return yamlData;
  },

  /**
   * @return actionimports yml file data
   */
  importActions() {
    let datafile;
    datafile = this.getRootDirectory("data") + "/data/imports/actionimports.yaml";
    let yamlData = yaml.safeLoad(fs.readFileSync(datafile, "utf8"));
    return yamlData;
  },

  /**
   * @return pageimports yml file data
   */
  importPages() {
    let datafile;
    datafile = this.getRootDirectory("data") + "/data/imports/pageimports.yaml";
    let yamlData = yaml.safeLoad(fs.readFileSync(datafile, "utf8"));
    return yamlData;
  },

  // Robert trying to figure out how to get swipe to work - one of the parts
  importConfig() {
    let datafile;
    datafile = this.getRootDirectory("data") + "/data/imports/appiumimports.yaml";
    let yamlData = yaml.safeLoad(fs.readFileSync(datafile, "utf8"));
    return yamlData;
  },


  /**
   * To login and read emails using imap
   * Connection parameters:
   * @param {*} loginemail
   * @param {*} password
   * @param {*} host
   * @param {*} port
   * @param {*} isSecure
   *
   * search and return parameters
   * @param {*} subject
   * @param {*} folder
   */
  findEmailBySubject(loginemail, password, host, port, isSecure, subject, folder) {
    // console.log(loginemail, password, host, port, isSecure, fromemail, date, subject, text, folder, msgstatus);
    let file = fs.createWriteStream(path.parse(__dirname).dir.split("utils")[0] + "/" + "data/temp/msg-body.yaml");
    let imap = new Imap({
      user: loginemail,
      password: password,
      host: host,
      port: port,
      tls: isSecure,
      tlsOptions: {
        rejectUnauthorized: false,
      },
    });

    function openInbox(cb) {
      imap.openBox(folder, true, cb);
    }
    // Search for the loginemail and write the contents into a text file
    imap.once("ready", function() {
      openInbox(function(err, box) {
        if (err) {
          return read(`Message: "There was an error in opening the inbox folder"\n${err}`).pipe(file);
        }
        imap.search([
          ["SUBJECT", subject],
        ], function(err, results) {
          if (err) {
            return read(`Message: "There was an error in opening the email"\n${err}`).pipe(file);
          }
          if (results.length > 0) {
            let f = imap.fetch(results, {
              bodies: "1",
            });
            console.log(results);
            f.on("message", function(msg, seqno) {
              // console.log('Message #%d', seqno);
              let prefix = "(#" + seqno + ") ";
              msg.on("body", function(stream, info) {
                // console.log(prefix + 'TEXT');
                streamToString(stream, (data) => {
                  read("Message: \"" + data + "\"").pipe(file);
                });
              });
              msg.once("end", function() {
                // console.log(prefix + 'Finished');
              });
            });
            f.once("error", function(err) {
              read(`Message: "There was an error in reading the body of the email"\n${err}`).pipe(file);
            });
            f.once("end", function() {
              console.log("Done fetching all messages!");
              imap.end();
            });
          } else {
            read("Message: \"There were no emails with the given search criteria\"").pipe(file);
            imap.end();
          }
        });
      });
    });
    imap.once("error", function(err) {
      read(`Message: "There was an error in opening the inbox folder" \n${err}`).pipe(file);
    });
    imap.once("end", function() {
      console.log("Connection ended");
    });
    imap.connect();
  },

  /**
   * Get Email Text from File
   */
  getEmail() {
    let file = this.getRootDirectory("features") + "data/temp/msg-body.yaml";
    let emailContents;
    emailContents = fs.readFileSync(file, "utf8");
    console.log("Get Email " + emailContents);
    return emailContents;
  },

  /**
   *
   * @param length (the length of number you want to get)
   * @return {number}
   */
  getRandomNumber(length) {
    let num = Math.pow(10, length);
    return Math.ceil((Math.random() + 1) * num / 10);
  },


  /**
   *
   * @param date (the date you want to format)
   * @param intoFormat (The type/format you want to change) (EX: "MM/DD/YYYY hh:mm A" )
   * @return {string}
   */
  formatDate(date, intoFormat) {
    return moment(date).format(intoFormat);
  },


};
