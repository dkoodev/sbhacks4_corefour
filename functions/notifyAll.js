var admin = require('firebase-admin');
var twilio = require('./twilio');

var lister = function listAllUsers(message, nextPageToken) {
  // List batch of users, 1000 at a time.
  admin.auth().listUsers(1000, nextPageToken)
    .then(function(listUsersResult) {
      listUsersResult.users.forEach(function(userRecord) {
        console.log("user", userRecord.toJSON());
        twilio(userRecord.phoneNumber, message);
      });
      if (listUsersResult.pageToken) {
        // List next batch of users.
        listAllUsers(message, listUsersResult.pageToken)
      }
    })
    .catch(function(error) {
      console.log("Error listing users:", error);
    });
}

module.exports = lister;
