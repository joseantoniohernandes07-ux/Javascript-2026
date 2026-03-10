/* 

  Tipos de datos

  Los tipos de datos son uan clasificacion de los diferentes valores que podemos manejar en un lenguaje de programacion.

  En JS; existen varios tipos de datos que se pueden agrupar en dos categorias: Primitivos y complejos(objetos)

  Cada tipo de dato tiene sus caracteristicas y usos especificos en programacion.

  1. Primitivos

  Datos basicos que no se concideran objetos y no tienen metodos.

  Numero o number > Representan valores numericos ya sea enteros o decimales.

  Cadena de caracteres o Strings > Representan texto. El texto se coloca entre comillas dobles o simples. Hay que ser concistentes en su uso.

  Boleanos o Booleans > Estos representan un valor logico que puede ser verdadero (true) o falso (false).

  Indefinido o Undefined > Es el valor que se asigna a una variable que ha sido declarada pero no se ha inicializado.

*/

// Numbers

let miEdad = 36;
let miEstatura = 1.65;

console.log(miEdad)
console.log(miEstatura)

// String

let miNombre = "Antonio";
let miApellido = "Hernandez";

console.log(miNombre);
console.log(miApellido);

// Booleans

let esEstudioso = true;
let esGuapeton = false;

console.log(esEstudioso);
console.log(esGuapeton)

// Undefined

let aprobaraProgramacion;

console.log(aprobaraProgramacion)

/* 

  2. Complejos (objetos)

  Arreglo o Array > Es un conjunto de datos que se almacenan en una lista ordenada. Los datos de un arreglos se escriben entre [] (Sihft + t. llaves) y se separan por comas ,

  Objetos o Objects > Este es un conjunto de multiples datos en pares: clave - valor. Los datos dentro de un objeto se escriben entre llaves: {} y se separan por comas

  Funciones o Fuctions > Es un tipo de datos que puede ser invocado. Se declaran con la palabra reservada function y el codigo que ejecuta va entre llaves {}

*/

// Array

let misCaricaturas = ["Pokemon" , "Bob Sponja" , "Padrinos Magicos"];
let misNumeros = [5, 10, 8, 13, 33];
let tutifruti = ["Puchungito", 12345, true, false]

console.log(misCaricaturas);
console.log(misCaricaturas[2]);
console.log(misNumeros);
console.log(misNumeros[3]);
console.log(tutifruti);
console.log(tutifruti[2]);

// Objetos

let perro = {
  nombre: "firulais",
  edad: 2, 
  tamaño: "color", 
  color: "negro",
  ladra: true,
  muerde: false,
}

console.log(perro)
console.log(perro.nombre)
console.log(perro.edad)
console.log(perro.muerde)

// Fuctions

let saludar = function () {
  (console.log("Hola mamá estoy aprendiendeo JS")
}

console.log (saludar)