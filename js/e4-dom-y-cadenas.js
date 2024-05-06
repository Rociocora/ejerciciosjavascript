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

//Crear un nuevo titulo dentro del id contenido
let divContenido = document.getElementById("contenido");
let nuevoTitulo = document.createElement("h1");
nuevoTitulo.innerText = "Hola soy un nuevo titulo creado";
divContenido.appendChild(nuevoTitulo);

//Crear un nuevo parrafo dentro del id contenido

let nuevoParrafo = document.createElement("P");
nuevoParrafo.innerText = "Hola soy un nuevo parrafo creado";
divContenido.appendChild(nuevoParrafo);

//obtener el atributo del elemento a con id ejemplo3 y agregarle una url
let ejemplo3 = document.getElementById("ejemplo3");
let pagWeb = "https:bootcampqa.com"
ejemplo3.href = pagWeb;

//obtener el elemento html con id ejemplo4 y cambiar su color a rojo
let ejemplo4 = document.getElementById("ejemplo4");
let newColor = "red";
ejemplo4.style.color = newColor;

//CADENAS EN JAVASCRIPT
//Escapar caracteres especiales en una cadena se hace con \
let cadenaEjemplo = "Hola mi nombre es \"Juan\" que tal estas";
let ejemplo5 = document.getElementById("ejemplo5");
ejemplo5.innerText = cadenaEjemplo;

//Contar caracteres de una cadena
let ejemploContar = "Bienvenidos a Bootcamp QA";
let totalLetrasCadenaEjemplo = ejemploContar.length;
let ejemplo6 = document.getElementById("ejemplo6");
ejemplo6.innerText = "La cadena " + ejemploContar + " tiene un total de " + totalLetrasCadenaEjemplo + " caracteres";

//Obtener la letra en la posición que elijas de la cadena, si la cadena tiene 25 caracteres, la primera será 
//el 0 y la ultima el 24, porque en lugar de empezar por 1 empieza por el 0.
let primeraLetra = ejemploContar[0]; //la primera siempre empieza en 0
let ultimaLetra = ejemploContar[ejemploContar.length - 1]; //Total de letras de una cadena - 1, porque empieza en 0.
let ejemplo7 = document.getElementById("ejemplo7");
ejemplo7.innerText = "La primera letra de la palabra " + ejemploContar + " es " + primeraLetra + " y la ultima letra es " + ultimaLetra;

//Cambiar cadena todo a mayuscula o minuscula
let cadenaMayuscula = ejemploContar.toUpperCase();
let cadenaMinuscula = ejemploContar.toLowerCase();
let ejemplo8 = document.getElementById("ejemplo8");
ejemplo8.innerText = "La cadena " + ejemploContar + " en mayuscula " + cadenaMayuscula + " y en minuscula " + cadenaMinuscula;

//Sustituir texto de una cadena
let nuevaCadena = ejemploContar.replace ("Bootcamp QA", "mi Web");
let ejemplo9 = document.getElementById("ejemplo9");
ejemplo9.innerText = "Antes de reemplazar " + ejemploContar + " despues de reemplazar " + nuevaCadena;

//Sustituir una palabra por una variable
let mensajeBienvenida = "Bienvenido estudiante";
let nombreEstudiante = "Juan";
let nuevoMensajeBienvenida = mensajeBienvenida.replace("estudiante", nombreEstudiante);
let ejemplo10 = document.getElementById("ejemplo10");
ejemplo10.innerText = "Antes de reemplazar " + mensajeBienvenida + " despues de reemplazar " + nuevoMensajeBienvenida;