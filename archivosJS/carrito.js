//VARIABLES
// VARIABLES GLBALES PARA ACCEDER A ESTOS DATOS DEL LOCAL
let cursos = JSON.parse(localStorage.getItem("cursos"));
let cart = JSON.parse(localStorage.getItem("cart")); //array vacio
//variables para filtrar 
let boton1 = document.querySelector("#btnFiltrar1");
let botonAtras1 = document.querySelector("#atras");
let boton2 = document.querySelector("#btnFiltrar2");
let botonAtras2 = document.querySelector("#atras2");
//variables carrito
const carrito = document.querySelector("#cart");
const carritoOverlay = document.querySelector(".cart-modal-overlay");
const cerrarCarrito = document.querySelector("#close-btn");
const addToCart = document.getElementsByClassName("add-to-cart");
const productRows = document.getElementsByClassName("product-row");
//boton comprar
let btnComprar = document.querySelector(".purchase-btn");
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
                      <img src="${element.imagen}" alt="" class="product-image">
                      <div class="card-body">
                          <h4>Clase de ${element.materia}</h4>
                          <div class="prices flex">
                              <p>Precio por hora: $ <p class="price"> ${element.precio}</p>
                              </p>
                              <input class="product-quantity" type="number" value="1">
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
        add();
    })
    .catch(error => console.log(error));

fetch("datos.json")
    .then(response => response.json())
    .then(data => {
        localStorage.setItem("cursos", JSON.stringify(data));
        if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
        }
    })
    .catch(error => console.log(error));

//Filtrar por materia 
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
// FILTRAR POR PRECIO 
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

// ABRIR CARRITO 
carrito.addEventListener("click", () => {
    if (!carritoOverlay.classList.contains("open")) {
        carritoOverlay.classList.add("open")
    } else {
        carritoOverlay.classList.remove("open")
    }
})
// CERRAR CARRITO 
cerrarCarrito.onclick = () => {
    carritoOverlay.classList.remove("open");
}
carritoOverlay.onclick = (e) => {
    if (e.target.classList.contains("cart-modal-overlay")) {
        carritoOverlay.classList.remove("open")
    }
}
// asignarle a cada boton, su funcion
function add() {
    for (let i = 0; i < addToCart.length; i++) {
        let boton = addToCart[i];
        boton.addEventListener("click", agregarCarrito);
    }
}

function agregarCarrito(e) {
    let boton = e.target;
    let cartItem = boton.parentElement.parentElement.parentElement.parentElement;
    let prodId = cartItem.getAttribute("id");
    let prodName = cartItem.querySelector("h4").innerText;
    let price = cartItem.querySelector(".price").innerText;
    let imageSrc = cartItem.querySelector(".product-image").src;
    let cantidad = cartItem.querySelector(".product-quantity").value;
    agregarElem(prodId, prodName, price, imageSrc, cantidad);
}

function agregarElem(prodId, prodName, price, imageSrc, cantidad) {
    let productRow = document.createElement("div");
    let productRows = document.querySelector(".product-rows");
    let prodArray = document.getElementsByClassName("product-row");
    //vamos a ver si el producto ya se agrego o no
    for (let i = 0; i < prodArray.length; i++) {
        if (prodArray[i].getAttribute("id") == prodId) {
            Toastify({
                text: "Este producto ya existe en el carrito",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "center",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, rgb(238, 201, 34), rgb(218, 185, 34))",
                },
                onClick: function () {}
            }).showToast();
            return;
        }
    }
    //inyectar el html al carrito
    let cartRowItem = `
        <div class="product-row" id="${prodId}">
            <img class="cart-image" src="${imageSrc}">
            <span class ="cart-name">${prodName}</span>
            <span class="cart-price">$${price}</span>
            <span class="cart-cantidad">${cantidad}hs</span>
            <button class="remove-btn">Borrar</button>
        </div>
    `
    productRow.innerHTML = cartRowItem;
    productRows.append(productRow);
    productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
    updatePrice();
    class CursoProd {
        constructor(materia, precio, id, horas) {
            this.materia = materia;
            this.precio = precio;
            this.id = id;
            this.horas = horas
        }
    }
    const listaCursos = JSON.parse(localStorage.getItem("cart")) || [];
    const agregarCurso = () => {
        let materia = prodName;
        let precio = price;
        let id = prodId;
        let horas = cantidad;
        let nuevoCurso = new CursoProd(materia, precio, id, horas);
        listaCursos.push(nuevoCurso)
        localStorage.setItem("cart", JSON.stringify(listaCursos))
        // LOCAL STORAGE DEL PRECIO
        let cartCost = localStorage.getItem("precio");
        if (cartCost != null) {
            cartCost = parseInt(cartCost);
            cartCost2 = parseInt(nuevoCurso.precio * nuevoCurso.horas)
            localStorage.setItem("precio", cartCost + cartCost2);
        } else {
            localStorage.setItem("precio", nuevoCurso.precio * nuevoCurso.horas)
        }
        //LOCAL STORAGE DE CANT DE PROD
        let productoCantidad = localStorage.getItem("cartCantidad");
        productoCantidad = parseInt(productoCantidad)
        if (productoCantidad) {
            localStorage.setItem("cartCantidad", productoCantidad + 1);
            document.querySelector(".cart-quantity").textContent = productoCantidad + 1;
        } else {
            localStorage.setItem("cartCantidad", 1);
            document.querySelector(".cart-quantity").textContent = 1;
        }
    }
    agregarCurso();
}

