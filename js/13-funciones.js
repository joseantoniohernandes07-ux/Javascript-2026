/* 

  PArametros por defecto

  En las funciones podemos tener valores por defecto si no se proporcionan los argumentos al llamar a la funcion

  Sintaxis:

  function nombreFuncion( parm1 = valorDefault ){
    // Codigo que se ejecuta o cuerpa de la funcion.
    ...
  }

  Llamada:

  nombreFuncion(); // Usara los valores poir defecto.
  nombreFuncion(arg1); // Usara el valor del argumento.

*/

const multipicar = function( num1 = 1, num2 = 2 ) {
  let resultado = num1 * num2;
  console.log(`El resultad de multiplicar ${num1} por ${num2} es: ${resultado}`);
}

multiplicar();
multiplicar(5, 3)
multiplicar(86, 324);

/* 

  Valor de retorno (Return)

  Las funciones pueden "devolver" o retornar un valor.
  Para esto se utiliza la palabra "return"

  Sintaxis:

  function nombreFunción() {
    // Cuerpa de la función.
    ...
    ...
    return valor;
  }
  
  Llamada:

  const nombreConstante = nombreFunción();

*/

function despedido( nombre = `Yattito` ) {
  return `${nombre} estas despedido! 😨`;
}

const mensajito = despedido();

console.log(mensajito);

/* 

  Retorno imprlícito

  Las funciones fleca no necesitan la palabra retur, en su estructura mas simple (una sola si)

  Sintaxis:

  const nombreConstante = () => valor;

*/

const restar = (num1, num2) => num1 - num2;

const resultado = restar (100, 8);

console.log(resultado)