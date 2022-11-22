const mongoose = require("mongoose");


const photosSchema = new mongoose.Schema({
    nameUser: String,
    URL:String,
    title:String,
    description :String
})

module.exports = mongoose.model("photos", photosSchema, "photos") 


