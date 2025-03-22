//contador simple con for 
for (let contador =1; contador <=5; contador++) {
    console.log ("(FOR) El contador esta en el ciclo:", contador);
}

//ejemplo 2: contador en reversa con for

for (let contadorinverso =10; contadorinverso >0; contadorinverso --){
    console.log ("(For) El contador esta en el ciclo:", contadorinverso);
    
} 

//Ejemplo 3 numeros impares

for(let impar = 1; impar<=10; impar += 2){

    console.log ( "Numero impar: ", impar);

}

for (let i = 1; i<=10; i++){
    if (i % 2 === 0){
        continue; // continue nos ayuda a saltarnos una operación 
    }
    console.log(i);

}

//Sumar pares del 1 al 20 
let suma = 0
for (let par= 0; par <= 20; par += 2){
    suma += par;
}
console.log ("Suma de numeros pares hasta el 20: ", suma) ;
