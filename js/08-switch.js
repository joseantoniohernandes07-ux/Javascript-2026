/* 

  Switch
  
  Es una sentencia que se utiliza para realizar diferentes acciones sugun distintas condiciones.

  Se suele usar como forma alternativa a multiples sentensias else-if cuando se tiene una sola variable que puede tomar distintos valores.

  Sintaxis:

  switch (variable) {
  
    // Casos segun se compare la variable
    case valor1:
      // Código a ejecutar
      ...
      ...
      break; // Parar la ejecucion del código
    
    case valor2:
      // Código a ejecutar
      ...
      ...
      break;
    
    case valor3:
      // Código a ejecutar
      ...
      ...
      break;

    default:
      // Va a ejecutar el codigo si no coninciden con ningun caso.
      ...
      ...
      break; // Sea opcional
  }

*/

let eleccionLicenciatura = prompt(`Escribe la licenciatura que te interesa: television, dieño o consukturia`) // television, diseño y consultoria

switch (eleccionLicenciatura) {

  case `television`:
    console.log(`📺 Haz elegido la Licenciatura de Television, que mal por ti!`);
    break;

  case `diseño`:
    console.log(`🎨 Has elegido la Licenciatura de Diseño, seras muy fregon!`);
    break;

  case `consultoria`:
    console.log(`💅 Has elegido la Licenciatura de Consultoria, me caes muy bien!`);
    break;

  default:
    console.log(`🥴 !Estas loqui@¡`);
}
