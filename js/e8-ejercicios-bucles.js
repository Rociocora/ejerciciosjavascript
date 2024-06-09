/*EJERCICIO 1. 
Muestra la suma de todos los numeros desde el 0 hasta el introducido por el usuario:
1. Agrega un campo para introducir un numero mayor que 0.
2. Agrega un boton que al pulsarlo muestre la suma de todos los numeros desde el 1 hasta el numero indicado. */
function mostrarSuma(){
    let numero = parseInt(document.getElementById("e1sumanumeros").value);
    let mensaje = "";   
    let suma = 0;
    for (let i=0; i<= numero; i++){
        suma = suma + i;
    }
    mensaje += "la suma de los números es " + suma;
    imprimir(mensaje, "ex1solucion");
}

/*EJERCICIO 2. 
Muestra una palabra el numero de veces que indique el usuario:
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre la palabra en mayusculas el numero de veces indicado por el usuario.*/

function mostrarPalabra(){

    let palabra = document.getElementById("ex2repeticion").value;
    let numero2 = parseInt(document.getElementById("ex2numerorepeticion").value);
    let mensaje2 ="";

    for(let i = 1; i<=numero2; i++){
        mensaje2 += i + " " + palabra.toUpperCase() + " ";
    }
    imprimir(mensaje2, "e2resultado");
}

/*EJERCICIO 3. 
Muestra AMAPOLA o MARGARITA el numero de veces que indique el usuario, segun la palabra introducida:
1. Agrega un campo para introducir una palabra. Este campo no puede estar vacio. A continuacion agrega un campo para introducir el numero de veces que debe de aparecer la palabra. Debe ser mayor a 0.
2. Agrega un boton que al pulsarlo muestre el numero de veces indicado, la palabra AMAPOLA, si la palabra introducida por el usuario empieza por VOCAL, que muestre la palabra MARGARITA en cualquier otro caso.*/

function eleccionPalabra() {
    let palabra = document.getElementById("ex3palabra").value;
    palabra = palabra.toLowerCase();
    let numero = parseInt(document.getElementById("ex3numerorepeticion").value);
    let mensaje = "";
    for(let i = 1; i <= numero; i++){
        if (palabra[0]==='a' || palabra[0]==='e'  || palabra[0]==='i'  || palabra[0]==='o'  || palabra[0]==='u'){
            mensaje += i + "Amapola" + " ";
        }
        else{
            mensaje += i + "Margarita" + " ";
        }
    }
    imprimir(mensaje, "e3resultado");
}

/**
 * 4. Muestra todos los numeros pares desde el 0 hasta el indicado por el usuario.
1. Agrega un campo para introducir un numero. Este campo no puede estar vacio.
2. Agrega un boton que al pulsarlo muestre todos los numeros pares, desde el 0 hasta el indicado. Nota: Un numero es par si el resto de la division entre 2 es 0. Para saber el resto de una division, puedes usar el operador %.

 */

function mostrarPares() {
    let num = parseInt(document.getElementById('numeroPar').value);
    let resultado = '';

    for (let i = 0; i <= num; i++) {
        if (i % 2 === 0) {
            resultado += i + ' ';
        }
    }
    document.getElementById('e4buclesresultado').innerText = resultado;
}

/**
 * 5. Muestra todos los nombres de una lista en mayusculas.
1. Agrega un nuevo campo para agregar nombres a una lista. Debe ser obligatorio y tener minimo 3 caracteres.
2. Agrega un boton que al pulsarlo agrege el nombre introducido en el formulario a una lista y la muestre por pantalla.
3. Agrega un boton que al pulsarlo muestre la lista completa en mayusculas.
4. Agrega un nuevo boton que al pulsarlo muestre los nombres de la lista que empiecen por la letra A.
 * 
 * 
 */

let lista = [];
let mensaje = "";
let mensajeFinal ="";


function nuevoNombre(){
    let nombre = document.getElementById("ex4nombre").value;
    lista.push(nombre);
    imprimir(lista, "ex5nuevonombre");
}

function listaMayusculas(){
    for(let i = 0; i< lista.length; i++){
        let nombre = lista[i];
        mensaje += nombre.toUpperCase() + ", ";
    }
    
    imprimir(mensaje, "ex5listamayusculas");
}

function nombresConA(){
    for(let i = 0; i< lista.length; i++){
        let nombre = lista[i];
        if (nombre[0].toUpperCase() === "A"){
            mensajeFinal += nombre + " ";        
        }    
    }
    imprimir(mensajeFinal, "ex5resultado");
}

/**
 * 6.Crea un programa para sumar todos los numeros de una lista.
1. Agrega un nuevo campo para agregar notas a una lista. Este campo debe ser numerico, y acepta numeros del 1 al 10 con decimales.
2. Agrega un boton agregar, que al pulsarlo agrege la nota introducida a la lista y la muestre.
3. Agrega un boton que al pulsarlo muestre la suma total de todos los numeros de la lista, o 0 si esta la lista vacia. 
4. Agrega un boton que muestre la nota media de la lista.
5. Agrega un boton para indicar si el usuario ha aprobado o no. El usuario esta aprobado si su nota media es igual o mayor a 5.
 */

let listaNotas = new Array;

function agregarNota(){
    let nota = parseFloat(document.getElementById("ex6agregar").value);
    listaNotas.push(nota);
    imprimir(listaNotas, "ex6resultadoagreganota");
}



function sumaTotal(){
    let suma = 0;
    let mensaje3;
    for(let i = 0; i<listaNotas.length; i++){
        let notas = listaNotas[i];
        suma = notas + suma;
    }
    if (suma !== 0){
        mensaje3 = " La suma total es " + suma;
    }
    else{
        mensaje3= " No hay nota introducidas el resultado es " + suma;
    }
    imprimir(mensaje3, "ex6sumatotal");

    return suma;
}


function notaMedia(){
    let suma = sumaTotal();
    let notaMedia = 0;
    if (listaNotas.length>0) {
        notaMedia = suma / listaNotas.length;
    }
    
    let mensaje4 = "La nota media es " + notaMedia;
    imprimir(mensaje4, "ex6notamedia");
    return notaMedia;
}

function mostrarNota(){
    let mensaje5;
    let nota = notaMedia();
    if (nota < 5){
        mensaje5 = " Tu nota final es " + nota + " lo que corresponde a suspenso";
    }
    else{
        mensaje5 = " Tu nota final es " + nota + " lo que corresponde a un aprobado";
    }
    imprimir(mensaje5, "ex6mostrarnota");
}