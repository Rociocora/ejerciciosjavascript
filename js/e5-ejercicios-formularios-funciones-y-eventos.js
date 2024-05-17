/*EJERCICIO 1
Crea un formulario para introducir nombre, ciudad y fecha de nacimiento. 
Agrega validación con Boostrap. Todos los campos son obligatorios. El nombre y la ciudad debe tener entre 3 y 30 caracteres. La fecha de nacimiento tiene que estar entre 1900 y 2024. 
Agrega un boton que al hacer click llame a una función que muestre un mensaje de bienvenida con los datos introducidos*/
function mostrarBienvenida(){
    let nombreBienvenida = document.getElementById("ejemplotexto1").value;
    let ciudadBienvenida = document.getElementById("ejempltexto2").value;
    let fechaNacimiento = document.getElementById("ejemplo1fecha").value;

    let mensaje ="Mi nombre es " + nombreBienvenida + " vengo desde " + ciudadBienvenida + " y mi cumpleaños es " + fechaNacimiento;
    imprimir(mensaje, "ejercicio1Solucion")
}

/*EJERCICIO 2
Crea un formulario para introducir dos numeros. 
Agrega validación con Boostrap. Todos los campos son obligatorios. Solo admite numeros de cualquier tipo.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con el resultado de la suma, 
la resta, la multiplicación y la división de esos dos números. */
function calcular(){
    //1.Obtener los valores del formulario. Para ello ponemos el id del elemento del formulario y y ponemos .value para obtener su valor y guardarlo en una variable.
    let num1 = document.getElementById("ejercicio2numero1").value;
    let num2 = document.getElementById("ejercicio2numero2").value;
    let resta = num1 - num2;
    let suma = num1 + num2;
    let multiplicacion = num1 * num2;
    let division = num1 / num2;
    let mensaje = "Los numeros " + num1 + " y " + num2 + "\nSuma: " + suma + "\nResta: " + resta + "\nMultiplicación: " + multiplicacion + "\nDivisión: " + division;
imprimir(mensaje, "ejercicio2")
}

/*EJERCICIO 3
Crea un formulario para convertir monedas. El usuario debe introducir una catidad en euros. 
Agrega validación con boostrap, el campo es obligatorio, debe ser un número positivo. 
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la cantidad en dólares y en libras. */
function conversor(){
    let euros = parseFloat(document.getElementById("euros").value);
    let dolares = 1.09;
    let libras = 0.86;
    let eurosDolares = euros * dolares;
    let eurosLibras = euros * libras;
    let mensaje = "La cantidad de " + euros + " euros son " + eurosDolares + " dolares y " + eurosLibras + " libras.";
imprimir(mensaje, "ejercicio3")
}

/*EJERCICIO 4
Crea un formulario para calcular precio total de un producto. 
El usuario debe introducir el nombre del producto, el precio y la cantidad. 
Agrega validación Boostrap. Todos los campos son obligatorios. 
El nombre debe tener entre 3 y 20 caracteres. El precio no puede ser negativo. 
La cantidad no puede ser negativa. 
Agrega un boton que al hacer click llame a una función que muestre un mensaje con el nombre del producto, 
su cantidad, su precio y el precio total.*/
function calcularPrecio(){
    let precioEuros = parseFloat(document.getElementById("precio").value);
    let cantidad = document.getElementById("cantidad").value;
    let precioTotal = precioEuros * cantidad;
    let mensaje = "El precio total es de " + precioTotal;
imprimir(mensaje, "ejercicio4" );
}

/*EJERCICIO 5
Crea un formulario para elegir la talla y el color de una camiseta. 
El usuario debe elegir de un select el color entre 5 colores posibles, y la talla de la XS a la XXL. 
Agrega validación Boostrap. Todos los campos son obligatorios. 
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la talla y 
el color de la camiseta elegidos.*/
function eleccionCamiseta(){
    let talla = document.getElementById("tallas").value;
    let colores = document.getElementById("colores").value;
    let mensaje = "La talla de camista es " + talla + " y el color elegido es " + colores;
imprimir(mensaje, "ejercicio5" );
}

/*EJERCICIO 6
Crea un formulario para introducir la edad del usuario.
La edad debe ser un numero positivo y es obligatorio. Agrega validación Boostrap.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con la edad en dias, 
la edad en minutos y la edad en segundos. */
function calcularEdad(){
    let años = document.getElementById("años").value;
    let diasUnAño = 365;
    let edadEnDías= años * diasUnAño;
    let minutosUnAño = 525600;
    let edadEnMinutos = años * minutosUnAño;
    let segundosUnAño = 31536000;
    let edadEnSegundos = años * segundosUnAño;
    let mensaje = "Mi edad en días es: " + edadEnDías + "\nEn minutos es: " + edadEnMinutos + " \nEn segundos: " + edadEnSegundos;
imprimir(mensaje,"ejercicio6");
}

/*EJERCICIO 7
Crea un formulario para mostrar información sobre un texto.
Crea un elemento textArea que reciba un texto de longitud entre 10 y 100 caracteres. 
Debe ser obligatorio. Agrega validación Boostrap.
Agrega un boton que al hacer click llame a una función que muestre un mensaje con el texto completo en mayusculas, 
la primera letra del texto, la última letra y su longitud.*/
function introduceTexto(){
    let introducirTexto = document.getElementById("ejercicio7Texto").value;
    let totalCaracteresTexto = introducirTexto.length;
    let primeraLetraTexto = introducirTexto[0];
    let ultimaLetraTexto = introducirTexto[introducirTexto.length - 1]
    let cadenaMayusculaTexto = introducirTexto.toUpperCase();
    let mensaje = "Su longitud total es: " + totalCaracteresTexto + "\nLa primera letra es: " + primeraLetraTexto + "\nLa ultima letra es: " + ultimaLetraTexto + "\nEl texto en mayúscula: " + cadenaMayusculaTexto;
imprimir(mensaje,"ejercicio7");
}