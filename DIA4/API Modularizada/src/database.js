const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://carlos1996:carlos1996@cluster0.iu4xmlp.mongodb.net/proyectoFotos",
    { useNewUrlParser: false, useUnifiedTopology: false })
    .then((db) => {
        console.log("database connected on " + db.connection.host);
    })
    .catch((error) => {
        console.log(error);
    })

