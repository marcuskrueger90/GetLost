const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  phone: {
    type: String,
    required: false
  },
  owner_id: {
    type: String,
    required: false
  },
  user_id: {
    type: Schema.ObjectId,
    auto: true,
    required: true
  },
  trip: {
    location: [
      {
        address: {
          type: String
        },
        city: {
          type: String
        },
        state: {
          type: String
        },
        zip: {
          type: String
        }
      }
    ],

    tripEndDateTime: {
      type: Date
    },
    pin: {
      type: Number
    },
    alarmDispatched: {
      type: Boolean,
      default: false
    },
    alarm_id: {
      type: String
    }
  }
});

module.exports = User = mongoose.model("users", UserSchema);

// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// // Create Schema
// const UserSchema = new Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true
//   },
//   password: {
//     type: String,
//     required: true
//   },
//   date: {
//     type: Date,
//     default: Date.now
//   }
// });

// module.exports = User = mongoose.model("users", UserSchema);
