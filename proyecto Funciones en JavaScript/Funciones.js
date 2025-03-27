//Define una función `agregarLibro(titulo)`, que añada un libro a un array llamado `librosLeidos`.
let librosLeidos = []
function agregarLibro (titulo){
    librosLeidos.push (titulo);
}
agregarLibro ("Padre rico, padre pobre")
agregarLibro ("cien años de soledad")
agregarLibro ("Los Bonsais Gigantes")
agregarLibro ("Habitos atomicos")
agregarLibro ("Como ganar amigos e influir en las personas")
agregarLibro ("veintemil leguas de viaje submarino")



//Define una función `mostrarLibrosLeidos()`, que imprima todos los libros que has leído.

function mostrarLibrosLeidos (){
    if (librosLeidos === 0 ){
        console.log ("aún no has leido ningún libro");
    }
    else{
        console.log ("Libros que has leído: ");
        for(i= 0; i < librosLeidos.length ; i++ ){
            console.log ("-", librosLeidos[i])
        }
    }
}
mostrarLibrosLeidos()