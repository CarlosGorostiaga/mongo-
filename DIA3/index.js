const mongoose = require("mongoose");
const Marks = require("./marksSchema");
const Teachers = require("./teacherSchema");

mongoose.connect("mongodb+srv://carlos1996:carlos1996@cluster0.iu4xmlp.mongodb.net/DIA3-reto1-2",
    { useNewUrlParser: false, useUnifiedTopology: false });

// **************CREACION DE PROFESORES********************


let profesor1 = new Teachers({
    teacher_first_name: "Jose",
    teacher_last_name: "Herrera"

})

let profesor2 = new Teachers({
    teacher_first_name: "Menchu",
    teacher_last_name: "Martin"

})

let profesor3 = new Teachers({
    teacher_first_name: "Dani",
    teacher_last_name: "Vera"

})

// ***********************CREACION DE NOTAS*****************

let nota1 = new Marks({
    date: "2022-7-18",
    mark: 7,
    student_first_name: "Carlos",
    student_last_name: "Gorostiaga",
    group_name: "Tulipanes",
    subject_name: "Node",
    teachers: [profesor1]

})

let nota2 = new Marks({
    date: "2028-10-12",
    mark: 3,
    student_first_name: "Javier",
    student_last_name: "Fernandez",
    group_name: "Girasoles",
    subject_name: "Angular",
    teachers: [profesor2]

})

let nota3 = new Marks({
    date: "2022-7-18",
    mark: 10,
    student_first_name: "Fanel",
    student_last_name: "Adrian",
    group_name: "Tulipanes",
    subject_name: "Maquetacion",
    teachers: [profesor1, profesor3]

})

let nota4 = new Marks({
    date: "2019-10-27",
    mark: 7,
    student_first_name: "Pablo",
    student_last_name: "Sarmiento",
    group_name: "Gerundios",
    subject_name: "SQL",
    teachers: [profesor2, profesor1]

})

let nota5 = new Marks({
    date: "2019-10-27",
    mark: 7,
    student_first_name: "Carlos",
    student_last_name: "Gorostiaga",
    group_name: "Gerundios",
    subject_name: "SQL",
    teachers: [profesor2, profesor1]

})

// ********************************SUBIDA DE LA NOTA***************************

// nota5.save(nota5)
// .then(function(dato){
//     console.log(dato);
//     console.log("Documento generado correctamente");
// })
// .catch(function(){
//     console.log("Error al generar Documento");
// })

// ************Calcular la nota media de los alumnos de una asignatura concreta********************

// Marks.aggregate([{ $match: { subject_name: "SQL" } }, { $group: { "_id": null, "Nota Media SQL": { "$avg": "$mark" } } }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// *************Calcular el número total de alumnos que hay en el bootcamp incluyendo repetidos.****************

// Marks.aggregate([{ $count: "total de alumnos" }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// ************************Listar el nombre y los apellidos de todos los alumnos incluyendo repetidos.******************

// Marks.aggregate([{ $project: { "student_first_name": 1, "student_last_name": 1, "_id": 0 } }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// **********************Listar el nombre y los apellidos de todos los profesores incluyendo repetidos.*****************


// Marks.aggregate([{ $unwind: "$teachers" }, { $project: { "teachers.teacher_first_name": 1, "teachers.teacher_last_name": 1, _id: 0 } }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// ***********************Mostrar el número total de alumnos por grupo ordenados por grupo en orden inverso al alfabeto.*******************
// Marks.aggregate([{$group: {"_id": {"Nombre del grupo" : "$group_name"}, "Número de alumnos": {"$sum": 1}}},{"$sort": {"_id": -1}}])
// .then((result) =>
// {
//     console.log(result);
// })
// .catch((error) =>
// {
//     console.log(error);
// })

// **********************Obtén el top 5 de los nombres de las asignaturas cuya nota media sea mayor que 5.************************
// Marks.aggregate([{ $group: { "_id": "$subject_name", "Media": { "$avg": "$mark" } } }, { $match: { "Media": { "$gt": 5 } } }, { "$sort": { "Media": -1 } }, { $limit: 5 }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })


// ******************Calcular el numero de profesores que hay por cada asignatura incluyendo repetidos.****************
// Marks.aggregate([{ $unwind: "$teachers" }, { $group: { "_id": { "Asignatura": "$subject_name" }, "Nº de Profesores": { "$sum": 1 } } }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// ***************************************RETO2***********************RETO2***************************RETO2*******************

// ********Obtén el nombre, apellido y la nota de los alumnos que tengan una nota mayor de 8 o la nota tenga fecha del año pasado o anterior.***********
// Marks.aggregate([{ $match: { "$or": [{ "mark": { "$gt": 8 } }, { "date": { "$lte": "2021-12-12" } }] } },
//                  { $project: { "student_first_name": 1, "student_last_name": 1, "mark": 1, "_id": 0 } }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

//************************** Obtén la media de las notas que se han dado en el último año por asignatura.*********************
// Marks.aggregate([{ $match: { "date": { "$gte": new Date("2021-12-12") } } }, { $group: { "_id": { "Asignatura": "$subject_name" }, "Media": { "$avg": "$mark" } } }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// *************************Obtén la media aritmética de las notas que se han dado en el último año por nombre de alumno.****************************
// Marks.aggregate([{ $match: { "date": { "$gte": new Date("2021-12-12") } } }, { $group: { "_id": { "Nombre de alumno": "$student_first_name" }, "Media": { "$avg": "$mark" } } }])
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error) => {
//         console.log(error);
//     })

// **********Obtén los nombres de los alumnos y la cantidad total de asignaturas por alumno cuyo profesorsea uno que elijáis.****************
Marks.aggregate([{ $unwind: "$teachers" }, 
                 { $match: { "teachers.teacher_first_name": "Jose" } }, 
                 { $group: { "_id": { "Alumnos": "$student_first_name" }, "value": { "$sum": 1 } } }])
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    })
















