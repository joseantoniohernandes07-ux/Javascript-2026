/* 

  Condicionales

  Son estructuras de control que permiten ejecutar diferentes bloques de codigo segun una condicion (Verdadero o falso)

  1. if (si es verdadero)

  Evaluar una condicion y si es verdadera (true), ejecuta el codigo dentro de sus llaves.

  Sintaxis:

    if(condicion) {
      // codigo que se ejecuta
    }

*/
let edad = 13;

if(edad >= 18) {
  // Código que se ejecuta
  console.log("Eres mayor de edad, puedes ver este contenido!");
}

/* 

  2. else (no es verdadero)

  Permite ejecutar un bloque de código si la condision es falsa.

  Sintaxis:

    if (condición) {
      // codigo que se ejecuta si es verdadero
    } else {
        // código que se ejecuta si es falso

    }
    

*/

let hora = 12;

if (hora < 12) {
  console.log("Buenos dias solecito! ☀");
} else {
  console.log("Buenas tardes chifurínpulo! 🌕");
}

/* 

  3. else if (si no es verdadero)

  Nos va a permitir tener mas de una condicion para ser evaluada. Esta evalacion es secuancia, hasta que una condicion sea verdadera entonces se ejecutara el bloque de codigo.

  Sintaxis:

    if (Condicion) {
      // codigo que se ejecuta
    } else if (condición) {
     // condicion que se ejecuta es verdadera 
    } else {
      // codigo que se ejecuta si ninguna de las condiciones es verdadera  
    }

*/

let calificacion = 10;

if (calificacionalificacion >= 9) {
  console.log("Eres un exelente programador! 🌈");
} else if (calificacion >= 7) {
  console.log("Ahi la llevas, ya casi te sale! 🎮");
} else if (calificacion <= 5) {
  console.log("Echale mas ganitas o nos vemos en el extra 👺");
} else {
  console.log("Ya valio barriga ¡Bienvenidx al extra! 🔥");
}