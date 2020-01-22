
// import React from 'react'
var CronJob = require('cron').CronJob;

const Cronjobfunc = () => {
    

  console.log('Starting cron job to run Noonlight and other functions.');
  const job = new CronJob('0 */3 * * * *', function() {
    const d = new Date();
    console.log('Every three minutes - Cron last ran:', d);
    //PUT FUNCTIONS HERE TO RUN IN CRON EVERY 3 MINUTES
  });
  console.log('Start success. Cron runs every three mintes.');
  job.start();

  }



export default Cronjobfunc;

  