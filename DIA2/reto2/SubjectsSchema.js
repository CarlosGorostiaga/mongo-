const mongoose = require("mongoose");
const TeachersModel = require("./TeacherSchema")

const SubjectsModel = new mongoose.Schema({
    title: String,
    teachers: [TeachersModel.schema]

})

module.exports = mongoose.model("Subjects", SubjectsModel) 