//eliminar elementos
function removeItem(e) {
    let btnCliked = e.target;
    btnCliked.parentElement.parentElement.remove();
    updatePrice();
    let boton = e.target;
    let cartItem = boton.parentElement;
    let prodId = cartItem.getAttribute("id"); //me trae el id del que elimine 
    //Actualizar local storage 
    let cart = JSON.parse(localStorage.getItem("cart"));
    let cartActual = cart.filter((item) => item.id !== prodId)
    cartActual = localStorage.setItem("cart", JSON.stringify(cartActual))
    //Actualizar precio local storage si se borra un product 
    let cartCost = localStorage.getItem("precio");
    let cartElim = cart.filter((item) => item.id == prodId)
    for (const producto of cartElim) {
        let price = producto.precio;
        let cantidad = producto.horas;
        let cartCostActual = localStorage.setItem("precio", cartCost - price * cantidad);
        // Actualizar cant prod si se borra un product 
        let cartQuantity = localStorage.getItem("cartCantidad");
        cartQuantity = parseInt(cartQuantity);
        if (cartQuantity) {
            localStorage.setItem("cartCantidad", cartQuantity - 1);
            document.querySelector(".cart-quantity").textContent = cartQuantity - 1;
        }
    }
}

// actualizar el total
function updatePrice() {
    let total = 0;
    for (const producto of productRows) {
        let price = parseFloat(producto.querySelector(".cart-price").innerText.replace("$", ""));
        let cantidad = parseInt(producto.querySelector(".cart-cantidad").innerText);
        total += price * cantidad;
    }
    document.querySelector(".total-price").innerText = "$" + total;
    document.querySelector(".cart-quantity").textContent = productRows.length;
}

function updateCart() {
    fetch("datos.json")
    .then(response => response.json())
    .then(resultado => {
        let dato = resultado;
        dato.forEach(element => {
            let imagen = element.imagen;
            let id = element.id;
            let productoCantidad = localStorage.getItem("cartCantidad");
    document.querySelector(".cart-quantity").textContent = productoCantidad;
    let cart = JSON.parse(localStorage.getItem("cart") || 0); //me da un array de objs
    for (i = 0; i < cart.length; i++) {
        let productId = cart[i].id;
        let productName = cart[i].materia;
        let productPrice = cart[i].precio;
        let cantidad = cart[i].horas;
        if (productId == id) {
            function actualizarElem() {
                let productRow = document.createElement("div");
                let productRows = document.querySelector(".product-rows");
                //inyectar el html al carrito
                let cartRowItem = `
                    <div class="product-row" id="${productId}">
                        <img class="cart-image" src="${imagen}">
                        <span class ="cart-name">${productName}</span>
                        <span class="cart-price">${productPrice}</span>
                        <span class="cart-cantidad">${cantidad}hs</span>
                        <button class="remove-btn">Borrar</button>
                    </div>
                `
                productRow.innerHTML = cartRowItem;
                productRows.append(productRow);
                productRow.querySelector(".remove-btn").addEventListener("click", removeItem);
            }
            actualizarElem();
        }
        let cartCost = localStorage.getItem("precio") || 0;
        document.querySelector(".total-price").innerText = "$" + cartCost;
        }
        })
        
    })
    .catch(error => console.log(error));
}
updateCart()

//Click al comprar 
btnComprar.addEventListener("click", () => {
    swal("Compra realizada", "¡Muchas gracias! Podés seguir navengando por nuestra página");
    localStorage.removeItem('cart');
    localStorage.removeItem('precio');
    localStorage.removeItem('cartCantidad');
    setTimeout(() => {
        document.location.reload()
        updateCart()
    }, 2000)
})