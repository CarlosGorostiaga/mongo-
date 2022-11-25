const mongoose = require("mongoose");
const TeachersModel = require("./teacherSchema")

const MarksModel = new mongoose.Schema({
    date: Date,
    mark: Number,
    student_first_name: String,
    student_last_name : String,
    group_name : String , 
    subject_name:String,
    teachers : [TeachersModel.schema]




})

module.exports = mongoose.model("Marks", MarksModel, "marks") 