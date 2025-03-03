// Estructura de control IF en Java Escript 

// Permite ejecutar un bloque de codigo si se cumple una condición
//Puede usarse con operadores logicos de comparación y logicos

let edad = 18 
let tieneINE = true
// Condición simple ///////////////////////////
if (edad >= 18 && tieneINE){//si tiene 18 o mas y tiene ine se ejecuta lo siguiente
    console.log ("Tienes los requisitos para votar")
}
console.log ("Fin de la ejecucion");
////////////////////////////////////////////////

//Condición con else //////////////////////////
if (edad >= 18 && tieneINE) {
    console.log ("Tienes los requisitos para votar")
}
else {
    console.log ("Estas chamaco");
}

//Condicion con else if/////////////////////////
if (edad < 13) {
    console.log ("Eres un niño")
}
else if (edad < 18 ){
    console.log ("Eres un adolecente");
}

else {
    console.log ("Eres un adulto")
}

////////////////////////////////
let tieneentrada = false
if (!tieneentrada) {
    console.log ("Debes comprar una entrada")
}
console.log ("Fin de la ejecucion");