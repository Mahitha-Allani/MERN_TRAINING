/*
Assignment 1: Date Creation & Extraction (Beginner)
---------------------------------------------------
Tasks:
       1. Create a Date object for current date & time.
       2. Extract and display:
                    * Year
                    * Month (human readable)
                    * Date
                    * Day of week
                    * Hours, minutes, seconds

      3. Display the date in this format:
                    DD-MM-YYYY HH:mm:ss


*/
// 1. Create Date object for current date & time
let now = new Date();

// 2. Extract values
let year = now.getFullYear();
let month = now.getMonth()+1;
let date = now.getDate();
let day = now.getDay();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();
// Human-readable day names
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Display extracted values
console.log("Year:", year);
console.log("Month:", month);
console.log("Date:", date);
console.log("Day:", days[day]);
console.log("Time:", hours + ":" + minutes + ":" + seconds);

// 3. Display in DD-MM-YYYY HH:mm:ss format
let formattedDate =
  date + "-" + month + "-" + year + " " +
  hours + ":" + minutes + ":" + seconds;

console.log("Formatted Date:", formattedDate);

