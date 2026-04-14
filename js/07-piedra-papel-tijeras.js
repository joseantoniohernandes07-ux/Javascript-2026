/* 

  Juego Piedra, Papel o Tijera

  Vamos a crear un juego interactivo donde el uruaro pueda jugar contra la compu.

  Reglas:

  - Piedra vence a Tijera
  - Tijera vence a Papel
  - Papel vence a Piedra
  - Si ambos elijen lo mismo es empate

  Pasos para implementar

  - Definir las opciones del jugador.
  - Generar una opcion aleatoria para la computadora.
  - Comparar estas opciones y determinar al ganador.
  - Mostrar el resultado.

  Estructura a utilizar

  - Variables
  - Condicionales
  - Generar numero aleatorio (Math.random) entre 0 y 1
  - Operadores lógicos y de comparacion
  - Concatenacion de cadenas de texto (templates literals)
  - Comentarios

*/

// Variable. 1. Opcion del jugador

const opcionJugador = prompt("¡Para jugar escribe: piedra, papel o tijera!"); // piedra,papel o tijera

// 2. Opcion de la computadora

const numeroAleatorio = Math.random(); // Entre 0 y 1

let opcionComputadora;

// 3. Condicional - Asignar una opcion dependiendo del numero aleatorio

if ( numeroAleatorio < 0.33 ) {
  opcionComputadora = "piedra"
} else if ( numeroAleatorio < 0.66 ) {
  opcionComputadora = "papel";
} else {
  opcionComputadora = "tijera"
}

console.log(opcionComputadora);

// 4. Mostrar la eleccion

console.log("¡✊ Piedra, ✋ Papel o ✌ Tijera!")
console.log("Tu eleccion es: " + opcionJugador)
console.log("La compu eligio: " + opcionComputadora)
console.log("------------------------------------------")

// 5. Determinar el ganador a partir de las condicionales

let resultado;

if ( opcionJugador === opcionComputadora) {
  resultado = `🤝 ¡Empate! Ambos eligieron ${opcionJugador}`;
} else if (opcionJugador === "piedra" && opcionComputadora === "tijera") {
  resultado = `🎉 ¡Ganaste! piedra vence a tijera.`;
} else if ( opcionJugador === `papel` && opcionComputadora === `piedra`) {
  resultado = `🎉 ¡Ganaste! papel vence a piedra.`;
} else if ( opcionJugador === `tijera` && opcionComputadora === `papel`) {
  resultado = `🎉 ¡Ganaste! tijera vence a papel.`;
} else {
  resultado = `😝 ¡Perdiste! ¡La computadora te gano, lero lero!`
}

// 6. Mostramos el rsultado

console.log(resultado);