
---

# WEEK 6

## Topics Covered

* Express.js
* Routing
* APIs
* Backend Basics
* Middleware
* REST API
* Request & Response Handling

---

## Express.js

Express.js is a Node.js framework used for building web applications and APIs.

### Features

| Feature            | Purpose                   |
| ------------------ | ------------------------- |
| Routing            | Handles different URLs    |
| Middleware         | Processes requests        |
| API Development    | Creates backend services  |
| Faster Development | Simplifies Node.js coding |

---

## Routing

Routes define how server responds to client requests.

### HTTP Methods

| Method | Purpose     |
| ------ | ----------- |
| GET    | Fetch data  |
| POST   | Send data   |
| PUT    | Update data |
| DELETE | Delete data |

### Example

```js
app.get('/users', (req,res)=>{
   res.send("Users Data");
});
```

---

## Middleware

Middleware functions execute before sending response.

### Common Middleware

| Middleware     | Purpose                               |
| -------------- | ------------------------------------- |
| express.json() | Parses JSON data                      |
| cors()         | Allows frontend-backend communication |
| logger         | Logs requests                         |

### Example

```js
app.use(express.json());
```

---

## REST API Concepts

### REST Principles

* Client-server architecture
* Stateless communication
* Resource based routing
* JSON data exchange

### API Example

```js
app.post('/addUser', (req,res)=>{
   res.send("User Added");
});
```

---

## Request and Response Objects

| Object | Purpose                      |
| ------ | ---------------------------- |
| req    | Contains client request data |
| res    | Sends response to client     |

### Example

```js
app.get('/', (req,res)=>{
   res.send("Server Running Successfully");
});
```

---

# Technologies Used

* JavaScript
* Node.js
* Express.js
* HTML
* CSS
* MongoDB

---
DEPLOYMENT IN CODEPEN :

CODEPEN PROFILE LINK:
                        https://codepen.io/Mahitha_25

