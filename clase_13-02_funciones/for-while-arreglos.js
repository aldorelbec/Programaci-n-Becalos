//Combinando while y for con arreglos

// Ejemplo 1 Recorrer un arreglo con while
let fruta = ["Manzana", "Uva", "Fresa","Pera"]
let index = 0 
while (index < fruta.length){
    console.log ("Fruta: ", index, ":" , fruta [index])
    index ++
}

//Ejemplo 2: Recorrer un arreglo con for:

for(let index = 0; index < fruta.length; index ++ ){
    console.log ("Fruta con for", index, ":", fruta [index])
}
 
