const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');
const path = require('path');

const rootDir = path.resolve(); // Fixed variable name

const app = express();

app.use(cors({
    origin: "https://ecommerce-3-1mul.onrender.com",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// API Routes
app.use("/api", router);

// Serve frontend
app.use(express.static(path.join(rootDir, '/frontend/dist')));
app.get('*', (_, res) => {
    res.sendFile(path.resolve(rootDir, "frontend", "dist", "index.html"));
});

// Corrected PORT assignment
const PORT = process.env.PORT || 8080;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Connected to DB");
        console.log("Server is running on port " + PORT);
    });
});
