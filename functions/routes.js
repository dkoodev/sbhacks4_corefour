const express = require('express');
const router = express.Router();
var firebase = require('firebase-admin');
// const firebaseMiddleware = require('express-firebase-middleware');

router.use((req, res, next) => {
    next();
});

// Authentication
// router.use('/auth', firebaseMiddleware.auth);

router.get('/', (req, res) => {
    res.json({
        message: 'Home'
    });
});

router.get('/map', (req, res) => {
  res.json({
      message: `Hello there, user!`
  });
});

router.get('/form',(req, res)=>{
    res.send(' \
    <form action="https://us-central1-sbhacks-corefour.cloudfunctions.net/api/form" method="post"> \
      <div> \
        <label for="say">What greeting do you want to say?</label> \
        <input name="say" id="say" value="Hi"> \
      </div> \
      <div> \
        <label for="to">Who do you want to say it to?</label> \
        <input name="to" value="Mom"> \
      </div> \
      <div> \
        <button>Send my greetings</button> \
      </div> \
    </form> \
    ')
});

router.get('/hello', (req, res) => {
    res.json({
        // message: `You're logged in as ${res.locals.user.email} with Firebase UID: ${res.locals.user.uid}`
        message: `Hello there, user!`
    });
});

// POST: report
router.post('/report', (req, res)=>{
    let name = req.body.name;
    let description = req.body.description;
    let lat = req.body.lat;
    let lng = req.body.lng;
    let time = req.body.time;
    let severity = req.body.severity;

    // name, description, lat/long, time, suspicion, severity(possible immediate attention required), image
    // req.body.[name attribute of input tag] has the value
    function writeUserData(data) {
      firebase.database().ref('/').set({
        color: data
      });
    }
    writeUserData(req.body.report);
    console.log("You submitted the following data: ",req.body.report); // Must send back something or else post request doesn't end on front end
});

module.exports = router;
