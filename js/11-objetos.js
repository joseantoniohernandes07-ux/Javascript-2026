/* 

  Objetos de propiedades. Una propiedad es una asociacion entre un nombre (clave o key) y un valor (value).

  Los valores pueden ser de distintos tipos: numeros, cadenas de texto, boleanos, arreglos, funciones.

  Sintaxis:

  nombreObjeto = {
    //Propiedades (clave: vaolor)
    clave1: valor,
    clave2: valor,
    clave3: valor,
    ...
  }

*/

const perrito = {
  nombre: `Chikis`,
  raza: `Bichon`,
  edad: 13,
  ladra: true,
  brinca: false,
  juguetes: [`pamchita`, `leoncio`],
  saludo: function() { console.log("Hola soy la Chikis 🐶")}
}

console.log(perrito)

/* 

  Acceder a las propiedades y sus calores, utiliza la notacion de punto o la notacion de corchetes.

  nombreObjeto.clave 👉 notacion de punto
  nombreObjeto[clave] 👉 notacion de corchete

*/

console.log(perrito.raza);
console.log(perrito[`nombre`]);

console.log("Hola me llamo " + perrito.nombre + " y tengo " + perrito.edad + " años y soy un perrito " + perrito.raza );