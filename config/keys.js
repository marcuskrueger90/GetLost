const dotenv = require('dotenv');
// config() will read the .env file (which should never be committed), parse the contents, and assign it to process.env.
dotenv.config();

module.exports = {
  mongoURI: "mongodb://localhost:27017/userdb",
  secretOrKey: "S0cc3rM4n!69",
  noonlightToken: process.env.NOONLIGHT_TOKEN
};
