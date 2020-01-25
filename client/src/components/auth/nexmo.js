const Nexmo = require('nexmo');

const nexmo = new Nexmo({
    apiKey: '1b5368a3',
    apiSecret: 'ejPQEPnu2jD9Vly2',
});
  
const from = '12192077286';
const to = '19198868533';
const text = 'Hello please work 👋';
// let text = "👋Hello from Nexmo";
 
nexmo.message.sendSms(from, to, text, {
    type: "unicode"
  }, (err, responseData) => {
    if (err) {
      console.log(err);
    } else {
      if (responseData.messages[0]['status'] === "0") {
        console.log("Message sent successfully.");
      } else {
        console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
      }
    }
  })