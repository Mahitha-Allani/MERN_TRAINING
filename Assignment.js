/*Assignment 2: Exam Result Summary
---------------------------------
Scenario : Marks are stored subject-wise for a student.

Test data:
const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
Tasks:
Calculate total marks
Calculate average marks
Find the highest scoring subject
Add a new subject computer: 90
*/


const marks = {
  maths: 78,
  physics: 65,
  chemistry: 82,
  english: 55
};
// a
let totalMarks = 0;
for (let subject in marks) 
{
  totalMarks += marks[subject];
}
console.log("Total Marks:", totalMarks);

// b
let averageMarks = totalMarks / Object.keys(marks).length;
console.log("Average Marks:", averageMarks);

// c
let highestSubject = "";
let highestScore = 0;
for (let subject in marks)
{
  if (marks[subject] > highestScore)
 {
    highestScore = marks[subject];
    highestSubject = subject;
  }
}
console.log("Highest Scoring Subject:", highestSubject, "with score:", highestScore);

//d
marks.computer = 90;
console.log("After adding computer subject:", marks);