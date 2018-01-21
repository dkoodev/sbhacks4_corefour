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

const functions = require("firebase-functions")
const cors = require("cors")
const express = require("express")
const twilio = require("./twilio")

twilio.messages.create({
    body: 'Hello from Node',
    to:     '+12134074484',  // Text this number
    from:   '+15622225193' // From a valid Twilio number
})
.then((message) => console.log(message.sid));

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

module.exports = api
