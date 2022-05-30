//VARIABLES
const carrito = document.querySelector("#cart");
const carritoOverlay = document.querySelector(".cart-modal-overlay");
const cerrarCarrito = document.querySelector("#close-btn");
const productRows = document.getElementsByClassName("product-row");
//boton comprar
let btnComprar = document.querySelector(".purchase-btn");

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
    let saludo = document.querySelector (".bienvenido");
    let usuario = localStorage.getItem("nombre");
    if (usuario == null){
        saludo.innerText = `¡Bienvenido a Mundo Clases, navega y encontra el curso y el docente para vos!`;
    } else {
        saludo.innerText = `¡Bienvenido/a ${usuario} a Mundo Clases, navega y encontra el curso y el docente para vos!`;
    }
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

//iniciar sesion 
let sesion = document.querySelector("#sesion")
sesion.addEventListener("click", () => {
    swal("Ingrese su usuario:", {
        content: "input",
      })
      .then((value) => {
        if (!value){
            Toastify({
                text: "Debe completar el campo si ya es usuario",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top",
                position: "right",
                stopOnFocus: true,
                style: {
                    background: "linear-gradient(to right, #cb1313, #ce0505)",
                },
                onClick: function () {}
            }).showToast();
        } else {
            let saludo = document.querySelector (".bienvenido");
            saludo.innerText = `¡Bienvenido/a ${value} a Mundo Clases, navega y encontra el curso y el docente para vos!`;
            let usuario = JSON.stringify(localStorage.setItem("nombre", value))
        }
      })
      .catch(error => console.log(error));
      })
