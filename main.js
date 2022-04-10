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






function docenteAlumno() {
    let rol = prompt("¿Sos estudiante o docente?");
    rol = rol.toLocaleLowerCase();
    switch (rol) {
        case "docente":

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
            nuevoDocente();
            break;
        case "estudiante":
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
            nuevoAlumno();

            break;
        default:
            alert("¡Navega por la pagina y descubre el mundo de clases que hay!");
            break;
    }
}
docenteAlumno();


let listaCursos = [];
let pregunta = confirm("¿Vas a querer arrancar un curso? Coloca solamente una materia");
while (pregunta !== false) {
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
    agregarCurso();
    pregunta = confirm("¿Vas a querer arrancar un nuevo curso?");
    console.log(listaCursos);

} 
    console.log ("¡Muchas gracias por visitar nuestra página!")