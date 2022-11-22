const mongoose = require("mongoose");

const photos = require("./photosSchema");


mongoose.connect("mongodb+srv://carlos1996:carlos1996@cluster0.iu4xmlp.mongodb.net/proyectoFotos",
    { useNewUrlParser: false, useUnifiedTopology: false });



let photosDocument = new photos({
    nameUser: "Yeri",
    URL: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.diezminutos.es%2Fteleprograma%2Fseries-tv%2Fg32014092%2Fpeliculas-accion-netflix-mejores-2020%2F&psig=AOvVaw3Si7AuMzJOycq3yBrlMEuG&ust=1669207427255000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJj3gbLowfsCFQAAAAAdAAAAABAE",
    title: "The Rock in Danger",
    description: "Actor The rock precipitandose al vacio "

})


// ****************SUBIDA DE FOTO********************************************************************************************************************
// photosDocument.save()
//     .then((data) => {
//         console.log(data);
//         console.log(data.title);
//     })
//     .catch((err) => {
//         console.log(err);
//     })

// *****************OBTENER FOTOS**************************************************************************************************************************
// photos.find({}).where("nameUser").equals("Carlos")
//     .then(function (photo) {
//         console.log(photo);
//     })
//     .catch(function(){
//         console.log("Error");
//     })


// *********************MODIFICAR FOTOS*********************************************************************************************************

// photos.findOneAndUpdate({ title: "The Rock in Danger" }, { description: "Actor The Rock Escalando un rascacielos" }, checkRespuesta)

// *****************ELIMINA FOTO************************************************************************************************************************
// photos.findOneAndUpdate({ nameUser: "Yeri" }, { title: "" }, checkRespuesta)

//     .then(function (items) {
//         console.log(items);
//     })
//     .catch(function () {
//         console.log("Error");
//     })

// ***************ELIMINA TODAS LAS FOTOS***************************************************************************************************

photos.deleteOne({nameUser:"Yeri"})
.then(function(items){
    console.log("Borrado Correctamente");
    console.log(items);
})
.catch(function(){
    console.log("Error");
})











// *****************CHECK-RESPUESTA****************


// photosDocument.save(checkRespuesta); 

// function checkRespuesta(err, res) {
//     if (err)
//         console.log("Error: " + err);
//     else {
//         console.log("Metodo realizado correctamente");
//         console.log(res);
//     }
// }
