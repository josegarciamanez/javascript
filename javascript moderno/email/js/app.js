// Variables
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const btnEnviar = document.querySelector('#enviar');
const btnReset = document.querySelector('#resetBtn');
const formularioEnv = document.querySelector('#enviar-mail');

// Eventos
eventListeners();

function eventListeners() {
    document.addEventListener('DOMContentLoaded', inicioApp);
    email.addEventListener('blur', validarCampo);
    asunto.addEventListener('blur', validarCampo);
    mensaje.addEventListener('blur', validarCampo);
    // botón enviar en submit
    btnEnviar.addEventListener('click', enviarEmail);
    btnReset.addEventListener('click', resetForm);
}

// Funciones
function inicioApp() {
    // deshabilitar botón
    btnEnviar.disabled = true;
    btnReset.disabled = false;
}

function validarCampo() {
    validarLongitud(this);
    if (this.type === 'email') {
        validarEmail(this);
    }

    let errores = document.querySelectorAll('.error');
    if (email.value !== '' && asunto.value !== '' && mensaje.value !== '') {
        if (errores.length === 0) {
            btnEnviar.disabled = false;
        }
    }
}

function enviarEmail(e) {
    // Spinner
    const spinnerGif = document.querySelector('#spinner');
    spinnerGif.style.display = 'block';
    // img enviado
    const enviado = document.createElement('img');
    enviado.src = 'img/mail.gif';
    enviado.style.display = 'block';
    // ocultar spinner y mostrar enviado
    setTimeout(() => {
        spinnerGif.style.display = 'none';
        document.querySelector('#loaders').appendChild(enviado);
        setTimeout(() => {
            enviado.remove();
            formularioEnv.reset();
        }, 3000);

    }, 2000);
    e.preventDefault();
}

function validarLongitud(campo) {

    if (campo.value.length > 0) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add('error');
    }
}

function validarEmail(campo) {
    const mensaje = campo.value;
    if (mensaje.indexOf('@') !== -1) {
        campo.style.borderBottomColor = "green";
        campo.classList.remove('error');
    } else {
        campo.style.borderBottomColor = "red";
        campo.classList.add('error');
    }

}
// botón reset formulario
function resetForm() {
    formularioEnv.reset();
}
