const CronJob = require("cron").CronJob;
const rollCall = require("./rollCall");
var moment = require("moment");

const Cronjobfunc = () => {
  console.log("Starting cron job to run Noonlight and other functions.");
  const job = new CronJob("0 */1 * * * *", function() {
    // console.log("Minutely cron job just ran at:    " + moment(new Date()).format("MM-DD-YYYY HH:mm A"));
    // PUT FUNCTIONS HERE TO RUN IN CRON EVERY 1 MINUTE
    rollCall.userRollCall();
  });
  console.log("Start success. Cron runs every minute.");
  job.start();
};

module.exports = Cronjobfunc;
