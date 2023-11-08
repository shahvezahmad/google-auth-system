const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://shahvezahmad:4OXyj7degFnXPfjR@cluster0.f4qjodo.mongodb.net/auth?retryWrites=true&w=majority';

const connecttodb= ()=>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to Database");
    })
}

module.exports = connecttodb;

