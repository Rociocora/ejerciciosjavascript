/*EJERCICIO 1
Crea un nuevo objeto, llamado viaje, que contenga las siguientes propiedades: destino, precio, 
duracion en dias y lista de ciudades a visitar. 
Agrega un boton a tu pagina, llamado mostrar info de viaje, que muestre toda la informacion del viaje.
 */

let viaje = {
    destino: "Bali",
    precio: 1000,
    diasDuracion: 16,
    ciudadesAVisitar: [" Lombok", " Nusa Penida", " Gili", " Ubud"]
}

let viajes = [];

function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function mostrarViaje() {
    let mensaje = "El viaje es a " + viaje.destino + " tiene un precio de  " + viaje.precio + " euros, con una duración de  " + viaje.diasDuracion + " días y vamos a visitar  " + viaje.ciudadesAVisitar + " y el viajero es " + viaje.viajero;
    imprimir(mensaje,"ej1objetos");

}

/*EJERCICIO 2
Agrega a un formulario para modificar el viaje anterior. 
Para ello agrega un select donde el usuario pueda elegir la propiedad a modificar (destino, precio, duracion, 
lista de ciudades) y un campo donde pueda introducir el nuevo valor. 
Agrega un boton modificar viaje, que actualice el objeto anterior con la nueva informacion y lo muestre por pantalla*/

function mostrarPropiedadViaje() {
    let propiedadDelViaje = document.getElementById("ej2infoviaje").value;
    let mensaje = propiedadDelViaje + ": " + viaje[propiedadDelViaje];
    imprimir(mensaje,"ej2objetos");
}

function cambiarPropiedadViaje() {
    let nuevoDestino = document.getElementById("ej3destinoViaje").value;
    viaje.destino = nuevoDestino;
    mostrarViaje();
    let nuevoPrecio = document.getElementById("ej3precioViaje").value;
    viaje.precio = nuevoPrecio;
    mostrarViaje();
    let nuevaDuracion = document.getElementById("ej3duracionViaje").value;
    viaje.diasDuracion = nuevaDuracion;
    mostrarViaje();
    let nuevaCiudadVisitar = document.getElementById("ej3ciudadesVisitar").value;
    viaje.ciudadesAVisitar = nuevaCiudadVisitar;
    mostrarViaje();
}

/*EJERCICIO 3
Agrega un formulario en el que el usuario pueda introducir una descripcion del viaje. 
Agrega un boton que al pulsarlo agrege la descripcion introducida al objeto viaje
y muestre la informacion del viaje actualizada. */

function agregarViajero() {
    let nombreViajero = document.getElementById("ej4Viajero").value;
    viaje["viajero"] = nombreViajero;
    mostrarViaje();
}

/*EJERCICIO 4
Agrega un formulario para agregar viajeros del viaje, puede agregar todos los que quiera a una lista. 
Para ello crea un formulario en el que introduzca el nombre del viajero, seleccione el tipo (adulto o niño), 
y seleccione los descuentos: estudiante, jubilado o ninguno. Cuando el usuario pulse el boton agregar, 
se mostrará la lista con toda la información de los viajeros agregados.*/

function imprimirListaViajeros () {
    let mensaje = "";
    for(i=0; i<viajes.length; i++) {
        mensaje+= " Mascota numero: " + i;
        mensaje+= " Nombre: " +viajes[i].nombre;
        mensaje+= " Edad: " + viajes[i].edad;
        mensaje+= " Descuento: " + viajes[i].descuento;
    }
    imprimir(mensaje,"ej4agregarViajeroNuevo");
}
function agregarNuevaMascota() {
    let viajeroNuevo = {};
    viajeroNuevo.nombre =  document.getElementById("e4nombreViajero").value;
    viajeroNuevo.edad =document.getElementById("adultoOniño").value;
   viajeroNuevo.descuento = document.getElementById("ej4descuento").value;

    viajes.push(viajeroNuevo);
    imprimirListaViajeros();

}