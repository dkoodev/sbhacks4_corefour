const express = require('express');
const router = express.Router();
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


router.get('/hello', (req, res) => {
    res.json({
        // message: `You're logged in as ${res.locals.user.email} with Firebase UID: ${res.locals.user.uid}`
        message: `You're logged in aswith Firebase UID:`
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

// Example of POST request handling
router.post('/form', (req, res)=>{
    // req.body.[name attribute of input tag] has the value
    res.send(""); // Must send back something or else post request doesn't end on front end
});

module.exports = router;
