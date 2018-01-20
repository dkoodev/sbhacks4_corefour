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
