// const express = require('express')
// const app = express()
//
// app.get('/', (req, res) => res.send('Hello World!'))
//
// app.listen(3000, () => console.log('Example app listening on port 3000!'))

var firebase = require("firebase");

// Initialize Firebase
// TODO: Replace with your project's customized code snippet
var config = {
  apiKey: process.env.FIREBASE_apiKey,
  authDomain: process.env.FIREBASE_authDomain,
  databaseURL: process.env.FIREBASE_databaseURL,
  storageBucket: "",
};
firebase.initializeApp(config);

var admin = require("firebase-admin");

var serviceAccount = require("path/to/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://sbhacks-corefour.firebaseio.com"
});

// Start Admin stuff
var admin = require("firebase-admin");

// Fetch the service account key JSON file contents
var serviceAccount = require("sbhacks-corefour-firebase-adminsdk-qict0-73374226da.json");

// Initialize the app with a null auth variable, limiting the server's access
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://databaseName.firebaseio.com",
  databaseAuthVariableOverride: null
});

// The app only has access to public data as defined in the Security Rules
var db = admin.database();
var ref = db.ref("/public_resource");
ref.once("value", function(snapshot) {
  console.log(snapshot.val());
});