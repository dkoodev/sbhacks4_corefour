require('dotenv').load();

var accountSid = process.env.TWILIO_SID; // Your Account SID from www.twilio.com/console
var authToken = process.env.TWILIO_AUTHTOKEN;   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);

sendText =  function sendTextMessage(phoneNumber, message){
    console.log("Text sent! : " + message);

    client.messages.create({
        body: message,
        to:     phoneNumber,  // Text this number
        from:   '+15622225193' // From a valid Twilio number
    })
    .then((message) => console.log(message.sid));
}

module.exports = sendText;
