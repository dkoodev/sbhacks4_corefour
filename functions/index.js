
const functions = require("firebase-functions")
const cors = require("cors")
const express = require("express")

/* Express with CORS & automatic trailing '/' solution */
const app = express()
app.use(cors({ origin: true }))

const router = require('./routes');
app.use('/', router);

// not as clean, but a better endpoint to consume
const api = functions.https.onRequest((request, response) => {
  if (!request.path) {
    request.url = `/${request.url}` // prepend '/' to keep query params if any
  }
  return app(request, response)
})

module.exports = {
  api
}
