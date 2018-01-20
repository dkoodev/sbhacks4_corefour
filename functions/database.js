var firebase = require('firebase-admin');

var serviceAccount = require("./sbhacks-corefour-firebase-adminsdk-qict0-9ef440dd5c.json");

firebase.initializeApp({
  credential: firebase.credential.cert(serviceAccount),
  databaseURL: 'https://sbhacks-corefour.firebaseio.com',
  storageBucket: 'gs://sbhacks-corefour.appspot.com'
});


var db = firebase.database();



module.exports = db;