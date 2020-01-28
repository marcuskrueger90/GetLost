const usersController = require("../controllers/usersController");
const noonlight = require("./noonlight");

module.exports = {
  // Check each user for trip info then send alarms and clear trip info accordingly
  userRollCall: () => {
    usersController.findAll().then(users => {
      for (var i = 0; i < users.length; i++) {
        // check if the user has trip info present in their db record
        if (usersController.doesTripExist(users[i])) {
          // if it's past the user's scheduled return time, send an alarm and clear the user's trip info
          if (usersController.isItPastScheduledReturn(users[i])) {
            noonlight.dispatchAlarm(users[i]);
            usersController.clearUserTrip(users[i]);
            console.log("Trip info cleared for: " + users[i].name);
          }
        }
      }
    });
  }
};
