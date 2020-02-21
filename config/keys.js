const dotenv = require('dotenv');
// config() will read the .env file (which should never be committed), parse the contents, and assign it to process.env.
dotenv.config();

module.exports = {
  mongoURI: "mongodb://localhost:27017/userdb",
  secretOrKey: "Something1!",
  noonlightToken: process.env.NOONLIGHT_TOKEN
};
