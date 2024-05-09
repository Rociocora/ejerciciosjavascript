//EJERCICIOS DE OPERACIONES TEMA 3

//Declarar constantes 
//Ejercicio 7

//Numero de meses del año
const MesesAño = 12;
document.write("El año tiene " + MesesAño + " meses.");
document.write("</br>"); 

//Número días semana
const DiasSemana = 7;
document.write("La semana tiene " + DiasSemana + " días.");
document.write("</br>"); 

//Número habitantes en la ciudad 
const NumeroHabitantes = 3.373;
document.write("Villanueva del Rosario tiene " + NumeroHabitantes + " habitantes.");
document.write("</br>"); 

//Numero de estaciones del año
const NumeroEstaciones = 4;
document.write("El año tiene " + NumeroEstaciones + " estaciones.");
document.write("</br>"); 

//Nombre de mi ciudad
const MiCiudad = "Villanueva del Rosario";
document.write("El nombre de mi pueblo es " + MiCiudad + " .");
document.write("</br>"); 

//Numero de horas del día
const HorasDia = 24;
document.write("El día tiene " + HorasDia + " horas.");
document.write("</br>"); 

//Ejercicios de operaciones

let precioManzanasKg = 2.5;
document.write("El precio de las manzanas es " + precioManzanasKg + " €");
document.write("</br>");
let precioPerasKg = 1.5;
document.write("El precio de las peras es " + precioPerasKg + " €");
document.write("</br>");
let precioPlatanosKg = 1.8;
document.write("El precio de los plátanos es " + precioPlatanosKg + " €");
document.write("</br>");

let kgManzana = 1;
let precioKgMazana = 2.5;
let precioFinalKgMazana = kgManzana * precioKgMazana;
document.write("El precio total de 1 kg de manzanas es " + precioFinalKgMazana + " €.")
document.write("</br>");

let kgPeras = 1;
let precioTotalKgPeras = precioPerasKg * kgPeras;
document.write("El precio total de 1 kg de peras es " + precioTotalKgPeras + " €.")
document.write("</br>");

let kgPlatanos = 1;
let preciototalKgPlatanos = precioPlatanosKg * kgPlatanos;
document.write("El precio total de 1 kg de platanos es " + preciototalKgPlatanos + " €.")
document.write("</br>");

let precioPlatanosMasPeras = precioTotalKgPeras + preciototalKgPlatanos;
document.write("El precio total de 1 kg de platanos más 1 kg de peras es " + precioPlatanosMasPeras + " €.")
document.write("</br>");

let KgDosPeras = 2;
let precioTotalDosKilosPeras = precioPerasKg * KgDosPeras;
document.write("El precio total de 2 kg de peras es " + precioTotalDosKilosPeras + " €.")
document.write("</br>");

let TreskgPlatanos = 3;
let precioTotalTresKilosPlatanos = TreskgPlatanos * precioPlatanosKg;
document.write("El precio total de 3 kg de platanos es " + precioTotalTresKilosPlatanos + " €.")
document.write("</br>");

kgManzana = 2;
let precioDosKgManzanas = kgManzana * precioKgMazana;
kgPeras = 3;
let precioTresKgPeras = kgPeras * precioPerasKg;
let precioManzanasYPeras = precioDosKgManzanas + precioTresKgPeras;
document.write("El precio total de 2kg de manzanas y 3kg de peras es " + precioManzanasYPeras + " €.")
document.write("</br>");

//1,5 kilos de platano, 2 kilos de peras, 3 kilos de manzana

kgPlatanos = 1.5;
kgPeras = 2;
kgManzana = 3;
let precioTotalPlatanos = kgPlatanos * precioPlatanosKg;
let precioTotalManzanas = kgManzana * precioManzanasKg;
let precioTotalPeras = kgPeras * precioPerasKg;
let precioTotalPlatanosPerasYManzanas = precioTotalPlatanos + precioTotalManzanas + precioTotalPeras;
document.write("El precio total de 1,5 kilos de plantanos, 2 kilos de peras y 3 kilos de manzanas es " + precioTotalPlatanosPerasYManzanas + " €.")
document.write("</br>");

//Crea variables para guardar las notas de un alumno: 7.5, 10.5, 8, 9.5, 7 y muestra su nota media.

let alumnoMario = 7.5;
let alumnnoManuel = 10.5;
let alumnoRocio = 8;
let alumnoPatri = 9.5;
let alumnoAda = 7;
let numeroNotasExamenes = 5;
let notaMediaAlumnos = (alumnoMario + alumnnoManuel + alumnoRocio + alumnoPatri + alumnoAda) / numeroNotasExamenes;
document.write("La nota media de 5 alumnos con notas de 7.5, 10.5, 8, 9.5 y 7 es " + notaMediaAlumnos);
document.write("</br>");

//Calcula el área de un cuadrado con lado de longitud 5 cm

let ladoCuadrado = 5;
let areaCuadrado = ladoCuadrado * ladoCuadrado;
document.write("El área de un cuadrado con 5 cm de lado es " + areaCuadrado);
document.write("</br>");

//Encuentra el área de un rectángulo con dimensiones de 8 cm de largo y 6 cm de ancho.

let baseRectangulo = 8;
let alturaRectangulo = 6;
let areaRectangulo = baseRectangulo * alturaRectangulo;
document.write("El área de un rectangulo con 8cm de base y 6 de altura es de " + areaRectangulo);
document.write("</br>");

//Determina el área de un triángulo con base de 10 metros y altura de 8 metros.

let baseTriangulo = 10;
let alturaTriangulo = 8;
let partidoDos = 2;
let areaTriangulo = (baseTriangulo * alturaTriangulo) / partidoDos;
document.write("El área de un triangulo con 10cm de base y 8 de altura es de " + areaTriangulo);
document.write("</br>");

//Calcula el área de un círculo con radio de 4 centímetros
let radioCirculo = 4;
const Pi = 3.14;
let radioCirculoAlCuadrado = radioCirculo * radioCirculo;
let areaCirculo = Pi * radioCirculoAlCuadrado;
document.write("El área de un circulo con radio 4 es de " + areaCirculo);
document.write("</br>");

// 7. Determina el área de un rombo con diagonales de longitudes 12 cm y 16 cm.
let diagonal1 = 12;
let diagonal2 = 16;
let areaRombo = (diagonal1 * diagonal2)/2;
document.write("El área del rombo es " + " " + areaRombo + "<br>");

//8. Calcula el área de un paralelogramo con base de 7 metros y altura de 9 metros:</br>");

let baseParalelogramo = 7;
let alturaParalelogramo = 9;
multiplicacionArea = baseParalelogramo * alturaParalelogramo;

document.write('Para calcular el área de un paralelogramo en la base por la altura: ' + multiplicacionArea + ' centímetros' + '<br>');

//9. Calcular el area de un pentagono de lado 6cm.
let apotemapentagono = 4.13;
let ladopentagono = 6;
let perimetroPentagono = (5 * ladopentagono);

let areapentagono = (perimetroPentagono * apotemapentagono)/2

document.write("Área del pentágono es cinco veces la longitud de su lado multiplicado por su apotema dividido entre dos. Su lado es " + ladopentagono + " cm y la apotema es " + apotemapentagono + " cm. Por lo que el área es " + areapentagono + " cm" + "</br>");