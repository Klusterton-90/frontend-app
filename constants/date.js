// date object
const date = new Date();
// get the month string
const month = date.toLocaleString("default", { month: "short" });
// get the 12 hour time
const options = { timeStyle: "short", hour12: true };
// get the current date
export const currentDate = `${month} ${date.getDate()}, ${date.getFullYear()}`;
// get the current time
export const currentTime = date.toLocaleTimeString('en-US', options);
