/* 

  Concatenacion de cadenas de texto

  Es el proceso de unir dos o mas cadenas de texto en una sola. Esto se hace usando el operador "+"

*/

console.log("Tengo antojo de " + "una torta de tamal!😋")

let nombre = "Antonio";
let apellido = "Hernandez";
let edad = 21;

console.log("Hola me llamo " + nombre + " " + apellido + " y tengo " + edad + " años! 🧒");

/* 

  Plantillas Literales (Template Strings)

  Es un espacio que se habre para la combinacion de variables, expreciones y cadenas de texto. Ayuda a concatenar de forma mas dinamica y simple. Se usan los backticks (Acento invertido o acento agudo); `´

*/

console.log(`Hola me llamo ${nombre} ${apellido} y tengo ${edad} años! 🧒`);

/* 

  Si se utiliza el operador de + con valores numericos se suman. Pero si se usan con cadenas de texto entonces se concatenan

*/

let a = "5"; // string
let b = "10"; // string

console.log(a + " " + b) //15 