/*EJERCICIO 1
Agrega un boton mostrar alumnos, que al pulsarlo muestre una lista con los nombres de 10 alumnos. */

let listaAlumnos = ["Alejandro","Thiago","Amalia", "Rocío", "Mario","Manuel","Patricia","Maite","Ada","Antonio"];


function imprimir(mensaje,id){
    let elemento = document.getElementById(id);
    elemento.innerText = mensaje;
}

function mostrarListaAlumno() {
    mensaje = "La lista de alumnos es " + listaAlumnos;
    imprimir(mensaje,"listaAlumnos");
}

/*EJERCICIO 2
Muestra el nombre del alumno de la posicion que elijas. Para ello:
Agrega un campo para elegir el alumno que quieren mostrar, no puede estar vacio y debe ser entre 1 y 10.
Agrega un boton mostrar alumno, que muestre el nombre del alumno elegido. */

function posicionListaAlumno() {
 
    let posicion = parseInt(document.getElementById("ej2posicion").value);
    let alumnoSeleccionado = listaAlumnos[posicion];
    let mensaje = "El alumno seleccionado es " + alumnoSeleccionado;
    imprimir(mensaje, "ej2resultado");
}

/*EJERCICIO 3
Agrega un boton mostrar alumnos ordenados, que muestre los alumnos ordenados por nombre. */

function ordenarListaAlumnos(){
    listaAlumnos.sort();
    mostrarListaAlumno();
}

/*EJERICIO 4
Agrega una nueva opcion para agregar un nuevo alumno. Para ello:
Agrega un campo para introducir el nombre del alumno. No puede estar vacio y debe tener maximo 30 caracteres.
Agrega un boton agregar, que al pulsarlo agrege al nuevo alumno a la lista y muestre la lista de alumnos actualizada.*/

function agregarAlumno () {
    let nuevoAlumno = document.getElementById("e4nuevoAlumno").value;
    listaAlumnos.push(nuevoAlumno);
    mostrarListaAlumno();
}

/*EJERCICIO 5
Agrega una opcion para eliminar un alumno de una posicion elegida.
Agrega un campo para introducir la posicion del alumno a eliminar. Debe ser un numero entre 1 y 500.
Agrega un boton eliminar, que al pulsarlo, elimine el alumno de la posicion introducida y muestre la lista de alumnos 
actualizada. 
Agrega una comprobacion para mostrar un mensaje de error si la posicion introducida es mayor a la longitud total 
de la lista. */

function eliminarAlumno(){
    let posicionAlumno = parseInt(document.getElementById("ej5eliminarAlumno").value);
    listaAlumnos.splice(posicionAlumno-1,1);
    mostrarListaAlumno();
    let mensaje = "";

    if(posicionAlumno <1 || posicionAlumno >500){
        mensaje = "La posición elegida no es válida. Debe ser un numero entre 1 y 500";
    }
    else {
        mensaje = "El alumno fue eliminado";
    }

    imprimir (mensaje, "e5eliminarAlumno")
}

/*EJERCICIO 6
Agrega una opcion para buscar un alumno. Para ello:
Agrega un campo para introducir el nombre del alumno a buscar.
Agrega un boton buscar, que al pulsarlo muentre un mensaje con todos los alumnos que contengan el nombre introducido, 
sin distinguir entre mayusculas y minusculas. */

function verPosicionAlumno() {
    let buscarAlumno = document.getElementById("ej8alumno").value.toLowerCase();
    let posicionDelAlumno = listaAlumnos.filter(alumno => alumno.toLowerCase().includes(buscarAlumno));
    let mensaje = ""
    if(posicionDelAlumno.lenght === -1){
        mensaje = "El elemento no se encuentra en la lista";
    }
    else{
        mensaje = "El elemento " + buscarAlumno + " esta en la posicion con indice " + posicionDelAlumno;
    }
    imprimir(mensaje,"ej8buscarAlumno");
}


  