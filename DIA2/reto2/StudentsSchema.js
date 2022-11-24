const mongoose = require("mongoose");
const MarksModel = require("./MarksSchema")

const StudentsModel = new mongoose.Schema({
    firstName: String,
    lastName: String,
    marks: [MarksModel.schema]

})

module.exports = mongoose.model("Students", StudentsModel) 