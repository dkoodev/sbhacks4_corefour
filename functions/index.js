var date = new Date();
var hour = date.getHours();
hour = (hour < 10 ? "0" : "") + hour;
var min  = date.getMinutes();
min = (min < 10 ? "0" : "") + min;
var sec  = date.getSeconds();
sec = (sec < 10 ? "0" : "") + sec;
var year = date.getFullYear();
var month = date.getMonth() + 1;
month = (month < 10 ? "0" : "") + month;
var day  = date.getDate();
day = (day < 10 ? "0" : "") + day;

console.log("-----------------------" + year + ":" + month + ":" + day + ":" + hour + ":" + min + ":" + sec + "----------------------");

const functions = require("firebase-functions");
const cors = require("cors");
const express = require("express");

var db = require("./database");
var ref = db.ref("/reports");

// Attach an asynchronous callback to read the data at our posts reference
ref.on("child_added", function(snapshot) {
    // console.log(snapshot.val());
    // console.log(snapshot.val()[snapshot.val().length-1]);
    snapshot.forEach(function(childSnapshot) {
        var key = childSnapshot.key;
        var childData = childSnapshot.val();
        console.log("child key: " + key);
        console.log("childData: " + childData);

    });

}, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
});


/* Express with CORS & automatic trailing '/' solution */
const app = express();
app.use(cors({ origin: true }));

const router = require('./routes');
app.use('/', router);

// not as clean, but a better endpoint to consume
const api = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app(request, response)
});





module.exports = {api}
