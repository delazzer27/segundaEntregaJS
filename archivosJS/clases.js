// VARIABLES
class CursoProd {
    constructor(materia, docente, precio) {
        this.materia = materia;
        this.docente = docente;
        this.precio = precio;
    }
}

let listaCursos = [];

const agregarCurso = () => {
    let materia = document.querySelectorAll(".card-title").value;
    let docente = document.querySelectorAll(".docente").value;
    let precio = document.querySelector("#precio").value;
    let nuevoCurso = new CursoProd(materia, docente, precio);
    listaCursos.push(nuevoCurso);
    console.log(nuevoCurso);
}


// #################FILTRAR POR MATERIA 

let boton = document.querySelector("#btnFiltrar");

boton.addEventListener("click", (e) => {
            let buscarMateria = document.querySelector("#buscar1").value.toLowerCase();
            let tituloClase = document.querySelectorAll(".card");
            if (buscarMateria !== "" && buscarMateria !== null && buscarMateria !== undefined) {

                for (const elemento of tituloClase) {
                    if (!elemento.className.includes(buscarMateria)) {
                        let div = elemento.className.split(" ");
                        elemento.className = `card ${div[1]} filter`;
                    }
                }
            } else {
                for (const elemento of tituloClase) {
                    let div = elemento.className.split(" ");
                    elemento.className = `card ${div[1]}`;
                } 
            }

                /* let resultado = tituloClase.find(el => el.innerHTML.includes(buscarMateria)); */

            })

// CARRITO 
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
