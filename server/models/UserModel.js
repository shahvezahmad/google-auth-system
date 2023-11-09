const mongoose = require("mongoose");

// Creating User Schema 
const UserSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    bio: String,
    phone: String,
    photo: String,
});

module.exports = mongoose.model('User', UserSchema);
