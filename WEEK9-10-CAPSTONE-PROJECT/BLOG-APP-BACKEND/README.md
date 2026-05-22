# Backend Development
The backend of this project is developed using Node.js, Express.js, and MongoDB. It is responsible for handling API requests, authentication, database operations, middleware processing, and communication with the frontend application. The backend follows RESTful API architecture and uses MongoDB Atlas for cloud database management.

BLOG-APP-BACKEND
│
├── APIs
│   ├── user-api.js
│   └── author-api.js
│
├── config
│   └── db.js
│
├── middlewares
│   ├── verifyToken.js
│   └── errorHandler.js
│
├── models
│   ├── userModel.js
│   └── articleModel.js
│
├── services
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── req.http
├── server.js
└── README.md

## 1. Create Git Repository

Initialize a Git repository for version control using `git init`. Git helps in tracking project changes, maintaining version history, managing branches, and supporting collaboration between developers. It also makes deployment and rollback management easier during development.

---

## 2. Add `.gitignore` File

Create a `.gitignore` file to exclude unnecessary files and folders from being uploaded to the repository. Files like `node_modules`, build folders, and `.env` files should be ignored to keep the project clean, lightweight, and secure.

---

## 3. Create `.env` File for Environment Variables

Create a `.env` file to store sensitive configuration data such as database URLs, secret keys, API credentials, and port numbers. The `dotenv` package is used to read environment variables securely inside the application. This improves security and supports separate configurations for development and production environments.

---

## 4. Generate `package.json`

Generate the `package.json` file using `npm init -y`. This file stores project metadata, dependencies, scripts, version information, and configuration details. It helps manage external packages and ensures consistency across different development environments.

---

## 5. Create Express Application

Install and configure Express.js to create the backend server. Express simplifies server creation, routing, middleware handling, and API management. It provides a fast and minimal framework for building scalable RESTful backend applications using Node.js.

---

## 6. Connect to Database

Connect the backend application to MongoDB using Mongoose. Database connectivity allows the application to store and retrieve data such as users, articles, and authentication details. Mongoose simplifies MongoDB operations through schemas and models while providing validation and structured data management.

---

## 7. Add Middlewares

Add middleware functions for processing requests and responses within the application. Common middlewares include JSON body parsing, CORS handling, request logging, authentication verification, and centralized error handling. Middleware improves modularity, reusability, and clean request flow management.

---

## 8. Design Schemas and Create Models

Design schemas to define the structure, validation rules, and data types for database documents. Models are created using schemas and are used to interact with MongoDB collections. Proper schema design ensures consistent data storage, easier querying, and efficient database management.

---

## 9. Design REST APIs for All Resources

Design RESTful APIs for resources such as users, authors, and articles using HTTP methods like GET, POST, PUT, and DELETE. REST APIs enable communication between frontend and backend systems while supporting CRUD operations, authentication, and data management in a scalable and maintainable way.


### Backend Package Installations

Install Express.js
npm install express

Express.js is used to create the backend server, manage routing, handle APIs, and process middleware efficiently.

Install Nodemon
npm install nodemon --save-dev

Nodemon automatically restarts the server whenever code changes are detected, improving development speed and workflow.
Install MongoDB & Mongoose
npm install mongoose

Mongoose is used for:

Connecting Node.js with MongoDB
Creating schemas and models
Data validation
Database operations

Install dotenv
npm install dotenv

dotenv loads environment variables from the .env file into the application securely.

Install CORS
npm install cors

CORS (Cross-Origin Resource Sharing) allows frontend and backend applications running on different ports or domains to communicate securely.

Install bcryptjs
npm install bcryptjs

bcryptjs is used for password hashing and encryption before storing passwords in the database.

Install JSON Web Token (JWT)
npm install jsonwebtoken

JWT is used for:

User authentication
Token generation
Protected routes
Session management
🚀 Create Express Server
Example server.js
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()

const app = express()

