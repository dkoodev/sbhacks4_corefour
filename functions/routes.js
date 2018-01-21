const express = require('express');
const router = express.Router();
var firebase = require('firebase-admin');
var db = require('./database');
// const firebaseMiddleware = require('express-firebase-middleware');

router.use((req, res, next) => {
    next();
});

// Authentication
// router.use('/auth', firebaseMiddleware.auth);

router.get('/', (req, res) => {
    res.json({
        message: 'You are connected to Firebase!'
    });
});

router.get('/test', (req, res) => {
  res.json({
      message: 'You are connected to Firebase!'
  });
});

// POST: report
router.post('/report', (req, res)=>{
    let user = req.body.user;
    let name = req.body.name;
    let description = req.body.description;
    let lat = req.body.lat;
    let lng = req.body.lng;
    let time = req.body.time;
    let severity = req.body.severity;

    // name, description, lat/long, time, suspicion, severity(possible immediate attention required), image
    // req.body.[name attribute of input tag] has the value
    function writeUserData(data) {
      // Create a new post reference with an auto-generated id
      var reportListRef = db.ref('/reports');
      var newReportRef = reportListRef.push();
      newReportRef.set({
          user: data.user,
          name: data.name,
          description: data.description,
          lat: data.lat,
          lng: data.lng,
          time: data.time,
          severity: data.severity
      });
    }
    writeUserData(req.body);
    res.send("Report submitted successfully!")
});

module.exports = router;
