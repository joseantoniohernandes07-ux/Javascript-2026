/* 

  Clases

  Las clasesen JS son una forma de definir objetos, sus propiedades y metods, creando un prototipo o plantilla del  cual se generan varias instanciasde objetos y heredan su comportamiento

  Por norma, los nombres de clases se comiemsan con mayuscula.

  Sintaxis:

  class NombreClase {

    // Utilizamos un metodo constructor especial para iniciar una instancia del objeto

    cosntructor(prop1, prop2) {}
    cosntructor(prop1, prop3) {}
    cosntructor(prop1, prop4) {}
    this.key = prop1
    this.key = prop2

  }

  lass -> Define la clase
  constructor() -> Se ejecuta al crear el objeto
  this -> Una referencia al objeto que se esta crando

*/

class Estudiante {

  constructor(nombre, licenciatura, semestre) {
    this.nombre = nombre;
    this.licenciatura = licenciatura;
    this.semestre = semestre;
  }

  // Agregar un metodo para todas las instancias

  saludar() {
    console.log( `Hola soy ${this.nombre} estudio ${this.licenciatura} en el semestre no. ${this.semestre}` )
  }
}

console.log(Estudiante);

console.log("-------------------------------------------")

/* 

  Crear instancias de la lcase (Objetos)

  Vas a utilizar una constante y a crear una nueva instanciaa partir de la classe

  sintaxis:

  const nombreConstante = new NombreClase(Prop1, Prop2, Prop3)
  
  new crea una instancia

*/

const estudiante1 = new Estudiante(`Antonio`, `LDPM`, 4);
const estudiante2 = new Estudiante(`Alan`, `LTPA`, 2);
const estudiante3 = new Estudiante(`Areli`, `LCGI`, 6);

console.log(estudiante1);
console.log(estudiante2);
console.log(estudiante3);

// Accedemos a los valores

console.log(`Hola me llamo ${estudiante1.nombre}, estudio en ${estudiante1.licenciatura} voy en el semestre #${estudiante1.semestre}`)

console.log(`Hola me llamo ${estudiante2.nombre}, estudio en ${estudiante2.licenciatura} voy en el semestre #${estudiante2.semestre}`)

console.log(`Hola me llamo ${estudiante3.nombre}, estudio en ${estudiante3.licenciatura} voy en el semestre #${estudiante3.semestre}`)

console.log("-------------------------------------------")

estudiante1.saludar();
estudiante2.saludar();
estudiante3.saludar();