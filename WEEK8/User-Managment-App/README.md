User Management App
A full-stack application that allows you to read users and add new users to a list. Built with a Node.js/Express backend and a React frontend.
 Live Demo
Service URL 

Frontend https://week8-user-management-app-frontend.vercel.app/
Backend https://mern-week8-backend.onrender.com


📁 Project Structure
project-root/
├── backend/
│   ├── APIs/
│   │   └── UserApi.js        # User route handlers
│   ├── models/
│   │   └── UserModel.js      # User data model/schema
│   ├── node_modules/
│   ├── .env                  # Environment variables (not committed)
│   ├── README.md
│   ├── package.json
│   ├── package-lock.json
│   ├── req.http              # API request test file
│   └── server.js             # Express server entry point
│
└── frontend/
    ├── public/
    ├── src/                  # React source files
    ├── .gitignore
    ├── README.md
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    └── package-lock.json

 Features

View a list of all users
Add new users to the list
REST API backend with Express
React frontend with live state updates


Tech Stack
Backend

Node.js
Express.js
MongoDB (via Mongoose)

Frontend

React
Vite

Getting Started
Prerequisites

Node.js v18+
npm
MongoDB (local or Atlas)

1. Clone the repository
bashgit clone https://github.com/your-username/your-repo.git
cd your-repo
2. Set up the Backend
bashcd backend
npm install
Create a .env file in the backend/ folder:
envPORT=5000
MONGO_URI=your_mongodb_connection_string
Start the backend server:
bashnpm start
The API will be running at http://localhost:5000.
3. Set up the Frontend
bashcd frontend
npm install
npm run dev
The frontend will be running at http://localhost:5173.


 Deployment
Backend — Render

Push your backend folder to GitHub
Connect the repo to  Render
Set the environment variables (PORT, MONGO_URI) in the dashboard
Deploy — your API URL will be provided after deployment

Frontend — Vercel 

Push your frontend/ folder to GitHub
Connect the repo to Vercel 
Set the build command to npm run build and output directory to dist
Add your backend URL as an environment variable if needed (VITE_API_URL)
Deploy