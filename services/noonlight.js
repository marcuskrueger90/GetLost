const axios = require("axios");
const token = require("../config/keys").noonlightToken;
const usersController = require("../controllers/usersController");

module.exports = {
  // Take in a user and use their info to call gatherAlarmInfo and use the returned object to POST createAlarm request
  dispatchAlarm: user => {
    const alarmInfo = usersController.gatherAlarmInfo(user);

    // Send an alarm to Noonlight staff that prompts an emergency response (or test text to phone# provided if using sandbox token)
    return axios({
      method: "POST",
      url: "https://api-sandbox.noonlight.com/dispatch/v1/alarms",
      data: alarmInfo,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token
      }
    })
      .then(console.log("Alarm text sent to: " + alarmInfo.phone))
      .catch(err => console.log(err));
  }
};
