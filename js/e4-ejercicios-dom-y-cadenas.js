//Crea una variable con la frase Hola que tal, bienvenida a QA.
let mensajeDeBienvenida ="Hola que tal, bienvenida a QA"
let bienvenida = document.createElement("h1");
bienvenida.innerText = mensajeDeBienvenida;
divContenido.appendChild(bienvenida);

//Su longitud
let totalLetrasBienvenida = mensajeDeBienvenida.length;
let ejemplo13 = document.getElementById("ejemplo13");
ejemplo13.innerText = "La cadena " + mensajeDeBienvenida + " tiene un total de " + totalLetrasBienvenida + " caracteres";

//La posición de la palabra QA
let posicionQA = mensajeDeBienvenida.indexOf("QA");
let ejemplo14 = document.getElementById("ejemplo14");
ejemplo14.innerText = "La posición de la palabra QA es " + posicionQA;

//La primera y última letra de la frase 
let primeraLetraBienvenida = mensajeDeBienvenida[0];
let ultimaLetraBienvenida = mensajeDeBienvenida[mensajeDeBienvenida.length - 1]; 
let ejemplo15 = document.getElementById("ejemplo15");
ejemplo15.innerText = "La primera letra de la palabra " + mensajeDeBienvenida + " es " + primeraLetraBienvenida + " y la ultima letra es " + ultimaLetraBienvenida;

//Muestra la frase completa en mayúscula y en minúscula
let cadenaMayusculaBienvenida = mensajeDeBienvenida.toUpperCase();
let cadenaMinusculaBienvenida = mensajeDeBienvenida.toLowerCase();
let ejemplo16 = document.getElementById("ejemplo16");
ejemplo16.innerText = "La cadena " + mensajeDeBienvenida + " en mayuscula " + cadenaMayusculaBienvenida + " y en minuscula " + cadenaMinusculaBienvenida;

//Crea una variable con tu nombre, y modifica la frase para que diga Hola seguido de tu nombre

let nombreEstudianteCambiar = "Rocío";
let nuevoMensajeBienvenidaNombre = mensajeDeBienvenida.replace("que tal", nombreEstudianteCambiar);
let ejemplo17 = document.getElementById("ejemplo17");
ejemplo17.innerText = "Antes de reemplazar " + mensajeDeBienvenida + " despues de reemplazar " + nuevoMensajeBienvenidaNombre;

//Quitar la palabra que tal

let palabraVacia = "";
let nuevoMensajeBienvenidaQuitarQueTal = mensajeDeBienvenida.replace("que tal", palabraVacia);
let ejemplo18 = document.getElementById("ejemplo18");
ejemplo18.innerText = "Antes de reemplazar " + mensajeDeBienvenida + " despues de quital que tal " + nuevoMensajeBienvenidaQuitarQueTal;

/*Crea una variable con una frase en la que te presentes y muestrala junto con:

Su longitud

La posición de tu nombre

La primera letra de la frase.

La última letra de la frase.

Muestra la frase completa en mayúscula

Muestra la frase completa en minúscula

Muestra la frase cambiando tu nombre por otro que elijas.

Crea una nueva palabra, con la misma frase quitando tu nombre.
*/

let fraseConMiNombre = "Hola, mi nombre es Rocío y tengo 31 años"
let longitudFraseConMiNombre = fraseConMiNombre.length;
let longitudNombre = document.getElementById("longitudNombre");
longitudNombre.innerText = "La cadena " + fraseConMiNombre + " tiene un total de " + longitudFraseConMiNombre + " caracteres";

let posicionMiNombre = fraseConMiNombre.indexOf("Rocío");
let posicionDeMiNombre = document.getElementById("posicionDeMiNombre");
posicionDeMiNombre.innerText = "La posición de mi Nombre es " + posicionMiNombre;

let primeraLetraFrase = fraseConMiNombre[0];
let ultimaLetraFrase = fraseConMiNombre[fraseConMiNombre.length - 1]; 
let primeraYultimaLetra = document.getElementById("primeraYultimaLetra");
primeraYultimaLetra.innerText = "La primera letra de la frase " + fraseConMiNombre + " es " + primeraLetraFrase + " y la ultima letra es " + ultimaLetraFrase;

let fraseEnMayuscula = fraseConMiNombre.toUpperCase();
let fraseEnMinuscula = fraseConMiNombre.toLowerCase();
let fraseMayusculaMinuscula = document.getElementById("fraseMayusculaMinuscula");
fraseMayusculaMinuscula.innerText = "La frase " + fraseConMiNombre + " en mayuscula " + fraseEnMayuscula + " y en minúscula " + fraseEnMinuscula;

let cambiarNombreMario = "Mario";
let nuevaNombreFrase = fraseConMiNombre.replace("Rocío", cambiarNombreMario);
let cambiarRocioPorMario = document.getElementById("cambiarRocioPorMario");
cambiarRocioPorMario.innerText = "Antes de reemplazar " + fraseConMiNombre + " despues de reemplazar " +nuevaNombreFrase;

let quitarMiNombre = "";
let nuevaFraseSinNombre = fraseConMiNombre.replace("Rocío", quitarMiNombre);
let fraseSinMiNombre = document.getElementById("fraseSinMiNombre");
fraseSinMiNombre.innerText = "Antes de reemplazar " + fraseConMiNombre + " despues de reemplazar " + nuevaFraseSinNombre;

let fraseConEspacios = "Rocío Córdoba Ramos";
let nuevaFrase = fraseConEspacios.replace(/\s/g, "");
let fraseSinEspacios = document.getElementById("fraseSinEspacios");
fraseSinEspacios.innerText = "Con espacios " + fraseConEspacios + " sin espacios " + nuevaFrase;