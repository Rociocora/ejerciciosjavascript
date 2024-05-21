/*EJERCICIO 1
Crea un formulario para que el usuario introduzca su edad y vea un mensaje indicando si es mayor
de edad o no.
Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es mayor de edad, 
si su edad es igual o mayor a 18 años y un mensaje es menor de edad de lo contrario.*/

function mayorEdad(){
    let edad = document.getElementById("ej1numero").value;
    let mensaje = "";

    if (edad >= 18){
        mensaje = "Es mayor de edad";
    }
    else if(edad === ""){
        mensaje = "El campo no puede estar vacío";
    }
    else{
        mensaje = "No es mayor de edad";
    }
imprimir(mensaje,"ejer1resultado");
}

/*EJERCICIO2
Crea un formulario que indique cual es el mayor de dos numeros.
Agrega dos elementos al formulario que reciban dos numeros enteros. 
Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que indique cual de los dos 
numeros es el mayor.*/

function compararNumeros(){
    let numero1 = document.getElementById("ej2numero1").value;
    let numero2 = document.getElementById("ej2numero2").value;
    let mensaje ="";

    if (numero1>numero2){
        mensaje = "El numero mayor es " + numero1;
    }
    else{
        mensaje ="El numero mayor es " + numero2;
    }
imprimir(mensaje,"ejer2resultado");
}

/*EJERCICIO 3
Crea un formulario para que el usuario introduzca su nota y vea si esta aprobado o suspenso.
Agrega un elemento al formulario para introducir un numero. Este campo no puede estar vacio 
y debe ser entre 0 y 10.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje de si está
aprobado o no.*/

function notaExamen(){
    let nota = parseFloat(document.getElementById("ej3nota").value);
    let mensaje ="";

    if (nota >= 5){
        mensaje = "Aprobado";
    }
    else{
        mensaje = "Suspenso";
    }
imprimir(mensaje,"ejer3resultado");
}

/*EJERCICIO 4
Crea un formulario para que el usuario introduzca su nombre y le diga si es un nombre largo o 
corto.
Agrega un elemento al formulario para introducir un nombre. Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje es un nombre largo,
si tiene mas de 10 caracteres o es un nombre corto si tiene menos de 10.*/

function longitudNombre(){
    let nombre = document.getElementById("ej4nombre").value;
    let longitudNombre = nombre.length;
    mensaje = "";

    if (longitudNombre > 10){
        mensaje = "El nombre es largo";
    }
    else if(longitudNombre === 0){
        mensaje = "El campo es obligatorio";
    }
    else {
        mensaje = "El nombre es corto"
    }
imprimir(mensaje,"ejer4resultado");
}

/*EJERCICIO 5
Crea un formulario para ver la estacion del año segun el mes introducido.
Agrega un elemento select al formulario para seleccionar un mes. 
Este campo no puede estar vacio.
Agrega un boton que al hacer click llame a una funcion que muestre un mensaje con la estación 
del año*/

function mesEstacion(){
    let mes = document.getElementById("e5meses").value;
    let mensaje = "";

    if(mes === "diciembre"){
        mensaje = "Invierno";
    }
    else if(mes === "enero"){
        mensaje = "Invierno";
    }
    else if(mes === "febrero"){
        mensaje = "Invierno";
    }

    else if(mes === "marzo"){
        mensaje = "Primavera";
    }
    else if(mes === "abril"){
        mensaje = "Primavera";
    }
    else if(mes === "mayo"){
        mensaje = "Primavera";
    }
    else if(mes === "junio"){
        mensaje = "Verano";
    }
    else if(mes === "julio"){
        mensaje = "Verano";
    }
    else if(mes === "agosto"){
        mensaje = "Verano";
    }
    else if(mes === "septiembre"){
        mensaje = "Otoño";
    }
    else if(mes === "octubre"){
        mensaje = "Otoño";
    }
    else if(mes === "noviembre"){
        mensaje = "Otoño";
    }
    else {
        mensaje = "El campo no puede estar vacío";
    }
imprimir(mensaje,"ejer5resultado" );
}