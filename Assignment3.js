/*Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
    */

let marks = [78, 92, 35, 88, 40, 67];

//1. filter() marks ≥ 40 (pass marks)
let passMarks = marks.filter(mark => mark >= 40);
console.log("Pass Marks:", passMarks)

//2. map() to add 5 grace marks to each student
let graceMarks = marks.map(mark => mark + 5);
console.log("Grace Marks:", graceMarks)

//3. reduce() to find highest mark
let highestMark = marks.reduce((max, current) => current > max ? current : max);
console.log("Highest Mark:", highestMark)

//4. find() first mark below 40
let firstFail = marks.find(mark => mark < 40);
console.log("First Fail Mark:", firstFail)

//5. findIndex() of mark 92
let indexof92 = marks.findIndex(mark => mark === 92);
console.log("Index of Mark 92:", indexof92)