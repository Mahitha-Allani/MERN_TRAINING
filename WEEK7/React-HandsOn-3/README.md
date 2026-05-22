Country Explorer
A React app to search and explore countries around the world, built with Vite and Tailwind CSS. Deployed on Vercel.

Live Demo: https://week7-react-handson3.vercel.app/

Tech Stack
React — UI library
Vite — Build tool with HMR
Tailwind CSS — Styling
REST Countries API — Country data source
ESLint — Code linting
Project Structure
country-explorer/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── CountryCard.jsx    # Displays individual country info
│   │   ├── CountryList.jsx    # Renders the grid of country cards
│   │   └── SearchBar.jsx      # Search input with live filtering
│   ├── App.css
│   ├── App.jsx                # Root component, manages search state
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
Features
Live search — filter countries as you type
Country cards with key details
Responsive layout with Tailwind CSS
Getting Started
Prerequisites
Node.js v18+
npm or yarn
Install Dependencies
npm install
Run in Development
npm run dev
Open http://localhost:5173 in your browser.

Build for Production
npm run build
Preview Production Build
npm run preview
Deployment on Vercel
This app is deployed on Vercel

Steps to Deploy
Push your code to GitHub.
Go to vercel.com and import your repository.
Vercel auto-detects Vite — no extra config needed.
Click Deploy.
Vercel auto-deploys on every push to the main branch.