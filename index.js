const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()
const connectDB = require('./config/db')
const router = require('./routes')


const app = express()
app.use(cors({
    origin : "https://frontend-two-jade-59.vercel.app",
    credentials : true
}))
app.use(express.json())
app.use(cookieParser())

app.get("/", (req, res) => {
    res.send("API is working");
});

app.use("/api",router)

const PORT = 8080 || process.env.PORT


connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log("connnect to DB")
        console.log("Server is running "+PORT)
    })
})

module.exports = app;
