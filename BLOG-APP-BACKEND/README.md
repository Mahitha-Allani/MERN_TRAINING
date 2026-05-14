# ⚙️ Backend Development

## 1. Create Git Repository

Initialize a Git repository for version control.
      git init

Git helps in tracking all project changes and maintains version history of the application. It allows developers to create branches, manage updates, and collaborate efficiently in team environments. Using Git also makes deployment and rollback easier whenever issues occur in the application.

## 2. Add `.gitignore` File

Create a `.gitignore` file to ignore unnecessary files and folders.

### Example

.env

The `.gitignore` file prevents sensitive files and unwanted folders from being pushed to GitHub. 

## 3. Create `.env` File for Environment Variables

Install dotenv package.
npm install dotenv

### Example `.env`

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

### Configure dotenv

import dotenv from "dotenv";

dotenv.config();

## 4. Generate `package.json`

Initialize the Node.js project.

npm init -y

## 5. Create Express Application

Install Express.js.
npm install express

### Basic Server Setup
import express from "express";

const app = express();

app.listen(5000, () => {
  console.log("Server running on port 5000");
});

## 6. Connect to Database

Install Mongoose.
npm install mongoose

### Database Connection
import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Database Connected");
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;

## 7. Add Middlewares
Install required middleware packages.
npm install cors morgan

### JSON Middleware
app.use(express.json());

### CORS Middleware
import cors from "cors";
app.use(cors());

### Logger Middleware
import morgan from "morgan";

app.use(morgan("dev"));

### Error Handling Middleware
# 8. Design Schemas and Create Models

### Example User Schema
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
});

export default mongoose.model("User", userSchema);
# 9. Design REST APIs for All Resources

# 10. Start Server