const mongoose = require("mongoose");
const User = require("./userSchemaValidation");
const Creedentials = require("./creedentialsSchemaValidation");
const Profile = require("./profileSchemaValidation");

// ****************CONNECT*****************
mongoose.connect("mongodb+srv://carlos1996:carlos1996@cluster0.iu4xmlp.mongodb.net/reto2",
    { useNewUrlParser: false, useUnifiedTopology: false });


// *************************DATOS*************************   

let userDocument = new User({
    login: "Fanel",
    password: "holamundo271966"
})


// let creedentialsDocument = new Creedentials({
//     addres: "Calle constitucion",
//     phone: 918782846,
//     email: "InigoGorosti@gmail.com"
// })


// let profileDocument = new Profile ({
//     name :"Carlos",
//     surname:"Gorostiaga",
//     dateOfBirth : "1996-10-27",
//     comments : "Perfil 1",
//     rol : "User"

// })


// **************************************


// ****************FUNCION CREAR USER************************
userDocument.save()
    .then((data) => {
        console.log(data);
        console.log(data.login);
    })
    .catch((err) => {
        console.log(err);
    })


// ****************FUNCION CREAR CREDENCIALES************************

// creedentialsDocument.save()
//     .then((data) => {
//         console.log(data);
//         console.log(data.phone);
//     })
//     .catch((err) => {
//         console.log(err);
//     })


// ****************FUNCION CREAR PROFILE************************
// profileDocument.save()
//     .then((data) => {
//         console.log(data);
//         console.log(data.rol);
//     })
//     .catch((err) => {
//         console.log(err);
//     })



// ******************************************














// **************FUNCION CON CALLBACKS*************
// userDocument.save(checkRespuesta)

// function checkRespuesta(err, res) {
//     if (err)
//         console.log("Error" + err);
//     else {
//         console.log("Documento guardado correctamente");
//         console.log(res);
//         // mongoose.disconnect()

//     }
// }
