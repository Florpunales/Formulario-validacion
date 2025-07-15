const submitFunction = (event) => {
    event.preventDefault()
}

document.getElementById('formulario').addEventListener('submit , submitFunction')

function validarFormulario(){
    let camposTexto = document.querySelectorAll('input[type="text"]');
    let validacionCorrecta = true;

    camposTexto.forEach(campo => {
        let errorCampo = document.getElementById('error' + campo.id.slice(1))
        if(campo.ariaValueMax.length == ''){

        }
    })
}
