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
  telephone: {
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
  
        line1: {
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
        },
        tripEndDateTime: {
          type: Date
        }
        
      
    });

  // trip: {
  //   location: 
  //     {
  //       address: {
  //         type: String
  //       },
  //       city: {
  //         type: String
  //       },
  //       state: {
  //         type: String
  //       },
  //       zip: {
  //         type: String
  //       }
  //     } ,

   


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