app.use(cors())
app.use(express.json())

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`)
})

The Express server handles incoming requests, middleware execution, routing, and API responses.

🌐 Database Connection
MongoDB Connection
config/db.js
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

MongoDB Atlas is used as the cloud database for storing user and article data securely.

🧩 Middlewares

Middlewares are functions executed between the request and response cycle.

Common Middlewares Used
Middleware	Purpose
express.json()	Parse JSON request body
cors()	Enable frontend-backend communication
verifyToken	Protect private routes
errorHandler	Centralized error handling

Middlewares improve modularity, code reusability, and request flow management.

🗂️ Database Schemas

Schemas define the structure, validation rules, and data types for MongoDB documents.

User Schema
models/userModel.js
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  role: {
    type: String,
    default: "user"
  }
})
User Schema Purpose
Stores authentication details
Maintains user roles
Supports login and registration functionality
Article Schema
models/articleModel.js
const articleSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  content: {
    type: String,
    required: true
  },

  author: {
    type: String,
    required: true
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
})
Article Schema Purpose
Stores blog articles
Maintains author information
Tracks article creation time
🔌 REST API Design

REST APIs are designed using HTTP methods for communication between frontend and backend systems.

User APIs
Method	Endpoint	Description
POST	/user/register	Register new user
POST	/user/login	Login existing user
GET	/articles	Read all articles
Author APIs
Method	Endpoint	Description
POST	/author/article	Create article
PUT	/author/article/:id	Update article
DELETE	/author/article/:id	Delete article
GET	/author/articles	Read own articles
🔐 Authentication Process

Authentication is implemented using JWT tokens.

Authentication Flow
User registers or logs in
Server validates credentials
JWT token is generated
Token is sent to frontend
Frontend stores token
Token is attached in API requests
Protected routes verify token access

This ensures secure communication between client and server.

▶️ Run Backend Project
Development Mode
npm run dev

OR

nodemon server.js
Production Mode
node server.js
☁️ Backend Deployment
Deploy Backend on Render

Render is used for deploying Node.js backend applications.

Deployment Platform:
Render Official Website

🚀 Backend Deployment Steps
1. Push Backend Code to GitHub
git add .
git commit -m "Backend deployment"
git push origin main
2. Create Render Account

Sign in using GitHub and connect the repository.

3. Create New Web Service
Select GitHub repository
Choose backend folder
Select Node.js environment
4. Add Build & Start Commands
Build Command
npm install
Start Command
node server.js
5. Add Environment Variables

Add all .env variables inside Render dashboard.


PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key

Through backend development, the following concepts were learned and implemented:

Node.js ---- Server Development
Express.js ---- Routing
MongoDB ----- Database Management
Mongoose Schemas & Models
REST API Development
JWT Authentication
Middleware Handling
Environment Variable Management
Backend Deployment
Git & GitHub Workflow

# APIs Used

## User APIs
- Register user
- Login user
- Read all articles

## Author APIs
- Create article
- Update article
- Delete article
- Read own articles

---

# Axios

Axios is used for:
- Sending HTTP requests
- API integration
- Backend communication
- Sending authentication tokens

---

# React Hook Form

React Hook Form is used for:
- Form validation
- Better form handling
- Reducing re-rendering
- Improving performance

---

# Context API

Context API is used for:
- Global state management
- Sharing authentication data
- Avoiding prop drilling

---

# Future Enhancements

- Like and comment system
- Search functionality
- Pagination
- Dark mode
- Profile image upload
- Rich text editor
- Bookmark articles
---

# Run Complete Project

## Frontend

npm run dev

## Backend
npm run server

Render Deployment Process
### Step 1: Create Render Account

Open Render website and sign in using GitHub or Google account.

Step 2: Create New Web Service
Click New +
Select Web Service
Connect GitHub repository
Select backend repository

### Step 3: Configure Deployment Settings
Field	----- Value
Name	----- blog-app-backend
Environment	--- Node
Branch	---- main
Root Directory---- BLOG-APP-BACKEND
Build Command ---	npm install
Start Command ----	node server.js



### Step 4: Add Environment Variables

Inside Render dashboard, add:

PORT=5000
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
CLIENT_URL=https://your-frontend.vercel.app

.env files are not uploaded to GitHub for security purposes, so variables must be added manually in Render.

### Step 5: Deploy Backend

Click:

Create Web Service

Render automatically:

Clones GitHub repository
Installs dependencies
Builds application
Starts server
Generates live deployment URL


🌍 Backend Deployment URL

Example:

https://blog-app-backend.onrender.com