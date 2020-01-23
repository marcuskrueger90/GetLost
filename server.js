const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path');


const users = require("./routes/api/users");

const app = express();

// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://user:password1@ds263448.mlab.com:63448/heroku_sl2zt1hp")
    // db,
    // { useNewUrlParser: true, useUnifiedTopology: true }
  
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));
  app.use(express.json());
  app.use(express.urlencoded({extended: false}))


// Passport middleware
app.use(passport.initialize());

// Passport config
require("./config/passport")(passport);

// Routes
app.use("/api/users", users);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));


  app.get('*', (req, res)=>{

    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))

  })
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server up and running on port ${port} !`));
