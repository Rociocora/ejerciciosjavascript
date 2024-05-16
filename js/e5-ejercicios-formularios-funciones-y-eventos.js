function mostrarBienvenida(){
    //Obtener la opción Seleccionada.
    let nombreBienvenida = document.getElementById("ejemplotexto1").value;
    let ciudadBienvenida = document.getElementById("ejempltexto2").value;
    let fechaNacimiento = document.getElementById("ejemplo1fecha").value;

    let mensaje ="Mi nombre es " + nombreBienvenida + " vengo desde " + ciudadBienvenida + " y mi cumpleaños es " + fechaNacimiento;
    imprimir(mensaje, "ejemplo1Solucion")
}