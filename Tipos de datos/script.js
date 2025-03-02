/* 
Tipos de datos en JS
*/

//Tipo number (numero)

var edad = 25 
var precio = 500*10
var puntos = 0 

 // Tipo string (Texto)

 var nombre = "Sheyla "
 var saludo= "Hola ¿Como estas?"
 var character = "a"
 var numerocadena= "25"

//Tipo booleano

var esmayor= true 
var tienepermiso= false

// Tipo Symbol

var identificarid= Symbol("id")
var identificador2= Symbol("id")

//Tipo bigInt 
var temperatura= 23423423432432423432n /*se identifica con una "n" al final
y solo se pueden operar bigInts con BigInts*/


//Tipo null
var vacio= null

//Tipo Undefined
var sindefinir

//Tipo NaN (Not a number) cuando se operan numeros con letras

var resultadonovalido= "hola"*3

/* Console.log:
se usa para imprimir valores en la 
consola del navegador

*/
console.log (edad)
console.log (nombre)

//¿Que es Typeof:
// Typeof se usa para conocer que tipo de datode una variable
//Es util para depuración y validación de codigo+
console.log(typeof edad)
console.log(typeof numerocadena)

//////////////////////////////////////////
//Ejercicios del proyecto
var titulo= "Ejercicios del proyecto 1"
console.log (titulo)
// Imprimir el numero 42 (number)
var numeroejercicio= 42
console.log (typeof numeroejercicio)

// Imprimir "Veinticinco" (String)
var characterdeejercicio= "Veinticinco"
console.log (typeof characterdeejercicio)

//Imprimir "-666" (number)
var numeronegativo = -666
console.log (typeof numeronegativo)

//imprimir "true" (boolean)
var booleanejercicio = true
console.log (typeof booleanejercicio)

//imprimir "0" (number)
var cero = 0
console.log (typeof cero)

//imprimir "nuul" 
var vacioejercicio=null

//imprimir undefined
var variableindefinida
console.log (typeof variableindefinida)

//imprimir falso 
var falsoejercicio= false
console.log (typeof falsoejercicio)






