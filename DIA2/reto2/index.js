const mongoose = require("mongoose");

const Teachers = require("./TeacherSchema");
const Subjects = require("./SubjectsSchema");
const Marks = require("./MarksSchema");
const Students = require("./StudentsSchema");



mongoose.connect("mongodb+srv://carlos1996:carlos1996@cluster0.iu4xmlp.mongodb.net/DIA2-reto2",
    { useNewUrlParser: false, useUnifiedTopology: false });

// *****************CREACION DE PROFESORES********************
let teacher1 = new Teachers({

    firstName: "Jose",
    lastName: "Herrera",
    groups: ["Full-Time", "Full-Time-Online", "Part-time"]
})

let teacher2 = new Teachers({

    firstName: "Carmen",
    lastName: "Martin",
    groups: ["Full-Time", "Part-time"]
})

let teacher3 = new Teachers({

    firstName: "Dani",
    lastName: "Vera",
    groups: ["Full-Time-Online", "Remoto"]
})

// ********************CREACION DE ASIGNATURAS************************

let subject1 = new Subjects({

    title: "Node",
    teachers: [teacher1, teacher2],

})

let subject2 = new Subjects({

    title: "Fundamentos",
    teachers: [teacher1],

})

let subject3 = new Subjects({

    title: "Maquetacion",
    teachers: [teacher2],

})

let subject4 = new Subjects({

    title: "SQL",
    teachers: [teacher1, teacher2, teacher3],

})

let subject5 = new Subjects({

    title: "MONGO",
    teachers: [teacher1, teacher2, teacher3],

})

let subject6 = new Subjects({

    title: "Angular",
    teachers: [teacher3],

})

// ********************CREACION DE NOTAS************************

let nota1 = new Marks({

    date: "2022-8-10",
    mark: 9,
    subjects: [subject1]


})

let nota2 = new Marks({

    date: "2022-7-18",
    mark: 3,
    subjects: [subject2]


})

let nota3 = new Marks({

    date: "2022-10-5",
    mark: 6,
    subjects: [subject3]


})

let nota4 = new Marks({

    date: "2022-11-23",
    mark: 7,
    subjects: [subject4]


})

let nota5 = new Marks({

    date: "2022-8-15",
    mark: 7,
    subjects: [subject5]


})

let nota6 = new Marks({

    date: "2022-11-12",
    mark: 5,
    subjects: [subject6]


})

// ********************CREACION DE ESTUDIANTES************************

let estudiante1 = new Students({

    firstName: "Carlos",
    lastName: "Gorostiaga",
    marks: [nota6, nota1]
})

let estudiante2 = new Students({

    firstName: "Javier",
    lastName: "Fernandez",
    marks: [nota5, nota2]
})

let estudiante3 = new Students({

    firstName: "Fanel",
    lastName: "Adrian",
    marks: [nota4, nota3]
})

// ********************************SUBIDA DEL ESTUDIANTE***************************

// estudiante2.save(estudiante2)
// .then(function(dato){
//     console.log(dato);
//     console.log("Documento generado correctamente");
// })
// .catch(function(){
//     console.log("Error al generar Documento");
// })


// ************************TODAS LAS NOTAS DE UN ALUMNO*****************************

// Students.find({}).where("firstName").equals("Carlos")
//     .then(function (dato) {
//         console.log(dato[0].marks);
//     })
//     .catch(function () {
//         console.log("Error");
//     })

// **************Mostrar por consola todos las asignaturas de un alumno.************************
// Students.find({}).where("firstName").equals("Carlos")
//     .then((dato) => {
//         console.log("Mostrando Datos de estudiante");

//         for (let i = 0; i < dato[0].marks.length; i++) {
//             console.log(dato[0].marks[i].subjects);
//         }
//     })
//     .catch(() => {
//         console.log("Error");
//     })


// ********************Todos los profesores de un alumno.*******************
Students.find({}).where("firstName").equals("Carlos")
    .then(function (dato) {
        console.log("Mostrando Datos de estudiante");

        for (let i = 0; i < dato[0].marks.length; i++) {
            for (let a = 0; a < dato[0].marks[i].subjects.length; a++)
                console.log(dato[0].marks[i].subjects[a].teachers);
        }
    })
    .catch(function () {
        console.log("Error");
    })

