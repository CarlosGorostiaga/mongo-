const mongoose = require("mongoose");

const creedentialsSchema = new mongoose.Schema({
    addres: String,
    phone: Number,
    email: {
        type: String,
        validate: [
            function (email) {
                return email.includes("@")
            },
            "Mail Invalido , tiene que incluir el caracter @"

        ],
        select: false

    }
})

module.exports = mongoose.model("Creedentials", creedentialsSchema, "creedentials")