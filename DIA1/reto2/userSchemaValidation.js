const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    login: {
        type: String,
        enum: ["Carlos", "Javier", "Pablo", "Miguel", "Fanel", "Irene"]
    },

    password: {
        type: String,
        validate: [
            function (password) {
                return password.length >= 6;
            },
            "El Dato Password debe ser mas largo"
        ],
        select: false
    }
})


userSchema.pre("save", function(next){
    console.log("Middleware de entrada");
    if(this.password.length > 13){
        console.log("Has introducido una constraseña Segura")
        next();
    }
    else{
        console.log("Tu Password podria ser mas segura");
    }
})

module.exports = mongoose.model("User", userSchema, "user")


