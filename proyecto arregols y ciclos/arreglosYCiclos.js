//Proyecto Arreglos y ciclos

//Usar un ciclo while para recorrer el arreglo y contar las frutas.
frutas = ["Mango", "Pera", "Mango", "Pera","Aguacate", "Aguacate", "Platano", "Aguacate", "Lichi", "Coco", "Kiwi", "Sandia"]
index = 0
while (index < frutas.length){
    console.log("Fruta ", index,":", frutas[index] )
    index ++
}

//Usar un ciclo for para recorrer el arreglo y contar las frutas.

for (let i = 0; i < frutas.length; i ++ ){
    console.log ("Futa con for: ", i , ":", frutas[i])
}

//Imprimir en la consola la cantidad de cada tipo de fruta.
let cantidadDeFrutas = {}
let i = 0

while (i < frutas.length){
    let fruta = frutas [i]
    if (cantidadDeFrutas [fruta]){
        cantidadDeFrutas[fruta] ++;
    }
    else {
        cantidadDeFrutas [fruta] = 1 ;
    }
i ++
}
console.log (cantidadDeFrutas);


