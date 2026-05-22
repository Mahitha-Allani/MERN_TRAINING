Frontend — User Management
React + Vite frontend for the User Management system, deployed on Vercel.

Tech Stack
React — UI library
Vite — Build tool with HMR
ESLint — Code linting
Project Structure
frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── AddUser.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Home.jsx
│   │   ├── RootLayout.jsx
│   │   ├── User.jsx
│   │   └── UserList.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── eslint.config.js
├── index.html
├── package.json
└── vite.config.js
Getting Started
Install Dependencies
cd frontend
npm install
Environment Variables
Create a .env file in the frontend/ directory:

VITE_API_BASE_URL=http://localhost:5000
In production (Vercel), set VITE_API_BASE_URL to your deployed backend URL in the Vercel dashboard under Settings → Environment Variables.

Run in Development
npm run dev
Open http://localhost:5173 in your browser.

Build for Production
npm run build
Preview Production Build
npm run preview

Deployment on Vercel
This frontend is deployed on https://week8-user-management-app-frontend.vercel.app/

Steps to Deploy
Push your code to GitHub.
Go to vercel.com and import your repository.
Set the Root Directory to frontend.
Add the environment variable VITE_API_BASE_URL pointing to your live backend URL.
Click Deploy.