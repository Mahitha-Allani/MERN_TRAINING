# React + Vite Blog Application

This project is a responsive blog application built using React and Vite.  
It contains separate components for users and authors to manage and view articles in a responsive card layout.

---

# Features

## UserProfile Component
- Reads articles of all authors
- Displays articles in responsive grid cards
- Responsive layout:
  - 1 card for extra small screens
  - 2 cards for small screens
  - 3 cards for medium screens
  - 4 cards for large screens and above

## AuthorProfile Component
- Reads articles created by the logged-in author
- Displays articles in responsive grid cards
- Responsive layout:
  - 1 card for extra small screens
  - 2 cards for small screens
  - 3 cards for medium screens
  - 4 cards for large screens and above

---

# Technologies Used

- React
- Vite
- React Router DOM
- Axios
- React Hook Form
- Bootstrap
- Context API
- JWT Authentication
- Node.js
- Express.js
- MongoDB
- Mongoose

---

# Frontend Installation

## Step 1: Create React + Vite App

npm create vite@latest

Select:
- Framework → React
- Variant → JavaScript

---

## Step 2: Move Into Project Folder
cd project-name

---

## Step 3: Install Dependencies
npm install
---

## Step 4: Install Required Packages

npm install react-router-dom axios react-hook-form bootstrap
## Step 5: Start Frontend
npm run dev
## Step 1: Initialize Backend
npm init -y
## Step 2: Install Backend Packages

npm install express mongoose cors dotenv bcryptjs jsonwebtoken
---

## Step 3: Install Nodemon
npm install --save-dev nodemon
---

## Step 4: Add Scripts in package.json

```json
"scripts": {
  "start": "node server.js",
  "server": "nodemon server.js"
}
---

#BLOG-APPLICATION
│
├── BLOG-APP-FRONTEND
│   │
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── assets
│   │   │
│   │   ├── components
│   │   │   ├── UserProfile.jsx
│   │   │   ├── AuthorProfile.jsx
│   │   │   ├── ArticleCard.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ProtectedRoute.jsx
│   │   │
│   │   ├── pages
│   │   │   ├── Home.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── AddArticle.jsx
│   │   │   ├── EditArticle.jsx
│   │   │   └── NotFound.jsx
│   │   │
│   │   ├── context
│   │   │   └── AuthContext.jsx
│   │   │
│   │   ├── api
│   │   │   └── axiosInstance.js
│   │   │
│   │   ├── hooks
│   │   │
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── package.json
│   └── vite.config.js
│
├── BLOG-APP-BACKEND
│   │
│   ├── APIs
│   │   ├── user-api.js
│   │   └── author-api.js
│   │
│   ├── config
│   │   └── db.js
│   │
│   ├── middlewares
│   │   ├── verifyToken.js
│   │   └── errorHandler.js
│   │
│   ├── models
│   │   ├── userModel.js
│   │   └── articleModel.js
│   │
│   ├── services
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── README.md
│
└── README.md

# Responsive Grid Layout

```css
.article-container {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
}

@media screen and (min-width: 576px) {
  .article-container {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 768px) {
  .article-container {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 992px) {
  .article-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
```

---

# Authentication Flow

1. User registers account
2. Password is encrypted using bcrypt
3. User logs in using credentials
4. JWT token is generated
5. Token stored in localStorage
6. Protected routes verify token
7. Logged-in author manages articles securely

---

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

## Environment Variables
Frontend .env
VITE_API_BASE_URL=http://localhost:5000/api



🚀 Vercel Deployment Process
Step 1: Create Vercel Account

Open:

Vercel Signup/Login

Sign in using:

GitHub
Google
Email account
Step 2: Import GitHub Repository

After login:

Click Add New
Select Project
Import GitHub repository
Select frontend repository
⚙️ Configure Deployment Settings
Basic Configuration
Field	Value
Framework Preset	Vite
Root Directory	BLOG-APP-FRONTEND
Build Command	npm run build
Output Directory	dist
🔐 Add Environment Variables

Inside Vercel dashboard:

Settings → Environment Variables

Add:

VITE_API_BASE_URL=https://your-backend.onrender.com/api

Environment variables are required because .env files are not uploaded to GitHub.

🏗️ Build Process

When deployment starts, Vercel automatically:

Clones GitHub repository
Installs dependencies
Executes build command
Generates production build
Deploys frontend application
Creates live deployment URL

📦 Vite Production Build

Build frontend manually using:

npm run build

This generates the dist folder containing optimized production files.

🌍 Frontend Deployment URL

https://mern-training-lemon.vercel.app/