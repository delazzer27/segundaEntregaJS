//OBTENER DATOS
const container = document.querySelector("#contenedor");
  fetch("datos.json")
    .then(response => response.json())
    .then(resultado => {
      let dato = resultado;
      dato.forEach(element => {
        container.innerHTML += `
              <div class="col item productos">
                  <div class="card shadow-sm item-detail" id="${element.id}">
                      <img src="https://via.placeholder.com/280x200" alt="" class="product-image">
                      <div class="card-body">
                          <h4>Clase de ${element.materia}</h4>
                          <div class="prices flex">
                              <p>Precio por hora: $ <p class="price"> ${element.precio}</p>
                              </p>
                          </div>
                          <div class="d-flex justify-content-between align-items-center">
                              <div class="btn-group">
                                  <button type="button"
                                      class="btn btn-sm btn-outline-secondary add-to-cart">Agregar al carrito</button>
                                  
                              </div>
                          </div>
                      </div>
                  </div>
              </div>                                     
              `
      })
    })
    .catch(error => console.log(error))

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

    
//########################################CARRITO ########################################
// VARIABLES
const carrito = document.querySelector("#cart");
const carritoOverlay = document.querySelector (".cart-modal-overlay");
const cerrarCarrito = document.querySelector("#close-btn");
const addToCart = document.getElementsByClassName("add-to-cart"); 
const productRows = document.getElementsByClassName("product-row"); 
// ABRIR CARRITO --> Buscar con toggle en jQuerry 
carrito.addEventListener ("click", ()=> {
    if (!carritoOverlay.classList.contains("open")) {
        carritoOverlay.classList.add("open")
    } else {
        carritoOverlay.classList.remove("open")
    }
})
// CERRAR CARRITO 
cerrarCarrito.onclick =()=> {
    carritoOverlay.classList.remove("open");
}
carritoOverlay.onclick =(e)=> {
    if (e.target.classList.contains("cart-modal-overlay")) {
        carritoOverlay.classList.remove("open")
    }
}
// asignarle a cada boton, su funcion
for ( boton of addToCart) {
    console.log(boton)
}