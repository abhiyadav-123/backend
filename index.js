const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();

// ✅ Use your deployed frontend domain here
const allowedOrigin = "https://frontend-two-jade-59.vercel.app";

// ✅ CORS middleware with specific origin and credentials true
app.use(cors({
    origin: allowedOrigin,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true
}));

// ✅ Preflight (OPTIONS) handling with the same origin & credentials
app.options("*", cors({
    origin: allowedOrigin,
    credentials: true
}));

// ✅ Middlewares
app.use(express.json());
app.use(cookieParser());

// ✅ Test route
app.get("/", (req, res) => {
    res.send("API is working");
});

// ✅ Main API router
app.use("/api", router);

// ✅ Export the app for Vercel serverless function
module.exports = app;

// ✅ Connect to DB
connectDB().then(() => {
    console.log("Connected to DB");
    // No app.listen() needed for Vercel
});
