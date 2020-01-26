// Load User model
const db = require("../models");
var moment = require("moment");

// Defining methods for the usersController
module.exports = {
  // return all users in db
  findAll: async () => {
    try {
      const results = await db.User.find({});
      return results;
    } catch (err) {
      throw err;
    }
  },
  // Check whether all trip info is present in a user's db record
  doesTripExist: user => {
    let isTripPresent = false;

    if (
      user.address &&
      user.city &&
      user.state &&
      user.zip &&
      user.tripEndDateTime
    ) {
      isTripPresent = true;
    }
    return isTripPresent;
  },
  // Check whether a user's scheduled return date/time is in the past
  isItPastScheduledReturn: user => {
    let isReturnTimePast = false;

    if (moment().isSameOrAfter(user.tripEndDateTime, "minute")) {
      isReturnTimePast = true;
    }
    console.log("    Checking return date/time for user:                       " + user.name)
    console.log("    The current date/time is:                                 " + moment(new Date()).format("MM-DD-YYYY HH:mm A"));
    console.log("    The user's scheduled return date/time is:                 " + moment(user.tripEndDateTime, "YYYY-MM-DD HH:mm:ss.SZ").format("MM-DD-YYYY HH:mm A"));
    console.log("    Has the user not checked in by the specified date/time?   " + isReturnTimePast);
    return isReturnTimePast;
  },
  // Take in a user and return an object of alarmInfo to use for a POST createAlarm request
  gatherAlarmInfo: user => {
    const alarmInfo = {
      name: user.name,
      phone: user.telephone,
      location: {
        address: {
          line1: user.address,
          city: user.city,
          state: user.state,
          zip: user.zip
        }
      }
    };

    return alarmInfo;
  },
  // Nullify all trip-related info from a user's db record
  clearUserTrip: async user => {
    try {
      const results = await db.User.findOneAndUpdate(
        { _id: user._id },
        {
          $set: {
            address: null,
            city: null,
            state: null,
            zip: null,
            tripEndDateTime: null
          }
        }
      );
      return results;
    } catch (err) {
      throw err;
    }
  }
};
