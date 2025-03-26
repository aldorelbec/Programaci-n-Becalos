//funciones con javascript
/* Una función es un bloque de codigo reutilizable
que realiza una tarea en especifico.
Nos permite escribir codigo mas organizado y acortar 
las lineas de codigo.
*/
//sintaxis basica
//1.- definir la función
function saludar (){
    console.log ("Hola mundo!");
}
//2.- Llamar a la función
saludar() 
saludar() 
saludar() 
saludar() 
saludar() 
saludar() //puedo llamarla cuantas veces quiera

//Podemos crear una función con parametros y argumentos
//los parametros son variables que una función recibe al ser llamada 
function SaludarPersona (nombre){
    console.log ("Hola", nombre, "!!");
}// aqui nombre es un parametro
SaludarPersona("pedro") //cuando llamamos a la función le damos el argumento "pedro"
SaludarPersona("Sheyla")
SaludarPersona("Aldo")

/*si queremos imprimir como tal la función nos sale undefined ya que
no especificamos un return 
*/
console.log(saludar())
console.log(SaludarPersona())

 //Una función puede devolver un valor con "return"
function suma (num1, num2){
    return num1 + num2
}
console.log (suma(1,6));//al imprimair la función con console.log 
console.log (suma(6,6));// y darle parametros nos regresa la suma 
console.log (suma(9,0));//de lo que le pedimos al declarar la función
console.log (suma(0,0));
console.log (suma("Hola", " sheyla!!"));// incluso si son cadenas las concatena

//otra forma de hacer una función es declarando una variable dentro de la función es decir una variable local 

function resta (num1, num2){
    let resta = num1 - num2
    return resta
}
console.log (resta (5,2));
let resultado = resta (6,2);//podemos guardar el resultado en una variable
console.log (resultado);

/*Podemos anidar funciones es decir hacer una función dentro de una función
para hacer una función local y no global esto limita el alcance de la función 
anidada para proteger esa función y que no se use en otra parte
esto se conoce como "nested function", sin embargo no es una buena practica
ya que suele ser complicado de leer
*/
function nombreMayusculas (nombre){
    function mayusculas (string){
        return string.toUpperCase ()
    }
   return mayusculas(nombre) 
    }

console.log (nombreMayusculas ("Pepe"))