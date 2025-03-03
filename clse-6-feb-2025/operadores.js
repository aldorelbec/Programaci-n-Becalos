// OPERADORES EN JS

//Operadores Matemáticos:

let suma = 5+3
let resta = 5-4
let multiplicacion = 5*9
let division = 80/8
let modulo = 10 % 3  //esta operacion es el residuo de 10/3 = 1
let exponente = 2 ** 3 //2 al cubo

console.log (suma, resta, division, multiplicacion, modulo, exponente);

/* Jerarquia de operadores
1. parentesis ()
2. exponentes **
3. Multiplicacion * y division /
4. suma y resta +-
*/

let operacion = 10 + 5 * 2 //primero la multiplicacion
let operacion2 = (10+5)*2 // primero lo que esta en el parentesis

console.log (operacion, operacion2);

//Operadores de comparación 
let mayorque = 10>5 // mayor que 
let menorque = 6<10 // menor que
let igual = 5 == 5 // compara el VALOR no importando el tipo de variable 
let estrictamente_igual = 5 === "5" // compara valor y tipo (da false) compara 5 como numero y 5 como string no son iguales por lo tanto da false 
let diferente = 5 != "5" // esto da falso porque son iguales aunque uno sea cadena y otro numero son el mismo valor por tanto da falso
let estrictamentediferente = 5 !== "5" //esto da verdadero por que en realidad si son diferentes, uno es cadena y otro es numero

//Operadores logicos

let and = (10>5) && (3<8)// para que de verdadero las dos condiciones deben ser verdaderas 
let or = (10>5) || (3<8) // para que de verdadero una de las condiciones debe ser verdadera 
let not= !(10>5) // la condicion es verdadera pero co not se invierte y da falso

/* Jerarquia de operadores logicos
1. NOT (!)
2. AND (&&)
3. OR (||)
 */

//Ejemplo 
var logica1 = true || false && false /* primero se opera 
AND falso por falso da falso y luego se suma true y da verdadero*/
var logica2 = (true || false) && false // se evalua primero lo del parentesis 