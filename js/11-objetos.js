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
  aunLadra: true,
  aunBrinca: false,
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

console.log(`Hola me llamo ` + perrito.nombre + ` y tengo ` + perrito.edad + ` años y soy un perrito ` + perrito.raza );

// acceso a las propiedades boleanas

console.log(perrito.aunLadra);
console.log(perrito.aunBrinca);

if(perrito.aunLadra) {
  console.log(`Soy una perrita guardiana! 🚨`);
} else {
  console.log(`Soy una perrita dormilona! 😴`);
}
if (perrito.aunBrinca) {
  console.log(`Soy jven y vivaracha! 👧`);
} else {
  console.log(`Ya no brinco por que soy una perrita viejita! 👵`);
}

// Acceso al array

console.log(perrito.juguetes);
console.log(perrito.juguetes[0]); // pamchita
console.log(perrito.juguetes[1]); // leoncio

console.log(`Mis juguetes favoritos son: mi almuada ${perrito.juguetes[0]} y ${perrito.juguetes[1]} mi peluche!`)

/* 

 Metodos de los objetos.
 
 Son funciones que estan asociadas a un objeto se pueden llamar utilizando la notacion de punto "."
 
 Todas las funciones para ser llamadas se escribe asi:
 
   nombreFuncion -> Llamamos a la funcion
 
 En los objetos lo escribiriamos asi
 
   nombreObjeto,nombreFuncion()
 
 Cuando una funcion esta dentro de un objeto se les llama metodos.

*/

console.log(perrito.saludo()) // Indefinido

perrito.saludo(); // Imprime el mensaje dento del bloque de codigo de la funcion.

/* 

  Agregar propiedades

  Para agregar mas propiedades despues de declarar el objeto usamos la sigiente sintaxis.

    nomreObjeto.nuevaPropiedad = valor;

  Para actualizar una propiedad usamos la misma sintaxis del punto y el valor actualizado

    nombreObjeto.propiedadExistente = nuevoValor

*/
console.log(perrito) 

perrito.color = "blanco";
perrito.edad = 12;
perrito.corre;

console.log(perrito)

