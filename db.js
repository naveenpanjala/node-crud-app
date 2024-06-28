const mongoose = require('mongoose');
require('dotenv').config();

// const mongoURL = process.env.MONGODB_URL_LOCAL
const mongoURL = process.env.MONGODB_URL

mongoose.connect(mongoURL, {
    useNewUrlParser:true,
     useUnifiedTopology:true,
})


const db = mongoose.connection;

db.on('connected',()=>{
    console.log("connected to MongoDB server");
})

db.on('error',(err)=>{
    console.log("MongoDB connection error:",err);
})

db.on('disconnected',()=>{
    console.log("MongoDb disconnected");
})


module.exports = db;