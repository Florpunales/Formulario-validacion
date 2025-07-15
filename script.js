const submitFunction = (event) => {
    event.preventDefault()
}

document.getElementById('formulario').addEventListener('submit , submitFunction')

function validarFormulario(){
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.charAt(0).toUpperCase() + campo.id.slice(1))
        if(campo.Value.length == ''){
            mostrarError(errorCampo, 'Este campo es requerido!' )
            validacionCorrecta = false
        }else if(campo.value.length > 0 && campo.value.length < 3){
            ocultarError()
        }
    })
}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}

const ocultarError = (elemento, mensaje) => {
    elemento.textContent = '';
    elemento.style.display = "none";

}
