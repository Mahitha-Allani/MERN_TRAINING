/*Assignment 1: User Profile Manager
----------------------------------
Scenario : You are managing a logged-in user’s profile in a web application.

Test data:
const user = {
  id: 101,
  name: "Ravi",
  email: "ravi@gmail.com",
  role: "student",
  isActive: true
};

Tasks:   
a)Read and print the user’s name and email
b)Add a new property lastLogin: "2026-01-01"
c)Update role from "student" to "admin"
d)Delete the isActive property
e)Use Object.keys() to list all remaining fields
----------------------------------*/

const user = {
  id: 101,
  name: "Mahi",
  email: "mahiallani@gmail.com",
  role: "student",
  isActive: true
};

// a
console.log("Name:", user.name);
console.log("Email:", user.email);

// b
user.lastLogin = "2026-01-01";
console.log("After adding lastLogin:", user);

// c
user.role = "admin";
console.log("After updating role:", user);

// d
delete user.isActive;
console.log("After deleting isActive:", user);

// e
const remainingFields = Object.keys(user);
console.log("Remaining fields:", remainingFields);
