function docenteAlumno() {
    let rol = prompt("¿Sos estudiante o docente?");
    rol = rol.toLocaleLowerCase();
    switch (rol) {
        case "estudiante":
            const estudiante = () => {
                let matematica = confirm("¿Necesitas ayuda en matemática?");
                console.log(matematica);
                let idioma = confirm("¿Necesitas ayuda en algún idioma?");
                console.log(idioma);
                let historia = confirm("¿Necesitas ayuda en historia?");
                console.log(historia);
                let literautra = confirm("¿Necesitas ayuda en literatura?");
                console.log(literautra);
                alert("!Tenemos el curso para vos!");
            }
            estudiante();
            break;
        case "docente":
            const docente = () => {
                let matematicaDocente = confirm("¿Das clases de matemática?");
                console.log(matematicaDocente);
                let idiomaDocente = confirm("¿Das clases de algún idioma?");
                console.log(idiomaDocente);
                let historiaDocente = confirm("¿Das clase de historia?");
                console.log(historiaDocente);
                let literautraDocente = confirm("¿Das clase de literatura?");
                console.log(literautraDocente);
                alert("!Inscribite para comenzar a dar clases!");
            }
            docente();
            break;
        default:
            alert("¡Navega por la pagina y descubre el mundo de clases que hay!");
            break;
    }
}


docenteAlumno();