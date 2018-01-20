// var firebase = require('firebase-admin');
//
// // var serviceAccount = require(process.env.FIREBASE_SERVICE_ACCOUNT_KEY_PATH);
// var serviceAccount = require("./sbhacks-corefour-firebase-adminsdk-qict0-9ef440dd5c.json");
//
// // Set the configuration for your app
// // Initialize Firebase
//
// firebase.initializeApp({
//   credential: firebase.credential.cert(serviceAccount),
//   databaseURL: 'https://sbhacks-corefour.firebaseio.com',
//   storageBucket: 'gs://sbhacks-corefour.appspot.com'
// });
//
//
// // Get a reference to the database service
// var storage = firebase.storage();

var storage = require('@google-cloud/storage')();


module.exports = storage;
