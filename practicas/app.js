/*=============================================
SELECCIÓN POR ID Y CAMBIO DE ESTILOS
=============================================*/
var texto = document.getElementById('texto');
texto.innerHTML = 'PRUEBA CAMBIO COLOR';
texto = texto.style.color = '#FFC300';
// console.log("Cambio a color JavaScript")
/*=====  End of SELECCIÓN POR ID Y CAMBIO DE ESTILOS  ======*/


/*====================================================
1. Estas son las letras con las que se calcula la letra del DNI: 'T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'. Realiza un programa que me devuelva el número de letras que faltan del abecedario (excepto ñ) y cuáles son.
=====================================================*/
// var abecedario = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
//
// var dni = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];
//
// console.log(abecedario.join(''));
// console.log(dni.sort().join(''));
//
// console.log('El abecedario tiene ' + abecedario.length + ' letras');
// console.log('El array tiene ' + dni.length + ' letras');
// var num1 = abecedario.length;
// var num2 = dni.length;
// function restar(a, b) {
// 	console.log(a - b + ' letras menos en el array.');
// }
// restar(num1, num2);
/*==============  End of FUNCIÓN  ================*/

/*====================================================
2. Realiza un programa que pida tu nombre y tus apellidos y me los muestre al revés. Utiliza una función.
====================================================*/

// String.prototype.reverse = function() {
// 	var x = this.length;
// 	var cadena = "";
// 	while (x>=0) {
// 		cadena = cadena + this.charAt(x);
// 		x--;
// 	}
// 	return cadena;
// };
// var persona = prompt("Escribe tu nombre", "nombre");
//  persona = persona.reverse();
// document.getElementById("demo").innerHTML = persona;


/*==============  End of FUNCIÓN  ================*/

/*====================================================
3. Realiza un programa que pida un número y me devuelva todos los números hasta ese número repetidos tantas veces como indique su valor. Por ejemplo: si meto el 4, me devuelve, 1223334444.
====================================================*/
// var numero = 0;
// numero = prompt("Elige un número", "");
// numero = parseInt(numero);
// var contador = numero;
// function miFuncion() {
//     numero = numero.toString() + contador.toString();
//
//
//
//
//     console.log(numero);
// }
// miFuncion();
// console.log(contador);
/*==============  End of FUNCIÓN  ================*/


// 4. Realiza un programa que pida un texto y me devuelva ese mismo texto sin vocales.
 // var texto = prompt("Escribe algo", "");
 // function quitarVocales( texto ) {
 //     // lo que tiene que hacer la función es recibir el texto, pasarlo a un array, identificar las vocales y quitarlas, devolverlo a string y retornar
 //    texto = texto.split("a");
 //    texto = texto.join("");
 //    texto = texto.toString();
 //    texto = texto.split("e");
 //    texto = texto.join("");
 //    texto = texto.toString();
 //    texto = texto.split("i");
 //    texto = texto.join("");
 //    texto = texto.toString();
 //    texto = texto.split("o");
 //    texto = texto.join("");
 //    texto = texto.toString();
 //    texto = texto.split("u");
 //    texto = texto.join("");
 //    texto = texto.toString();
 //    console.log(texto);
 // }
 // quitarVocales(texto);

// 5. Realizar un ejercicio que cuando se pulse en el enunciado nos muestre el número de caracteres.
// function mostrarCaracteres( texto ){
//     var titulo = document.getElementById('titulo').innerHTML;
//     console.log(titulo.length);
// }

// 6. Realiza un ejercicio que nos muestre el mayor de los números (caracteres) que introducimos.
// var num1 = prompt("Introduzca el Primer número", "Número 1");
// var num2 = prompt("Introduzca el Primer número", "Número 2");
//
// if (num1 > num2) {
//     console.log("El primer número es mayor");
// }else if (num1 == num2) {
//     console.log("Los dos números son iguales");
// }else {
//     console.log("El segundo número es mayor");
// }

/*=============================================>>>>>
= 7.Realiza un ejercicio para que cuando se pulse sobre este enunciado nos muestre el
texto con los caracteres ordenados. =
===============================================>>>>>*/

// function ordenarAlf( arg ) {
//     var desordenado = $("#ordenar").value;
//     desordenado = desordenado.toString();
//     desordenado = desordenado.split("");
//     desordenado = desordenado.sort();
//     console.log(desordenado);
// }
//
// ordenarAlf(desordenado);

/*= End of Section comment block =*/
/*=============================================<<<<<*/



/*=============================================>>>>>
= 8. Realiza un ejercicio que nos pida confirmación para entrar en una página. La página tiene que tener un botón que nos permita regresar a la página anterior. =
===============================================>>>>>*/


function irPag2(){
    var respuesta = confirm("¿¿ Quieres ir a la Página 2 ??");
    if ( respuesta == true ) {
        window.location.href="pagina2.html";
    }
}

function volver(){
    var respuesta2 = confirm("¿¿ Quieres Volver al Inicio ??");
    if ( respuesta2 == true ) {
        window.location.href="index.html";
    }
}
/*= End  =*/
/*=============================================<<<<<*/

/*=============================================>>>>>
= 9.Realiza una página que permita en su mitad izquierda cambiar de color de fondo cuando se pase el ratón por encima de alguno de los 4 cuadrados de colores diferentes. En la otra mitad se cambiará de color al elegir uno de las 4 opciones de un checkbox o radiobutton. =
===============================================>>>>>*/



/*= End =*/
/*=============================================<<<<<*/

// 10.Realiza un ejercicio que te calcule la media de los números que pidas. Comprueba que son números y están entre 1 y 100.
// 11.Realiza un programa que te salude con tu nombre, dándote los buenos días, tardes o noches, según corresponda.
// 12.Realiza un programa que te genere 15 números aleatorios entre 0 y 20, te los muestre y te indique la suma correspondiente.
// 13.Realiza un ejercicio que compruebe si el carácter "@" y el punto "." están correctamente puesto en las direcciones d correo que introduzcas.
// 14.Realiza un programa que pida un texto y me devuelva ese mismo texto sin vocales.
// 15.Realiza un ejercicio que nos muestre la posición del mayor de los números o caracteres que introducimos.
// 16.Realiza un programa que pida una lista de palabras y un número y te indique qué palabras tienen mas de "n" caracteres.
// 17.Realiza un ejercicio que a partir de una lista de nombres que le pases y de una letra que también pases, devuelva todos los nombres que comiencen por esa letra.
// http://www.areaciencias.com/Problemas-logica.htm
