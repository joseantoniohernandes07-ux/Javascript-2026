/* 

  Operadores
  Son simbolos que indican al interprete que deben realizar una operacion matematica, logica o relacional. Y producir un resultado.

  1. Operadores Aritmeticos

  Se utilizan para operaciones matematicas basicas como suma, resta, divicion y miltiplicacion.

  + > Suma
  - > Resta
  * > Multiplicacion
  / > divicion
  % > Modulo (residuos de una divicion)
  ++ > Incremento (suma 1 valor)
  -- > Decremento (resta 1 al valor)

*/

let a = 10;
let b = 5;

// Expresion: Es el conjunto de variables, valores y operadores

console.log(a + b) // 15
console.log(a - b) // 5
console.log(a * b) // 50
console.log(a / b) // 2
console.log(a % b) // 0

a++;
console.log(a) // 11

b--;
console.log(b) // 4

/* 

  2. Operadores de Aisgnacion

  Estos operadores se utilizan para asignar vallores a las variables.

  = > Asignacion
  += > Sumar y Asignar
  -= > Resta y Asigna
  *= > Multiplica y Asigna
  /= > Divide y Asigna
  %= > Residuo y Asigna

*/

let c = 20;
console.log(c); // 20

c += 5;
console.log(c) // 25

c -= 10; 
console.log(c) // 15

c *= 2;
console.log(c) // 30

c /= 3;
console.log(c) // 10

c %= 3;
console.log(c) // 1

/* 

  3. Operaciones de Comparacion

  Se utilizan para comparar dos valores o expreciones y devuelve un valor booleano ( True o False )
  
  == > Igualdad. Compara solo el valor.
  === > Igualdad extricta. Compara el valor y el tipo de dato.
  != > Desigualdad. Compara el valor
  !== > Desigualdad estricta. Compara el valor y el tipo de dato.
  > > Mayor que
  < > Menor que
  >= > Mator o Igual que
  <= > Menor o Igual que

*/

let d = 10; // number
let e = "10"; // String

console.log(d == e); // True
console.log(d === e); // False
console.log(d != e); // False
console.log(d !== e); // True



console.log(d > 5); // true
console.log(b < 15); // true
console.log(d = 11) // false
console.log(d <= 5); // dalse)

/* 
  3. Opresaciones Logico

  Los utilizamos para combinar espreciones booleanas

  && > AND (Y) - Si ambos valores son verdaderos entoncs el resultado sera verdadero. Si al menos un valor es falzo, el resultado sea falso.

  || OR (o) - Si al menos un valor es verdadero el resultado sera verdadero. Solo si ambos valores son falsos el resultado sera falso
  
  ! > NOT (no) - Niega el valor. el resultado es el valor contrario al que esta asignado.

*/

let f = true; // 10 > 5
let g = false; // 10 === "10"

console.log( f && g ) // false
console.log( f || g ) // true
console.log( !f ) // false
console.log( !g ) // true