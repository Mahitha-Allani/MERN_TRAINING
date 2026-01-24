/*
Assignment 2: Date Comparison & Validation (Beginner → Intermediate)
--------------------------------------------------------------------

 Given:
      let enrollmentDeadline = new Date("2026-01-20");

Tasks:
  1.Check if:
      * Today is before deadline → "Enrollment Open"
      * Today is after deadline → "Enrollment Closed"

  2. Validate user input date:
      * Input: "2026-02-30"
      * Detect whether the date is valid or invalid
      */
    
let enrollmentDeadline = new Date("2026-01-20");

// Get today's date
let today = new Date();

// Compare dates
if (today < enrollmentDeadline) 
{
  console.log("Enrollment Open");
} 
else {
  console.log("Enrollment Closed");
}
//validation




// Test input
if (isValidDate(inputDate)) {
  console.log("Valid Date");
} else {
  console.log("Invalid Date");
}
