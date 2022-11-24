const mongoose = require("mongoose");
const SubjectsModel = require("./SubjectsSchema")

const MarksModel = new mongoose.Schema({
    date: Date,
    mark: Number,
    subjects: [SubjectsModel.schema]


})

module.exports = mongoose.model("Marks", MarksModel) 