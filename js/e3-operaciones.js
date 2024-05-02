//SUMAN DOS NUMEROS
//Sumar el precio de los tomates mas el de las manzanas
let precioTomates = 2.8;
let precioManzanas = 1.5;
let precioTotal;

precioTotal = precioTomates + precioManzanas;

document.write("Sumar dos números. La suma del precio de los Tomates " + precioTomates);
document.write(" más el precio de las Manzanas " + precioManzanas);
document.write(" es en total " + precioTotal);
document.write("</br>");

//RESTAR DOS NUMEROS
//Restar al precio de los tomates el descuento de 1€

let descuento = 1;
let precioTomatesDescuento = precioTomates - descuento;
document.write("Restar dos números. Al precio de los tomates " + precioTomates);
document.write(" restarle el descuento " + descuento);
document.write(" es en total " + precioTomatesDescuento);
document.write("</br>");

//MULTIPLICAR DOS NUMEROS
//Calcular el precio de 5kg de manzanas.

let kgManzanas = 5;
let precioTotalKgManzana = precioManzanas * kgManzanas;
document.write("Multiplicar dos números. El precio total de  " + kgManzanas + " kilos manzanas");
document.write(" a un precio de  " + precioManzanas);
document.write(" es en total " + precioTotalKgManzana);
document.write("</br>");

//DIVIDIR DOS NUMEROS
//Calcular la mitad del prcio de las manzanas.
let mitad = 2;
let mitadPrecio = precioManzanas / mitad;

document.write("Dividir dos números. El resultado de dividir el precio de las manzanas  " + precioManzanas);
document.write(" entre  " + mitad);
document.write(" es en total " + mitadPrecio);
document.write("</br>");

//COMBINAR VARIAS OPERACIONES
//Usar parentesis en las operaciones que queramos que se hagan primero.
let notaExamen1 = 5.6;
let notaExamen2 = 8.2;
let notaExamen3 = 6.5;
let totalExamenes = 3;
let notaMedia = (notaExamen1 + notaExamen2 + notaExamen3)/totalExamenes;

document.write("La media de los examenes  " + notaExamen1 + " + " + notaExamen2 +  " + " + notaExamen3);
document.write(" sería en total  " + notaMedia);
document.write("</br>");

//OPERACIONES INCREMENTO Y DECREMENTO
//Cuando ponemos a la variable ++ le sumamos 1 y cuando le ponemos -- le restamos 1 en cada uso.

let numeroIntentos = 5;
document.write ("Número de intentos " + numeroIntentos);
document.write("</br>");
numeroIntentos++;
numeroIntentos++;
document.write ("Número de intentos incrementado es " + numeroIntentos);
document.write("</br>");
numeroIntentos--;
document.write ("Número de intentos decrementado es " + numeroIntentos);
document.write("</br>");