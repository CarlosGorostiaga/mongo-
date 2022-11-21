const mongoose = require("mongoose");

const creedentialsSchema = new mongoose.Schema({
    addres: String,
    phone: Number,
    email: String
})

module.exports = mongoose.model("Creedentials", creedentialsSchema, "creedentials")