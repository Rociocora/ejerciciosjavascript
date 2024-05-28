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
    let mesAño = document.getElementById("e5meses").value;
    let mensaje = "";
    let estacion = "";

    switch (mesAño) {
        case "enero":
            estacion = "INVIERNO";
          break;
        case "febrero":
            estacion = "INVIERNO";
          break;
        case "marzo":
            estacion = "PRIMAVERA";
            break;
        case "abril":
            estacion = "PRIMAVERA";
            break;
        case "mayo":
            mes = "PRIMAVERA";
            break;
        case "junio":
           estacion = "VERANO";
            break;
        case "juLio":
           estacion = "VERANO";
            break;
        case "agosto":
            estacion = "VERANO";
            break;
        case "septiembre":
            estacion = "OTOÑO"
            break;
        case "ocubre":
            estacion = "OTOÑO"
            break;
        case "noviembre":
            estacion = "OTOÑO"
            break;
        case "diciembre":
            estacion = "INVIERNO"
            break;
        default:
            estacion = "El campo no puede estar vacío";
          
      }
      mensaje = estacion;

    imprimir(mensaje, "ejer5resultado");

}

/*EJERCICIO 6
Crea una calculadora.
Agrega un formulario donde el usuario pueda introducir dos numeros y seleccionar la operacion 
suma, resta, multiplicacion o division. Los campos no pueden estar vacios.
Agrega un boton que al hacer click llame a una funcion que muestre el resultado 
de la operación seleccionada.*/

function sumarNumeros(){
    let numeroA = document.getElementById("ej6numero1").value;
    let numeroB = document.getElementById("ej6numero2").value;
    let suma = numeroA + numeroB;
    let mensaje = "La suma de los dos numero es " + suma;
imprimir(mensaje, "ejer6resultado")
}
function restarNumeros(){
    let numeroA = document.getElementById("ej6numero1").value;
    let numeroB = document.getElementById("ej6numero2").value;
    let resta = numeroA - numeroB;
    let mensaje = "La resta de los dos numero es " + resta;
imprimir(mensaje, "ejer6resultado")
}
function multiplicarNumeros(){
    let numeroA = document.getElementById("ej6numero1").value;
    let numeroB = document.getElementById("ej6numero2").value;
    let multiplicacion = numeroA * numeroB;
    let mensaje = "La multiplicación de los dos numero es " + multiplicacion;
imprimir(mensaje, "ejer6resultado")
}
function dividirNumeros(){
    let numeroA = document.getElementById("ej6numero1").value;
    let numeroB = document.getElementById("ej6numero2").value;
    let division = numeroA / numeroB;
    let mensaje = "La división de los dos numero es " + division;
imprimir(mensaje, "ejer6resultado")
}
/*EJERCICIO 7
Crea un formulario que muestre el precio final segun el producto y la forma de pago elegida.
Agrega un formulario donde el usuario pueda elegir entre los siguientes productos: 
1. Camiseta 10 euros, 2. Sudadera 20 euros, 3. Bufanda 5 euros, este campo es obligatorio 
y solo puede elegir un producto. Incluye también un elemento donde pueda introducir la cantidad,
que es tambien obligatorio y debe ser mayor a 0.
Agrega un boton comprar que al hacer click muestre el precio total del producto elegido teniendo
en cuenta la cantidad. Por ejemplo si elige 2 camisetas, el precio final seria 20 euros.*/