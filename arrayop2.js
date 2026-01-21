/*
Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
    */

let courses = ["javascript", "react", "node", "mongodb", "express"];

//1. filter() courses with name length > 5
let longCourses = courses.filter(course => course.length > 5);
console.log("Courses with name length > 5:", longCourses)

//2. map() to convert course names to uppercase
let upperCaseCourses = courses.map(course => course.toUpperCase());
console.log("Courses in Uppercase:", upperCaseCourses)

//3. reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let courseString = upperCaseCourses.reduce((accumulator, course) => accumulator + " | " + course);
console.log("Course String:", courseString)

//4. find() the course "react"
let findReact = courses.find(course => course === "react");
console.log("Found course:", findReact)

//5.findIndex() of node
let indexofNode=courses.findIndex(course=>course==="node")
console.log("Index of course 'node':",indexofNode)
