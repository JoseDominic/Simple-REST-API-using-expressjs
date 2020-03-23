const express = require('express');//import express framework
const mongoose = require('mongoose'); //module to connect to mongodb

const app = express(); //intializing app

//DB config
require('dotenv').config(); //for setting environment variables on server
const uri = process.env.ATLAS_URI;
mongoose.connect(uri,{useNewUrlParser:true ,useUnifiedTopology: true})
    .then(() => console.log("mongodb connected"))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;

//Express Bodyparser
app.use(express.urlencoded({extended:true}));

app.use('/student',require('./routes/student'));

app.listen(PORT,console.log(`Server started on port ${PORT}`));
    
    



