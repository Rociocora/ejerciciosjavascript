//declarar la funcion.
//Funcion sin argumentos. No lleva nada entre los parentesis, significa que no recibe argumentos
//Declaramos la funcion
function decirHola () {
    let saludo = "Hola mundo";
    let parrafo = document.getElementById("funcionesEjemplo1");
    parrafo.innerText = saludo;
}
//Llamar a una funcion (la utilizamos)
decirHola();

//Función con argumentos. Recibe parámetros, se pone entre los parentesis.
function suma (num1, num2) {
   let resultado = num1 + num2;
   let divfunciones = document.getElementById("contenidoFunciones");
   let parrafoNuevo = document.createElement("p");
   parrafoNuevo.innerText = "El resultado de la suma de " + num1 + " mas " + num2 + " es de " + resultado;
   divfunciones.appendChild(parrafoNuevo);
 }
 //Llamar a la funcion suma
suma(2,3);
suma(5,1);

//Funciones con argumento ejemplo 2
//delcaramos la funcion, agregamos un parrafo
function agregarNuevoParrafo(mensaje){
    let divfunciones = document.getElementById("contenidoFunciones");
    let parrafoNuevo = document.createElement("p");
    parrafoNuevo.innerText = mensaje
    divfunciones.appendChild(parrafoNuevo);
}
//llamamos a la función con variables.
let mensaje = "Hola que tal";
agregarNuevoParrafo(mensaje);
let nombre = "Rocío";
agregarNuevoParrafo("Hola que tal " + nombre);
agregarNuevoParrafo("Adiós me voy");

//Llamar a una funcion desde un boton de html con el evento onclick
//Creamos la funcion saludar
//EJEMPLO QUE PODEIS USAR DE REFERENCIA PARA HACER LA HISTORIA DE VER RESPUESTA
function saludar() {
    let parrafo = document.getElementById("funcionesEjemplo2");
    parrafo.innerText = "Hola que tal como estas";
}

//Obtener informacion de un formulario y ejecutar una funcion con el evento onclick
//EJEMPLO QUE PODEIS USAR DE REFERENCIA PARA HACER LA HISTORIA MENSAJE DE BIENVENIDA
//Creamos la funcion imprimir que podra ser usada en las otras funciones//Ejemplo que podemos utilizar para el mensaje de bienvenida.
function imprimir(mensaje, id){
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function restar(){
    //1.Obtener los valores del formulario. Para ello ponemos el id del elemento del formulario y y ponemos .value para obtener su valor y guardarlo en una variable.
    let num1 = document.getElementById("e3numero1").value;
    let num2 = document.getElementById("e3numero2").value;
    let resta = num1 - num2;
    let mensaje = "La resta de los numeros " + num1 + " y " + num2 + " es igual a " + resta;
    imprimir(mensaje, "funcionesEjemplo3");
}

//Ejemplo Obtener elemento de un select.
function mostrarUbicacion(){
    //Obtener la opción Seleccionada.
    let ciudadSeleccionada = document.getElementById("e4ciudades").value;
    let mensaje ="Te encuentras en la ciudad " + ciudadSeleccionada;
    imprimir(mensaje, "e4Solucion")
}



