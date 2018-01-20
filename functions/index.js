// const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const functions = require("firebase-functions")
const cors = require("cors")
const express = require("express")

/* Express with CORS & automatic trailing '/' solution */
const app3 = express()
app3.use(cors({ origin: true }))
app3.get("*", (request, response) => {
  response.send(
    "Hello from Express on Firebase with CORS! No trailing '/' required!"
  )
})

// not as clean, but a better endpoint to consume
const api3 = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app3(request, response)
})

module.exports = {
  api3
}
