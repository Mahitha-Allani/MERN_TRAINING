#  PRODUCTS APP

A React-based product listing app built with Vite and Tailwind CSS. Deployed on Vercel.

 **Live Demo:**   https://week7-react-handson1.vercel.app/

---

## Tech Stack

- **React** — UI library
- **React Router** — Client-side routing
- **Vite** — Build tool with HMR
- **Tailwind CSS** — Styling

## Project Structure

```
project/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── ContactUs.jsx      # Contact page / form
│   │   ├── Footer.jsx         # Site footer
│   │   ├── Header.jsx         # Navigation header
│   │   ├── Home.jsx           # Landing / home page
│   │   ├── Product.jsx        # Individual product detail
│   │   ├── ProductsList.jsx   # Grid of product cards
│   │   └── RootLayout.jsx     # Shared layout wrapper
│   ├── App.css
│   ├── App.jsx                # Routes and app entry
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Features

-  Home page with hero / intro section
-  Products listing page
-  Individual product detail view
-  Contact Us page
-  Shared header and footer across all pages
-  Fully responsive with Tailwind CSS


### Prerequisites

- Node.js v18+
- npm or yarn

### Install Dependencies

```bash
npm install
```

### Run in Development

```bash
npm run dev
```

Open [http://localhost:5173] in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Deployment on Vercel

This app is deployed on Vercel

### Steps to Deploy

1. Push your code to GitHub.
2. Go to [vercel.com](https://vercel.com) and import your repository.
3. Vercel auto-detects Vite — no extra config needed.
4. Click **Deploy**.

Vercel auto-deploys on every push to the `main` branch.