
---

# WEEK 5

## Topics Covered

* Node.js Basics
* Modules
* File Handling
* NPM Packages
* HTTP Server
* Package Management
* Backend Fundamentals

---

## Node.js Basics

Node.js allows JavaScript to run outside the browser.

### Features

| Feature          | Purpose                    |
| ---------------- | -------------------------- |
| Event Driven     | Handles multiple requests  |
| Non-blocking I/O | Faster execution           |
| Single Threaded  | Efficient request handling |
| NPM Support      | Access to packages         |

---

## Modules

Modules help divide code into reusable parts.

### Types of Modules

| Module Type         | Example            |
| ------------------- | ------------------ |
| Core Modules        | fs, http, path     |
| Local Modules       | User created files |
| Third-party Modules | express, mongoose  |

### Syntax

```js
const fs = require('fs');
```

---

## File Handling

### Methods Used

| Method           | Purpose      |
| ---------------- | ------------ |
| writeFileSync()  | Writes file  |
| readFileSync()   | Reads file   |
| appendFileSync() | Appends data |
| unlinkSync()     | Deletes file |

### Example

```js
const fs = require('fs');

fs.writeFileSync("sample.txt","Hello NodeJS");
```

---

## HTTP Server

### Methods Used

| Method         | Purpose         |
| -------------- | --------------- |
| createServer() | Creates server  |
| listen()       | Starts server   |
| req            | Request object  |
| res            | Response object |

### Example

```js
const http = require('http');

http.createServer((req,res)=>{
   res.write("Server Running");
   res.end();
}).listen(3000);
```

