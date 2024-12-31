const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./route');

const port = 3001;
const host = "localhost";
const mongoose = require('mongoose');

app.use(cors());

app.use(express.urlencoded({
    extended:true
}));

app.use(express.json());

const url = "mongodb://localhost:27017/express";

const connect = async ()=>{
    try{
        await mongoose.connect(url);
        console.log("Connect to mongo db");
    }
    catch(err){
        console.log('Mongo db error ' , err);  
    }
}

connect();

const server = app.listen(port, host, ()=>{
    console.log(`Server is running on port ${port}`);
    return(`Server is running on port ${port}`);
});

app.use('/api',router);
