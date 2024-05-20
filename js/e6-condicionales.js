function imprimir(mensaje, idElemento) {
    let elemento = document.getElementById(idElemento);
    elemento.innerText = mensaje;
}
//EJEMPLO 1: COMPARAR NUMEROS IGUALES O NO IGUALES
// === (SON IGUALES) !== (NO SON IGUALES)
function numeroEsCinco() {
    let numero = parseFloat(document.getElementById("e1numero").value);
    let mensaje = "";

    if (numero === 5) {
        mensaje = "El numero introducido es igual a 5";
    }
    else {
        mensaje = "El numero introducido no es igual a 5";
    }

    imprimir(mensaje, "ej1resultado");
}
/*EJEMPLO 2: COMPARAR NUMEROS
Mayor o igual >= o Mayor estricto > 
Menor o igual <= o Menor estricto*/
function numeroMayorCinco() {
    let numero = parseFloat(document.getElementById("e2numero").value);
    let mensaje = "";

    if (numero >5) {
        mensaje = "El numero introducido es mayor a 5";
    }
    else {
        mensaje = "El numero introducido no es mayor a 5";
    }

    imprimir(mensaje, "ej2resultado");
}
/*EJEMPLO 3: COMPARAR TEXTOS
Usar touppercase si queremos que sean iguales independientemente de mayusculas y minusculas. 
No ponerlo en caso contrario.*/
function ciudadEsMalaga() {
    let ciudad = document.getElementById("e3Texto").value;
    let ciudadMalaga = "Malaga";
    let mensaje = "";

    if (ciudad.toUpperCase() !== ciudadMalaga.toUpperCase()) {
        mensaje = "La ciudad no es Malaga";
    }
    else {
        mensaje = "La ciudad es Malaga";
    }

    imprimir(mensaje, "ej3resultado");
}
/*EJEMPLO 4: MOSTRAR UN MENSAJE DE ERROR SI EL FORMULARIO ES INVALIDO
1. OBTENER EL FORMULARIO POR SU ID.
2. LLAMAR A LA FUNCION CHECKVALIDITY */
function mostrarAnimal(){
    let formulario = document.getElementById("ejemplo4Condicionales");
    let mensaje = "";
    if(formulario.checkValidity()){
        let nombreAnimal = document.getElementById("e4Animal").value;
            mensaje = "El animal introducido es " + nombreAnimal;
    }
    else {
            mensaje = "ERROR, CORRIGA LOS ERRORES DEL FORMULARIO";
    }
imprimir(mensaje,"ej4resultado");
}
//EJEMPLO 5, MULTIPLES IF ELSE
function mostrarPrecio(){
    let producto = document.getElementById("e5productos").value;
    let mensaje = "";
    if (producto === "Camiseta"){
        mensaje = "El precio de la camiseta es 10 euros";
    }
    else if(producto === "Pantalon"){
        mensaje = "El precio del pantalon es 20 euros";
    }
    else if(producto === "Chaqueta"){
        mensaje = "El precio de la chaqueta es 30 euros";
    }
    else {
        mensaje = "El producto elegido no está registrado";
    }
imprimir(mensaje,"ej5resultado");
}