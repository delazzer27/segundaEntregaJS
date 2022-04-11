// function docenteAlumno() {
//     let rol = prompt("¿Sos estudiante o docente?");
//     rol = rol.toLocaleLowerCase();
//     switch (rol) {
//         case "estudiante":
//             const estudiante = () => {
//                 let matematica = confirm("¿Necesitas ayuda en matemática?");
//                 console.log(matematica);
//                 let idioma = confirm("¿Necesitas ayuda en algún idioma?");
//                 console.log(idioma);
//                 let historia = confirm("¿Necesitas ayuda en historia?");
//                 console.log(historia);
//                 let literautra = confirm("¿Necesitas ayuda en literatura?");
//                 console.log(literautra);
//                 alert("!Tenemos el curso para vos!");
//             }
//             estudiante();
//             break;
//         case "docente":
//             const docente = () => {
//                 let matematicaDocente = confirm("¿Das clases de matemática?");
//                 console.log(matematicaDocente);
//                 let idiomaDocente = confirm("¿Das clases de algún idioma?");
//                 console.log(idiomaDocente);
//                 let historiaDocente = confirm("¿Das clase de historia?");
//                 console.log(historiaDocente);
//                 let literautraDocente = confirm("¿Das clase de literatura?");
//                 console.log(literautraDocente);
//                 alert("!Inscribite para comenzar a dar clases!");
//             }
//             docente();
//             break;
//         default:
//             alert("¡Navega por la pagina y descubre el mundo de clases que hay!");
//             break;
//     }
// }
// docenteAlumno();





class Docentes {
    constructor(nombre, edad, materias, precio) {
        this.nombre = nombre;
        this.edad = edad;
        this.materias = materias;
        this.precio = precio;
    }
    bio = () => {
        console.log(`${this.nombre} tiene ${this.edad}, da clases de ${this.materias} y cobra ${this.precio} pesos la hora`);
    }
}
const nuevoDocente = () => {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tenés?");
    let materias = prompt("¿Qué materias das?");
    let precio = parseFloat(prompt("¿Cúanto cobras la hora?"));
    let bioDocente = new Docentes(nombre, edad, materias, precio);
    console.log(bioDocente.bio());
}

class Alumnos {
    constructor(nombre, edad, materias) {
        this.nombre = nombre;
        this.edad = edad;
        this.materias = materias;
    }
    bio = () => {
        console.log(`${this.nombre} tiene ${this.edad}, necesita ayuda en ${this.materias}`);
    }
}
const nuevoAlumno = () => {
    let nombre = prompt("¿Cuál es tu nombre?");
    let edad = prompt("¿Cuántos años tenés?");
    let materias = prompt("¿En qué materias necesitas ayuda?");
    let bioAlumno = new Alumnos(nombre, edad, materias);
    console.log(bioAlumno.bio());
}



function docenteAlumno() {
    let rol = prompt("¿Sos estudiante o docente?");
    rol = rol.toLowerCase();
    switch (rol) {
        case "docente":
            nuevoDocente();
            break;
        case "estudiante":
            nuevoAlumno();
            break;
        default:
            alert("¡Navega por la pagina y descubre el mundo de clases que hay!");
            break;
    }
}
docenteAlumno();


class CursoProd {
    constructor(materia, docente, precio) {
        this.materia = materia;
        this.docente = docente;
        this.precio = precio;
    }
}
const agregarCurso = () => {
    let materia = prompt("¿En qué materia necesitas ayuda?");
    let docente = prompt("¿Con qué docente lo vas a hacer?");
    let precio = parseFloat(prompt("¿Cuánto sale el curso?"));
    let clase = new CursoProd(materia, docente, precio);
    listaCursos.push(clase);
}
let listaCursos = [];
let pregunta = confirm("¿Vas a querer arrancar un curso? Coloca solamente una materia");
while (pregunta !== false) {
    agregarCurso();
    pregunta = confirm("¿Vas a querer arrancar un nuevo curso?");
} 
    console.log(listaCursos);
    console.log ("¡Muchas gracias por visitar nuestra página!")

let listaProductoCursos = [{
        materia: "matematica",
        docente: "juana",
        precio: "700"
    },
    {
        materia: "fisica",
        docente: "esteban",
        precio: "650"
    },
    {
        materia: "historia",
        docente: "ana",
        precio: "1000"
    },
    {
        materia: "ingles",
        docente: "agustín",
        precio: "900"
    },
    {
        materia: "literatura",
        docente: "maricel",
        precio: "600"
    },
    {
        materia: "historia",
        docente: "canela",
        precio: "1100"
    },
    {
        materia: "química",
        docente: "javier",
        precio: "800"
    },
    {
        materia: "matematica",
        docente: "martín",
        precio: "900"
    }
]

function seguirBuscando() {
    let preguntaCurso = confirm("¿Querés buscar un curso en particular?")
    if (preguntaCurso == true) {
        let filtro = prompt("Escribe como querés filtrar. Si por materia, docente o precio. Escriba una opción.")
        filtro = filtro.toLowerCase();
        switch (filtro) {
            case "materia":
                let searchMateria = prompt("¿Qué materia estás buscando?").toLowerCase();
                let buscarMateria = listaProductoCursos.filter(obj => {
                    return obj.materia == searchMateria;
                });
                console.log(buscarMateria);
                break;
            case "docente":
                let searchDocente = prompt("¿Qué docente estás buscando?").toLowerCase();
                let buscarDocente = listaProductoCursos.filter(obj => {
                    return obj.docente == searchDocente;
                });
                console.log(buscarDocente);
                break;
            case "precio":
                let searchPrecio = parseFloat(prompt("¿Qué precio estás buscando?"));
                let buscarPrecio = listaProductoCursos.filter(obj => {
                    return obj.precio <= searchPrecio;
                });
                console.log(buscarPrecio);
                break;
                default:
                    alert ("Ese filtro no lo tenemos. ¡Disculpanos!")
                    break;
        }
    } else {
        console.log ("¡Continua navegando por la página!")
    }
}
seguirBuscando();

const totalPrecio = listaCursos.reduce ((acumulador, obj)=> acumulador + obj.precio, 0);
console.log (`El precio total a pagar es de ${totalPrecio} y realizara ${listaCursos.length} cursos`);