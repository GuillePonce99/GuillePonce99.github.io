//VARIABLES
let misContactos

//CONSTANTES
const nombreUsuario = document.getElementById("nombreUsuario"); 
const miAPI = 'datos/data.json';
const nombre = document.querySelector(".nombre");
const telefono = document.querySelector(".numero");
const direccion = document.querySelector(".direccion");
const btnAgregarContacto = document.querySelector(".btn-agregar-contacto");
const btnEliminarContacto = document.querySelectorAll(".material-symbols-outlined .icono")
const listadoContactos = document.querySelector(".listado-contactos");
const contactosEnLS = JSON.parse(localStorage.getItem("contactos"));
const usuarioEnLS = localStorage.getItem ("usuario");

//OBTENGO DATOS DE MI API MEDIANTE FETCH

const inputValue = fetch(miAPI)
.then(response => response.json())
.then(data => data.nombre);

// EVENTOS

btnAgregarContacto.addEventListener("click", async ()=> {
    await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            nombre: nombre.value,
            telefono: telefono.value,
            direccion: direccion.value,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json) ,camposVacio());
    
})

// EJECUTO FUNCIONES PARA VERIFICAR EL LS.

usuarioAlmacenado()
contactoAlmacenado()
cargarContacto();




