/*  Deferencias entre Var, let y const */

///////////////////////////////////////////////////

//Var: la podemos reasignar y redeclarar el valor 
var nombre ="Luis" //Declaramos la variable y le asignamos un valor
nombre = "Pedro"// Reasignamos el valor de la variable
var nombre = "sheyla"// redeclaro la variable de nuevo sin problemas

console.log (nombre);// imprimimos y se va a reflejar el ultimo valor asignado

///////////////////////////////////////////////////

//let: se puede reasignar, pero no se puede redeclarar en el mismo ambito

let apellido = "Aguilar" //Declaramos la variable
apellido = "Corona" // Reasignamos valor
//let apellido = "Parra" // Da error porque no se puede redeclarar con let 


///////////////////////////////////////////////////
//const: Esta no se puede reasinar ni redeclarar

const gravedad = "9.81 m/s2"
//const gravedad = "10.1" no se puede reasignar constantes


