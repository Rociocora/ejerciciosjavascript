//1- DECLARAR UNA VARIABLE.
//Nombre recomendado que empiece por minuscula ej: nombre, si esta compuesto de dos palabras 
//la primera minuscula y la siguiente mayuscula ej: miNombre, para separlo solo vale el guión bajo
//más recomendable la opcion de minusucla o la primera minuscula y la siguiente mayusucula
//no pueden empezar por un numero por ej: 2nombre.
//Los nombres de las variables pueden tener número, ej: nombre2.

let miNombre;

//2- INICIAR UNA VARIABLE
//Primero declarar una variable y luego iniciarla
document.write("Ejemplo 1: INICIAR UNA VARIABLE CIUDAD </br>");
let ciudad;
ciudad = "Malaga";
document.write("La variable ciudad tiene el valor: " + ciudad);

//Podemos declarar una variable e iniciarla a la vez.
document.write("</br> EJEMPLO 2: INICIAR UNA VARIABLE EDAD </br>");
let edad = 33;
//cambiar el valor de la variable edad
edad = 45;
document.write("La variable edad tiene el valor: " + edad);
//3- TIPOS DE VARIABLES
//NUMEROS
document.write("</br> EJEMPLO 3: CREAR UNA VARRIABLE DE TIPO NUMERO </br>");
let numero = 5;
let numeroDecimales = 5.5;
document.write("El numero sin decimales es: " + numero);
document.write("</br>El numero sin decimales es: " + numeroDecimales);
//CADENAS (se pueden usar comillas dobles """ o comillas simples '' pero sin mezclarlas) Cuidad con caracteres especiales como comas dentro del texto.
document.write("</br> EJEMPLO 4: CREAR UNA VARRIABLE DE TIPO TEXTO </br>");
let saludo = "Hola que tal";
document.write("La variable de tipo saludo: " + saludo);
let despedida ='Adiós, me voy';
document.write("</br>" + despedida);
//BOOLEANOS, true o false. En minusucla y sin comillas.
document.write("</br> EJEMPLO 5: CREAR UNA VARRIABLE DE TIPO BOOLENO </br>");
let estaSoleado = true;
document.write("La variable Esta Soleado es: " + estaSoleado);
document.write("</br>");
let esDeDia = false;
document.write("La variable es de día es: " + esDeDia);

