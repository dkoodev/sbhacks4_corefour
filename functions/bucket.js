// Require gcloud
var gcloud = require('google-cloud');

// Enable Storage
var gcs = gcloud.storage({
  projectId: 'sbhacks-corefour',
  keyFilename: './sbhacks-corefour-firebase-adminsdk-qict0-9ef440dd5c.json'
});

// Reference an existing bucket.
var bucket = gcs.bucket('gs://sbhacks-corefour.appspot.com');
//
// // Upload a local file to a new file to be created in your bucket.
// bucket.upload('/photos/zoo/zebra.jpg', function(err, file) {
//   if (!err) {
//     // "zebra.jpg" is now in your bucket.
//   }
// });
//
// // Download a file from your bucket.
// bucket.file('giraffe.jpg').download({
//   destination: '/photos/zoo/giraffe.jpg'
// }, function(err) {});
// console.log(bucket);
module.exports = bucket;
