const mongoose = require("mongoose")


async function connectDB(){
    try{
        await mongoose.connect("mongodb+srv://ay005562:rock@cluster0.zzx0g.mongodb.net/mern?retryWrites=true&w=majority&appName=Cluster0")
      
    }catch(err){
        console.log(err)
    }
}

module.exports = connectDB
