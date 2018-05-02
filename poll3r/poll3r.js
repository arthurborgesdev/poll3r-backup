require('dotenv').config();
var request = require('request');
var traverse = require('traverse');
var tag = require('./js/tag');
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var reqForm = {
  meterTag: tag.meterTag,
  user: process.env.USERNAME_WEB,
  password: process.env.PASSWORD_WEB
}

var dbURL = 'mongodb://poll3r:pol%406xJ@localhost:27017/pm5560';
var db;

var meterData = function(collection) {
  var rxBuff = [];
  request.post({
    url: 'https://acbb50727ee6ae8780b9ac5276cfb5cf.resindevice.io',
    form: reqForm },
    function(error, response, body) {
      if (error) console.log(error); // changed to avoid ECONHOST error
      //console.log(response.statusCode);
      if (response.statusCode == 200) {
        rxBuff = body.split(",");
        if (rxBuff.length > 10) { // If buff is empty, don't save to DB
          var meterJson = tag.meterJson(rxBuff);
          traverse(meterJson).forEach(function (x) {
            if (x === "***") this.delete(stopHere=false);
          });
          traverse(meterJson).forEach(function (x) {
            if (x == "" || (x < 0.1 && x > 0) ) this.delete(stopHere=false);
          });
          console.log(meterJson);
          collection.insertOne(meterJson);
          console.log("gravou no banco");
        }
      }
    }
  ).on('error', function(e) { // added to avoid ECONHOST error
    console.log(e);
  });
}

MongoClient.connect(dbURL,{uri_decode_auth: true}, function(err, database) {
  assert.equal(null, err);
  db = database;
  console.log("Connected correctly to server");
  var hpCollection = db.collection('hp');

  setInterval(
    function () {
      meterData(hpCollection);
    },
    60000
  );

});

