/* 

  Bucles

  Son estructuras de control uqe permiten repetir un bloque de codigo varias veces, hasta que se cumpla una condicion especifica.

  Los mas comunes son:

  1- Bucle for
  El bucle for se utiliza cuando sabemos cuantas veces queremos repetir un bloque de codigo.

  Sintaxias:

  for ( incialización; condición; incremento ) {

    // Codigo que se va a rpetir su ejecucion
  
  }

  Inicializacion 👉 variable con un valor inicial
  condicion 👉 evaluar una exprecion. true > se ejecuta el bucle.
  incremento 👉 aumenta el valor del la variable en cada iteración

*/

for (let i = 1; i <= 100; i++ ) {
  //console.log(i)
}

/* 

  2- Bucle while

  El bucle while se utiliza cuando no sabemos cuantas veces queremos que se repita un bloque de código. Pero queremos que se repita mientras se cumpla una condicion.

  Sintaxis:

  inicialización

  while (condicion) {
    // Codigo que se ejecuta
    ...
    incremento
  }

*/

/* let j = 0;
let repeticiones = parseInt(prompt("Cuantas veces quieres que se repita"))

while (j <= repeticiones) {
  console.log(j)
  j++
}
 */
/* 

  3- Bucle do...while

  Este bucle es similar al bucle while, pero garantiza que el bloque de codigo se ejecute al menos una vez.Ya que la condicion se evalua despues de la ejecucion.

  Sintaxis:

  inicializacion

  do {
    // Codigo que se ejecutara al menos una vez
    ...
    incremento
  } while (condicion);

*/

let k = 0;

do {
  console.log(`Beep Beep Richie! 🎈`)
  k++
} while (k < 5);

