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


let listaCursos = [];
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


const consultarPorNuevoCurso = () => {
    let pregunta = confirm("¿Vas a querer arrancar un curso? Coloca solamente una materia");
    while (pregunta !== false) {
        agregarCurso();
        pregunta = confirm("¿Vas a querer arrancar un nuevo curso?");
    }
    console.log(listaCursos);
    console.log("¡Muchas gracias por visitar nuestra página!")
    const totalPrecio = listaCursos.reduce((acumulador, obj) => acumulador + obj.precio, 0);
console.log(`El precio total a pagar es de ${totalPrecio} y realizara ${listaCursos.length} cursos`);
}



let nombre = prompt ("¿Cómo te llamas?");
let saludo = document.querySelector (".bienvenido");
saludo.innerText = `¡Bienvenido ${nombre} a Mundo Clases, navega y encontra el curso y el docente para vos!`;

const boton = document.querySelector(".boton");
boton.onclick = (e) => {
    e.preventDefault ();
    alert ("Ya no hay vacantes para este curso");
}



