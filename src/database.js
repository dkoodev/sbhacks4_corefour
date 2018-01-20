const admin = require('./firebase-admin');

console.log("database.js ran");
// Get a database reference to our posts
var db = admin.database();
var ref = db.ref("/");

module.exports = ref;
