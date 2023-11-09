const mongoose = require('mongoose');
require("dotenv").config();

const connecttodb = async () => {
    try {
        await mongoose.connect(process.env.mongoURI);
        console.log("Connected to Database");
    } catch (error) {
        console.error("Error connecting to database:", error.message);
    }
};

module.exports = connecttodb;
