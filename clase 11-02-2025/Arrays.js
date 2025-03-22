// Arreglo simple

let frutas =["uva", "Manzana", "Pera", "Mango","Fesa", "Aguacate"]
console.log ("Lista de frutas", frutas);

//Ejemplo 2 Aacceder a elementos de un arreglo
console.log ("Primera fruta:", frutas[0]);
console.log ("Segunda fruta:", frutas [1]);
//console.log ("ultima fruta:", frutas [-1]); //no tenemos elementos en la posicion -1 y va a salir undefined
console.log ("ultima fruta:", frutas [5]);
console.log ("ultima fruta usando .length: ", frutas [frutas.length-1]);//.lengt son el nuemro de elementos en el array
//Actualizar un elemento del array
frutas[4] = "Guayabas"
console.log ("Frutas actualizadas", frutas);