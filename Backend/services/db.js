const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async ()=> {
    try{
        console.log("MONGO_URI:", process.env.MONGO_URI);
        const conn =await mongoose.connect(process.env.MONGO_URI);
        console.log('mongoDB connected');
    }
    catch(error){
        console.error(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;