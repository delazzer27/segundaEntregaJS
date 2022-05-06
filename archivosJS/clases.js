// VARIABLES
class CursoProd {
    constructor(materia, docente, precio) {
        this.materia = materia;
        this.docente = docente;
        this.precio = precio;
    }
}

let listaCursos = [];

// const agregarCurso = () => {
//     let materia = document.querySelectorAll(".card-title").value;
//     let docente = document.querySelectorAll(".docente").value;
//     let precio = document.querySelector("#precio").value;
//     let nuevoCurso = new CursoProd(materia, docente, precio);
//     listaCursos.push(nuevoCurso);
//     console.log(nuevoCurso);
// }

// CARRITO 
$(function (){

    $("#cart-items").slideUp();
    $(".cart").on("click", function () {
    $("#cart-items").slideToggle();
    });

    $("#items-basket").text("(" + ($("#list-item").children().length) + ")");

    
    $(".item").on("click", function () {
  $("#cart-items").slideDown();
 setTimeout(function(){
    $("#cart-items").slideUp();
 }, 3000)
        //AGREGAR ITEMS AL CARRITO 
        $(this).each(function () {
            let name = $(this).children(".item-detail").children(".card-body").children("h4").text();
            let remove = "<button class='remove'> X </button>";
            let cena = "<span class='eachPrice'>" + (parseFloat($(this).children(".item-detail").children(".card-body").children(".prices").children(".price").text())) + "</span>";
            $("#list-item").append("<li>" + name + "&#09; - &#09;" + cena + "$" + remove + "</li>");
            listaCursos.push(name)
            localStorage.setItem("materia", JSON.stringify(listaCursos));
            //CANTIDAD DE ITEMS 
            $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
            $("#items-basket").text();
    
        //CALCULAR PRECIO FINAL
        let totalPrice = 0;
            $(".eachPrice").each(function (){ 
              let cenaEach = parseFloat($(this).text());
              totalPrice+=cenaEach;
            });
            $("#total-price").text(totalPrice + "$");
            // listaCursos.push(name, );
            // console.log(listaCursos);
        });

        //SACAR ITEMS
        $(".remove").on("click", function () {
            $(this).parent().remove();
            let totalPrice = 0;
            $(".eachPrice").each(function (){ 
              let cenaEach = parseFloat($(this).text());
              totalPrice+=cenaEach;
            });
            $("#total-price").text(totalPrice + "$");
            $("#items-basket").text("(" + ($("#list-item").children().length) + ")");
        });
    });
})

// #################FILTRAR POR MATERIA, averiguar por el acento al buscar

let boton1 = document.querySelector("#btnFiltrar1");
let botonAtras1 = document.querySelector("#atras");

boton1.addEventListener("click", (e) => {
            let buscarMateria = document.querySelector("#buscar1").value.toLowerCase();
            let tituloClase = document.querySelectorAll(".productos");
            if (buscarMateria !== "" && buscarMateria !== null && buscarMateria !== undefined) {
                for (const elemento of tituloClase) {
                    if (!elemento.innerText.includes(buscarMateria)) {
                        let div = elemento.className.split(" ");
                        elemento.className = `col item productos filter`;
                    }
                }
            } else {
                for (const elemento of tituloClase) {
                    let div = elemento.className.split(" ");
                    elemento.className = `col item productos`;
                } 
            }
            })
botonAtras1.addEventListener("click", (e) => {
            let tituloClase = document.querySelectorAll(".productos");
                for (const elemento of tituloClase) {
                        let div = elemento.className.split(" ");
                            elemento.className = `col item productos`;
                }
            })
// #################FILTRAR POR PRECIO , averiguar como hacer para que arroje precios menores al que pone el usuario

let boton2 = document.querySelector("#btnFiltrar2");
let botonAtras2 = document.querySelector("#atras2");
boton2.addEventListener("click", (e) => {
            let tituloClase = document.querySelectorAll(".productos");
            let buscarPrecio = document.querySelector("#buscar2").value;
            if (buscarPrecio !== "" && buscarPrecio !== null && buscarPrecio !== undefined) {

                for (const elemento of tituloClase) {
                    if (!elemento.innerText.includes(buscarPrecio)) {
                        let div = elemento.className.split(" ");
                        elemento.className = `col item productos filter`;
                    }
                }
            } else {
                for (const elemento of tituloClase) {
                    let div = elemento.className.split(" ");
                    elemento.className = `col item productos`;
                } 
            }
        })
        botonAtras2.addEventListener("click", (e) => {
            let tituloClase = document.querySelectorAll(".productos");
                for (const elemento of tituloClase) {
                        let div = elemento.className.split(" ");
                            elemento.className = `col item productos`;
                }
            })