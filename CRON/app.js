import schedule from "node-schedule";
import { CronJob } from "cron";

// const setDate = new Date("2023-08-15T16:47:00.000+5:00");

// schedule.scheduleJob('*/5 * * * * *', () => {
//   console.log("Job runned");
// });


const job = new CronJob('* * * * * *', () => {
  console.log('This shit runs every second', null, true, "Tashkent/Uzbekistan");
})
job.start();