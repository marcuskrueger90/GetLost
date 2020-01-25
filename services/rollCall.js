const usersController = require("../controllers/usersController");

module.exports = {
  // Check each user for trip info and send alarms or clear trip info accordingly
  userRollCall: () => {

    // @TODO make users a returned list of all users in db
    let users;

    for (var i = 0; users.length > i; i++) {
      if (usersController.isTripPlanned(users[i])) {
        if (usersController.isTripEnded(users[i])) {
          dispatchAlarm(users[i]);
          clearTrip(users[i]);
        }
      }
    }
  }
};
