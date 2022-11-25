const mongoose = require("mongoose");


const PhotoModel = new mongoose.Schema({
    nameUser: String,
    nameURL:String,
    title:String,
    description :String
})

module.exports = mongoose.model("Photos", PhotoModel, "photos") 


