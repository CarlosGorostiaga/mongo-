const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
    name: String,
    surname: String,
    dateOfBirth: Date,
    comments: String,
    rol: {
        type: String,
        enum : ["Admin" , "User"]

    }
})

module.exports = mongoose.model("Profile", profileSchema, "profile")