// CLASE: 
/* Es una plantilla para crear objetos. Define atributos y metodos. Se define
con la palabra reservada "class" seguido del nombre empezando por Mayuscula y 
en singular. 

OBJETO: 
Es la instancia de una clase, con sus propios valores para los
atributos definidos en la clase.
 
ATRIBUTO: Son las características o propiedades de una clase 
METODOS: Son las funciones dentro de una clase que se ejecuta automáticamente al 
crear un objeto. Sirve para inicializar los atributos de la clase.
 */

/////////Paso 1: definir una clase con sus atributos y metodos

class Persona{
    //Atributos 
    constructor (nombre, edad, nacionalidad){
        this.nombre = nombre
        this.edad = edad
        this.nacionalidad = nacionalidad
    }
   //METODOS DE LA CLASE
   saludar (){
    console.log ("Hola mi nombre es", this.nombre, "tengo", this.edad, "años, soy ", this.nacionalidad);
 
    //Nuevo metodo para despedir


   } 
   despedir(nombre){
    console.log ("Hasta luego ", nombre)
   }
}
//PASO 2. Creacion de los objetos a partir de la clase 
let persona1= new Persona ("Sheyla", 24, "Mexicana")
console.log (persona1)

//paso 3. llamar a los metodos de mi objeto
persona1.saludar()
persona1.despedir("Sheyla")

//Ejercicio: crear un objeto a partir de la clase persona con los datos de nombre = Lucia
//edad 30, nacionalidad canadiense 

let persona2 = new Persona ("Lucia", 30, "Canadiense")
console.log (persona2)
persona2.saludar()

//Ejercicio Lucia se despide de mario
persona2.despedir ("Mario")