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

let viajeros = [];

function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

function mostrarViaje() {
    let mensaje = "El viaje es a " + viaje.destino + " tiene un precio de  " + viaje.precio + " euros, con una duración de  " + viaje.diasDuracion + " días y vamos a visitar  " + viaje.ciudadesAVisitar + " Descripción: " + viaje.descripcion + " y el viajero es " + viaje.viajero;
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

function cambiarpropiedadViaje() {
    let nuevoDestino = document.getElementById("propiedadViaje").value;
    let nuevoValor = document.getElementById("nuevoValor").value;
    if(nuevoDestino === "precio" || nuevoDestino ==="diasDuracion"){
        viaje[nuevoDestino] = parseInt(nuevoValor);
    }
    else if (nuevoDestino === "ciudadesAVisitar") {
        viaje[nuevoDestino] = nuevoValor.split(",");
    }
    else {
        viaje[nuevoDestino] = nuevoValor;
    }
    mostrarViaje();

 } 

/*EJERCICIO 3
Agrega un formulario en el que el usuario pueda introducir una descripcion del viaje. 
Agrega un boton que al pulsarlo agrege la descripcion introducida al objeto viaje
y muestre la informacion del viaje actualizada. */

function agregarDescripcion() {
    let descripcionViaje = document.getElementById("descripcion").value;

    viaje["descripcion"] = descripcionViaje;
    mostrarViaje();
}

/*EJERCICIO 4
Agrega un formulario para agregar viajeros del viaje, puede agregar todos los que quiera a una lista. 
Para ello crea un formulario en el que introduzca el nombre del viajero, seleccione el tipo (adulto o niño), 
y seleccione los descuentos: estudiante, jubilado o ninguno. Cuando el usuario pulse el boton agregar, 
se mostrará la lista con toda la información de los viajeros agregados.*/

function agregarViajero() {
    let viajero = document.getElementById("e4nombreViajero").value;
    let tipoViajero = document.getElementById("e4tipoViajero").value;
    let descuento = document.getElementById("e4descuentoViajero").value;

    let nuevoViajero = {
        nombre: viajero,
        tipo: tipoViajero,
        descuento: descuento
    };

    viajeros.push(nuevoViajero);

    imprimirViajeros();
   
}

function imprimirViajeros() {
    let mensaje = "";
    for (i=0; i<viajeros.length;i++) {
        let viajero = viajeros[i];
        mensaje+= "\n Viajero numero: " + i;
        mensaje+= "\n Nombre: " + viajero.nombre;
        mensaje+= "\n Tipo: " + viajero.tipo;
        mensaje+= "\n Descuento: " + viajero.descuento;
        mensaje+= "\n Precio Viaje " + viajero.precioViaje;
    }
    imprimir(mensaje,"ejer4resultadoviajeros");
}

/*EJERCICIO 5
Agrega al formulario un boton para mostrar el precio que debe pagar cada viajero por el viaje. 
El precio del viaje para los niños es un 25% más barato. Para estudiante se aplica un descuento del 5%, 
para jubilados un descuento del 10%. El precio a pagar del viaje se debe agregar como una propiedad mas de cada viajero.*/

function mostrarPrecio() {
    let precioViaje = viaje.precio;

    for(i=0; i<viajeros.length; i++) {
        let viajero = viajeros[i];
        let precioFinal = 0;
        if(viajero.tipo === "niño"){
            precioFinal = precioViaje * 0.75; //(100-25)/100 = 0.75
        }
        else if(viajero.descuento === "estudiante") {
            precioFinal = precioViaje * 0.95; //(100-5)/100 = 0.95
        }
        else if(viajero.descuento=== "jubilado") {
            precioFinal = precioViaje * 0.90; //(100-10)/100 = 0.90
        }
        else {
            precioFinal = precioViaje;
        }
        
        viajero["precioViaje"] = precioFinal;

    }

    imprimirViajeros();

}

/*EJERCICIO 6
Agrega un boton al formulario para mostrar el precio total del viaje. 
Este precio será la suma del precio pagado por cada viajero. */


function precioTotal() {
    mostrarPrecio();
    let precioTotal = 0;
    
    for(i=0; i<viajeros.length; i++) {
        let viajero = viajeros[i];
        precioTotal += viajero.precioViaje;
    }

    let mensaje = "El precio total del viaje es " + precioTotal;

    imprimir(mensaje,"ej5preciototal");
}