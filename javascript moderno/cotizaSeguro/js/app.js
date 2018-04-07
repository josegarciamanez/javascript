/* =============================================>>>>>
= Constructor para Seguros =
===============================================>>>>> */
function Seguro(marca, anio, tipo) {
    this.marca = marca;
    this.anio = anio;
    this.tipo = tipo;
}
/* =============================================>>>>>
= Función para manejar la interfaz =
===============================================>>>>> */
function Interfaz() {}

/* =============================================>>>>>
= Event Listeners =
===============================================>>>>> */
const formulario = document.querySelector('#cotizar-seguro');
formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    // leer marca seleccionada
    const marca = document.querySelector('#marca');
    const marcaSeleccionada = marca.options[marca.selectedIndex].value;
    // leer año seleccionado
    const anio = document.querySelector('#anio');
    const anioSeleccionado = anio.options[anio.selectedIndex].value;
    // leer el valor del radio button
    const tipo = document.querySelector('input[name="tipo"]:checked').value;
    // Crear instancia de Interfaz
    const interfaz = new Interfaz();
    // Comprobar que los campos no estén vacios
    if (marcaSeleccionada === '' || anioSeleccionado === '' || tipo === '') {
        // interfaz imprimiendo un error
        console.log('Faltan Datos');
    } else {
        // instanciar seguro y mostrar interfaz
        console.log('Todo Correcto!!');
    }

});

/* =============================================>>>>>
= Agregar opciones de años al select =
===============================================>>>>> */
const max = new Date().getFullYear();
let min = max - 20;
const selectAnio = document.querySelector('#anio');
for (let i = max; i >= min; i--) {
    const option = document.createElement('option');
    option.value = i;
    option.innerHTML = i;
    selectAnio.appendChild(option);
}
