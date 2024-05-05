//JAVASCRIP DOM. OBTENER ELEMENTOS DE LA PAG POR SU ID
//obtener el elemento html con id ejemplo
let parrafoEjemplo = document.getElementById("ejemplo");

//modificar el texto del elemento html con id ejemplo
parrafoEjemplo.innerText = "Hola Bootcamp QA";

//modificar el elemento html con id ejemploTitutlo
let tituloEjemplo = document.getElementById("ejemploTitulo");
let miNombreRocio= "Rocío"
let miEdad = 31;
tituloEjemplo.innerText = "Hola mi nombre es " + miNombreRocio + " y tengo " + miEdad + " años.";

//Obtener elemento html con id ejemplo2 y agregar un texto con etiqueta html

let ejemplo2 = document.getElementById("ejemplo2");
ejemplo2.innerHTML = "<b>Ejemplo 2 en negrita</b>"

//obtener el atributo del elemento a con id ejemplo3 y agregarle una url
let ejemplo3 = document.getElementById("ejemplo3");
let pagWeb = "https:bootcampqa.com"
ejemplo3.href = pagWeb;

//obtener el elemento html con id ejemplo4 y cambiar su color a rojo
let ejemplo4 = document.getElementById("ejemplo4");
let newColor = "red";
ejemplo4.style.color = newColor;

