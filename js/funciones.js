//CONSTRUCTOR DE CONTACTOS

class Contacto {
    constructor (nombre , telefono, direccion, id){
        this.nombre = nombre
        this.telefono = telefono
        this.direccion = direccion
        this.id = id
    }
}

// FUNCION PARA SOLICITAR NOMBRE DE USUARIO.
const pedirNombre = async _=> {   
    const { value: usuarioId } = await Swal.fire({
        title: 'Ingrese un usuario',
        input: 'text',
        inputLabel: 'Nombre:',
        showCancelButton: true,
        inputValue: inputValue,
        inputValidator: (value) => {
            if (!value) {
                return 'Usted no ingreso un nombre, intentelo nuevamente'
            };
        }
    });
    
    if (usuarioId) {
        Swal.fire({icon: "success"})
        nombreUsuario.innerText = usuarioId
        localStorage.setItem("usuario", usuarioId)
    }  ;
};

// FUNCIONES PARA VERIFICAR DATOS EN EL LS

const usuarioAlmacenado = () => {
    usuarioEnLS===null ? pedirNombre() : nombreUsuario.innerText = usuarioEnLS;
}

const contactoAlmacenado = () => {
    contactosEnLS ? misContactos = contactosEnLS : misContactos = [];
}

// FUNCIONES PARA CREAR, CARGAR Y ELIMINAR CONTACTOS. TOASTIFY PARA MOSTRARLO.

const crearContacto = () => {
    const contactoNuevo = new Contacto(nombre.value, telefono.value, direccion.value, Math.random(0,100))
    misContactos.push (contactoNuevo)
    let contactoToast = contactoNuevo.nombre.toUpperCase() + " se agregó a tus contactos";
    Toastify({
        text: contactoToast,
        duration: 2500  ,
    }).showToast();
}



const cargarContacto = () => {
    let contactoToast
    listadoContactos.innerHTML="";

    misContactos.forEach(contacto => {
        let divContacto = document.createElement("div");
        let iconoBorrar = document.createElement("span");
        
        iconoBorrar.classList.add("material-symbols-outlined", "icono");
        divContacto.classList.add("contacto");
        iconoBorrar.id = contacto.id;
        
        divContacto.innerHTML= `
        <p>${contacto.nombre.toUpperCase()}</p>
        <p>${contacto.telefono}</p>
        <p>${contacto.direccion}</p>
        `;

        iconoBorrar.innerText="delete_forever";
        
        divContacto.append(iconoBorrar);
        listadoContactos.append(divContacto)  ; 

        
        iconoBorrar.onclick = eliminarContacto;

    })
    localStorage.setItem("contactos", JSON.stringify(misContactos))
    
};

const eliminarContacto = (e) => {
    const btnId = e.currentTarget.id;
    const contactoEliminar = misContactos.findIndex (contacto => contacto.id == btnId);
    Toastify({
        text: "Contacto eliminado ✔",
        duration: 2500 ,
        style: {background: "linear-gradient(135deg,#63D471,#233329)"},
    }).showToast();
    misContactos.splice(contactoEliminar, 1);
    cargarContacto ();
};

const camposVacio = () => {
    const soloNumero = Number(telefono.value);
    
    (nombre.value==="" || isNaN(soloNumero)||(soloNumero === 0)) 
    ?
    Swal.fire({
        title: 'Ingrese un contacto',
        showCancelButton: false,
    })
    :
    crearContacto();
    cargarContacto();
}


    
