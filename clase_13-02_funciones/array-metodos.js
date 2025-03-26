let frutas = ["Manzanas"] //creamos un arreglo
let otrasfrutas= ["uva","Aguacate"]
//Metodos comunes

// .push (nuevo elemento) para agregar un elemento al final del arreglo

frutas.push( "pera")
frutas.push("guayaba")
frutas.push(otrasfrutas) //lenght= 4 
console.log("Despues de push: ", frutas)

// .pop() elimina el ultimo elemento del arreglo
console.log(frutas.pop())
console.log("Despues del pop: ",frutas)

// .unshift (nuevo elemento) agrega un nuevo elemento al inicio del array
frutas.unshift("melón")
console.log("Despues de unshift", frutas)

// .shift () Elimina el Primer elemento

console.log(frutas.shift()) //Elimina el primer elemento
console.log("despues de shift", frutas)

// .map () crea un nuevo arreglo transformando cada elemento de mi arreglo
/*Este metodo es para aplicar ciertos parametros que tu desees
aplicado a todo el arreglo.

Ejemplo 1: Multiplicar cada elemento del arreglo por 2
*/
let numeros = [1,2,3]

let numerospordos = numeros.map( (numero)=> numero * 2 )

console.log("Numeros multiplicados por dos", numerospordos)

//Ejemplo 2: Convertir el arreglo de frutas en mayusculas

let frutasenMayusculas = frutas.map ( (frutas) => frutas.toUpperCase() ) //toUpercase convierte caracteres en mayusculas
console.log("Frutas en mayusculas aplicando el metodo toUperCase",frutasenMayusculas) 
//nota: para convertir en minusculas se usa el metodo toLowerCase()

let letrasEnMinusculas = frutasenMayusculas.map ((frutasenMayusculas) => frutasenMayusculas.toLowerCase ())
console.log("Despues de aplicar el metodo toLowerCase", letrasEnMinusculas)

// .sort () Ordena alfabeticamente los elementos del array
/*
ordena los elementos alfabeticamente o numericamente si se le 
proporciona una función
*/
let verduras = ["Espinaca", "Zanahoria", "Calabaza"]

console.log("aplicando .sort",verduras.sort()) // sino se pone ninguna función se ordena automaticamente en orden alfabetico
console.log("Ordenadas de Z-A: ",verduras.reverse()) //Revertimos los elementos del arreglo
//sort con numeros 
let numerosOrdenados = [11,2,9,98,21,6,55]
console.log("aplicando .sort a numeros random de un array", numerosOrdenados.sort())

let numerosOrdenadosCorrectamente = [11,2,9,98,21,6,55]
console.log ("Numeros con .sort pero aplicando una función que los ordene", numerosOrdenadosCorrectamente.sort((a,b) => a-b))
/* la función que tenemos va a comparar 2 valores a y b
al restar los 2 valores a y b, si a-b da negativo quiere decir que a es mas pequeño que b entonces  .sort lo acomoda antes del numero grande (b),
si al restar a-b y da positivo quiere decir que a es mayor y .sort aomoda a despues de b
si a-b da 0 es decir son iguales, .sort no los cambia de lugar
se hace la comparación de todos los numeros hasta que esten ordenados
*/

let numerosdeMayoraMenor = [11,2,9,98,21,6,55]
console.log("Ordenados de mayor a menor: ", numerosdeMayoraMenor.sort((a,b) => b-a))

