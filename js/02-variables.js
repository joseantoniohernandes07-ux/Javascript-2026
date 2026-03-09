/* 

  Variables

  La son contenedores que almacenan datos. En JS se pueden declarar variables utilizando las palabras clave: var, let y const

  var > Es la forma mas antigua de declarar variables.Tiene un alcance global y puede ser re-declarada y actualizada.

  let > Es la forma moderna de declarar variables, Tiene un alcance de bloque o local. Puede ser actualizada pero no redeclararse dentro del mismo alcance.
  
  const > Tiene un alcance de bloque y no pueden ser redeclaradas ni actualizadas. Se utilizan con valores que nunca deben cambiar.

*/

// Declaracion con var

var pokemon = "Snorlax";

console.log(pokemon)

pokemon = "Ditto";
console.log(pokemon)

// Declaracion con let

let edad = 37;

console.log(edad);

edad = 30;

console.log(edad);

//Declaracion con const

const PI = 3.1416;

console.log(PI)

// PI = "Puchungito";