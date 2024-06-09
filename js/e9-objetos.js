let mascota = {
    nombre: "Nevado",
    tipo: "Perro",
    edad: 12,
    ciudadesDondeHaVivido: ["Malaga", "Sevilla", "Madrid"]
}

//Lista de mascotas
let mascotas = [];


//imprimir
function imprimir(mensaje,id) {
    let parrafo = document.getElementById(id);
    parrafo.innerText = mensaje;
}

//Creamos un objeto mascota
function mostrarMascota() {
    let mensaje = "El nombre de la mascota es " + mascota.nombre + " es un " + mascota.tipo + " su edad es " + mascota.edad + " y ha vivido en " + mascota.ciudadesDondeHaVivido + " y su propietario es " + mascota.propietario;
    imprimir(mensaje,"e1objetos");

}


//muestro la informacion elegida del objeto mascota
function mostrarPropiedadMascota() {
    let propiedadAmostrar = document.getElementById("e2infomascota").value;
    let mensaje = propiedadAmostrar + ": " + mascota[propiedadAmostrar];
    imprimir(mensaje,"e2objetos");
}

//cambiar elementos de un objeto. Cambiar nombre
function cambiarNombreMascota() {
    let nuevoNombre = document.getElementById("e3nombremascota").value;
    mascota.nombre = nuevoNombre;
    mostrarMascota();

}
//agregar nuevas propiedades a un objeto
function agregarPropietario() {
    let nombrePropietario = document.getElementById("e4nuevoPropietario").value;
    mascota["propietario"] = nombrePropietario;
    mostrarMascota();
}

//imprimir un array de objetos
function imprimirListaMascotas () {
    let mensaje = "";
    for(i=0; i<mascotas.length; i++) {
        mensaje+= " Mascota numero: " + i;
        mensaje+= " Nombre: " + mascotas[i].nombre;
        mensaje+= " Edad: " + mascotas[i].edad;
        mensaje+= " Tipo: " + mascotas[i].tipo;
    }
    imprimir(mensaje,"e5objetos");
}


//agregar una nueva mascota a la lista
function agregarNuevaMascota() {
    let miMascota = {};
    miMascota.nombre =  document.getElementById("e5nombremascota").value;
    miMascota.edad = parseInt(document.getElementById("e5edadmascota").value);
    miMascota.tipo = document.getElementById("e5tipomascota").value;

    mascotas.push(miMascota);
    imprimirListaMascotas();

}