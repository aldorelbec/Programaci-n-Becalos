//ejemplo 1 contador
let contador = 1;

while ( contador <=5) {
    console.log ("contador esta en el ciclo:", contador);
    contador++ // <- es equivalente a contador = contador +1
}


//Ejemplo 2 Contador en reversa 

let cuentaregresiva = 10

while ( cuentaregresiva >=0 ) {
    console.log ("cuenta regresiva", cuentaregresiva);
    cuentaregresiva --
}

//ejemplo 3: solicitar confirmación hasta que el usuario acepte

let confirmacion = true

while (confirmacion) {
    //otras tareas
    confirmacion = confirm ("Quiere realizar otra operación?")
console.log ("confirmación recibida", confirmacion);
}