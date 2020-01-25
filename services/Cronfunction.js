const CronJob = require('cron').CronJob;
const noonlight = require('./noonlight');
const rollCall = require('./rollCall');

const Cronjobfunc = () => {
  console.log('Starting cron job to run Noonlight and other functions.');
  const job = new CronJob('0 */10 * * * *', function() {
    const d = new Date();
    console.log('Every 10 minutes - Cron last ran:', d);
    //PUT FUNCTIONS HERE TO RUN IN CRON EVERY 10 MINUTES (changed to 10 minutes to test Heroku's timeout)

    // @TODO finish rollCall service so that it's the only function to call here
    // rollCall.userRollCall();

    // @TODO replace alarmInfo with dynamic data
    const alarmInfo = {
      name: "Jake Campbell",
      phone: "19199397056",
      pin: "0345",
      location: {
        address: {
          line1: "1222 New Bern Ave",
          city: "Raleigh",
          state: "NC",
          zip: "27601"
        }
      }
    };

    noonlight.dispatchAlarm(alarmInfo);
  });
  console.log('Start success. Cron runs every ten mintes.');
  job.start();
  };

module.exports = Cronjobfunc;
