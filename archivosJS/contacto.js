const formulario = document.querySelector("form")
const boton = document.querySelector (".boton");
const input = document.querySelectorAll ("input");

// No toma el required del HTML 
boton.onclick = (e) => {
    e.preventDefault();
    const inputName = document.querySelector('#inputName').value
    const inputTel = document.querySelector('#inputTel').value
    const inputEmail = document.querySelector('#inputEmail').value
    if (!inputName ||  !inputTel ||  !inputEmail ){
        console.log("falta alguno de los campos")
    } else {
        swal("Se envío el formulario correctamente", "Aceptar", "success");
        setTimeout (()=>{
            formulario.submit();
        }
        ,3000)
    }
}
