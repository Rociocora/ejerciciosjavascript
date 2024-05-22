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
//EJEMPLO 6, IF ANIDADOS
function mostrarPrecioDelViaje(){
    let viaje = document.getElementById("e6destinos").value;
    let numeroDias = parseInt(document.getElementById("e6numeroDeDias").value);
    let precioViaje;
    let precioTotal;
    let mensaje = "";
    let descuento = 0;
    if(viaje === "paris"){
        precioViaje= 10;
        if(numeroDias>10){
           descuento = 100;
        }
        else{
            descuento = 0;
        }
    }
    else if(viaje === "nuevaYork"){
        precioViaje= 20;
    }
    else if(viaje === "roma"){
        precioViaje= 30;
    }
    else if(viaje === "canarias"){
        precioViaje= 40;
    }
    else {
        precioViaje= 0;
    }
    precioTotal= (precioViaje * numeroDias) - descuento;
    mensaje = "El precio del viaje a " + viaje + " es de " + precioTotal + " tiene un descuento de " + descuento;
    imprimir(mensaje,"ej6resultado" )
}

//EJEMPLO 7: Condicionales Operador Logico AND: &&
//AND Significa que debe cumplirse TODAS LAS CONDICIONES

function entradaMuseo(){
    let ciudad = document.getElementById("e7ciudad").value;
    let edad = parseInt(document.getElementById("e7edad").value);
    let mensaje ="";

    if(ciudad === "malaga" && edad< 16){
        mensaje = "Puede entrar gratis al museo porque es menor de 16 años y es de Málaga"
    }
    else{
        mensaje = "No puede entrar gratis al museo";
    }
imprimir(mensaje,"ej7resultado");
}

//EJEMPLO 8: Condicionales Operador Logico OR: ||
//OR significaque debe cumplirse UNA de las condiciones.

function entradaMuseoOR(){
    let ciudad = document.getElementById("e8ciudad").value;
    let edad = parseInt(document.getElementById("e8edad").value);
    let mensaje ="";

    if(ciudad === "malaga" || edad< 16){
        mensaje = "Puede entrar gratis al museo porque es de Málaga o tiene menos de 16 años"
    }
    else{
        mensaje = "No puede entrar gratis al museo";
    }
imprimir(mensaje,"ej8resultado");
}

//EJEMPLO 9. Condicionales Operador logico NOT !
/*NOT significa que no debe cumplirse la condicion o condiciones que estan entre parentesis. 
Las condiciones entre parentesis pueden ser varias, y pueden ser AND y OR*/
function entradaMuseoNOT(){
    let ciudad = document.getElementById("e9ciudad").value;
    let edad = parseInt(document.getElementById("e9edad").value);
    let mensaje ="";

    if(!(ciudad === "malaga" && edad< 16)){
        mensaje = "Puede entrar gratis al museo"
    }
    else{
        mensaje = "No puede entrar gratis al museo";
    }
imprimir(mensaje,"ej9resultado");
}

//EJEMPLO 10. Condicionales Switch
//Condicional SWICH hace lo mismo que IF ELSE, pero se recomienda usar cuando hay varias opciones, generalmente mas de 3 con una sola condicion.
//EJEMPLO CON IF ELSE, FUNCIONARIA PERO ES MENOS RECOMENDABLE, TARDA MAS TIEMPO EN EJECUTARSE (NO SE NOTA LA DIFERENCIA PORQUE SON MILISEGUNDOS)
function mostrarHoroscopo() {
    let mesNacimiento = parseInt(document.getElementById("e10mesNacimiento").value);

    let mensaje = "";

    if(mesNacimiento === 1){
        mensaje = "El horoscopo es CAPRICORNIO";
    }
    else if (mesNacimiento === 2) {
        mensaje = "El horoscopo es ACUARIO";
    }
    else if(mesNacimiento === 3){
        mensaje = "El horoscopo es ARIES";
    }
    else if(mesNacimiento === 4){
        mensaje = "El horoscopo es GEMINIS";
    }
    else if(mesNacimiento === 5){
        mensaje = "El horoscopo es SAGITARIO";
    }
    else if(mesNacimiento ===6){
        mensaje = "El horoscopo es TAURO";
    }
    else{
        mensaje = "El horoscopo es CUALQUIERA";
    }

    imprimir(mensaje, "ej10resultado");

}
//EJEMPLO CON SWICH, FUNCIONARIA IGUAL QUE EL ANTERIOR, Pero es mas recomendable porque es mas 
//optimo (tarda menos en ejecutarse) y queda mas claro y mantenible el codigo.
function mostrarHoroscopoSwitch() {
    let mesNacimiento = parseInt(document.getElementById("e10mesNacimiento").value);

    let mensaje = "";
    let horoscopo = "";

    switch (mesNacimiento) {
        case 1:
            horoscopo = "CAPRICORNIO";
          break;
        case 2:
            horoscopo = "ACUARIO";
          break;
        case 3:
            horoscopo = "ARIES";
            break;
        case 4:
            horoscopo = "GEMINIS";
            break;
        case 5:
            horoscopo = "SAGITARIO";
            break;
        case 6:
            horoscopo = "TAURO";
            break;

        default:
            horoscopo = "CUALQUIERA";
          
      }
      mensaje = "El horoscopo es " + horoscopo;

    imprimir(mensaje, "ej10resultado");

}