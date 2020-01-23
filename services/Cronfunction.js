const CronJob = require('cron').CronJob;
const noonlight = require('./noonlight');

const Cronjobfunc = () => {
  console.log('Starting cron job to run Noonlight and other functions.');
  const job = new CronJob('0 */60 * * * *', function() {
    const d = new Date();
    console.log('Every 60 minutes - Cron last ran:', d);
    //PUT FUNCTIONS HERE TO RUN IN CRON EVERY 60 MINUTES (changed to 60 minutes to test Heroku's timeout)

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
  console.log('Start success. Cron runs every two mintes.');
  job.start();
  };

module.exports = Cronjobfunc;
