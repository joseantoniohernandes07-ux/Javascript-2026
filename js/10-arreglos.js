let peliculas = ["Volver al Futuro", "Jurasic Park", "Toy Story"];

console.log(peliculas)

peliculas.push("La Dama y el Vagabundo", "Frozen", "Avengers End Game");

console.log(peliculas);

let ultimaPelicula = peliculas.pop();

console.log(peliculas);
console.log("La última peli que vi fue " + ultimaPelicula);

let primerPelicula = peliculas.shift();

console.log(peliculas);
console.log("Mi primera movie que vi fue " + primerPelicula);

peliculas.unshift("Gataka", "La Vida es Bella", "La Bella Durmiente");
console.log(peliculas);

console.log( peliculas.indexOf("Frozen") );
console.log("---------------------------")
/* 

  Interacion de Arreglos

  El acceso a los datos a traves de un bucle a ciclo.

*/

let antojitos = ["Frutita", "Cemita", "Coquita"];

antojitos.push("Michelada", "Crepa", "Memelita");
antojitos.push("Paleta", "Gomita", "Pepsi");

for (i=0 ; i < antojitos.length; i++ ) {
  console.log( "Se me requeteantojo una " + antojitos[i] + " 😋" )
}