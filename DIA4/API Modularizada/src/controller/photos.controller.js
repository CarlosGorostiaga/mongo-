const PhotoModel = require("../model/photos")



function getPhoto(request, response) {
    if (request.query.nameUser == null) {
        PhotoModel.find({})
            .then((photo) => {
                console.log(photo)
                response.send(photo);
            })
            .catch((err) => {
                console.log(err)

            })
    }
    else {
        PhotoModel.find({ nameUser: request.query.nameUser })
            .then((photo) => {
                console.log(photo)
                response.send(photo);
            })
            .catch((err) => {
                console.log(err)
            })
    }
}





function postPhoto(request, response) {


    let photo = new PhotoModel({
        nameUser: request.body.nameUser,
        nameURL: request.body.nameURL,
        title: request.body.title,
        description: request.body.description
    })
    photo.save()
        .then((photo) => {
            console.log("Foto guardada")
            console.log(photo)
            response.send(photo);
        })
        .catch((error) => {
            console.log(error);
        })
}



function putPhoto(request, response) {
    PhotoModel.findOneAndUpdate({ title: request.body.title },
        {
            description: request.body.description
        },
    )
        .then((photo) => {
            console.log("Foto ha sido actualizada")
            response.send(photo);
        })
        .catch((error) => {
            console.log(error);
        })
}



function deletePhoto(request, response) {
    if (!request.body.title) {
        PhotoModel.deleteMany({ nameUser: request.body.nameUser })
            .then((photo) => {
                console.log("Fotos eliminadas")
                response.send(photo);
            })
            .catch((error) => {
                console.log(error);
            })
    } else {
        PhotoModel.deleteOne({ nameUser: request.body.nameUser, title: request.body.title })
            .then((photo) => {
                console.log("Foto eliminada")
                response.send(photo);
            })
            .catch((error) => {
                console.log(error);
            })
    }

}





module.exports = { getPhoto, postPhoto, putPhoto, deletePhoto }