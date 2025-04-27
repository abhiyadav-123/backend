const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// CORS middleware (allow all origins)
app.use(cors({
    origin: "*", // Allow all origins
    credentials: true
}));

// Preflight request handling
app.options("*", cors()); // Handles OPTIONS requests for preflight CORS checks

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
