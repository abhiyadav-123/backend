const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// CORS middleware
app.use(cors({
    origin: "https://frontend-two-jade-59.vercel.app", // Make sure this matches your frontend URL
    credentials: true
}));

// Middleware setup
app.use(express.json());
app.use(cookieParser());

// Home route
app.get("/", (req, res) => {
    res.send("API is working");
});

// Use your API routes
app.use("/api", router);

// Export app for Vercel (this is the key change)
module.exports = app;

// Connect to DB and handle serverless function deployment
connectDB().then(() => {
    console.log("Connected to DB");
    // No need for app.listen() in serverless functions
});
