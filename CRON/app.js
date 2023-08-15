import schedule from "node-schedule";

const setDate = new Date("2023-08-15T16:47:00.000+5:00");

schedule.scheduleJob('*/5 * * * * *', () => {
  console.log("Job runned");
});
