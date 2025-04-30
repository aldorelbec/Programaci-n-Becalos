//Cada libro debe ser un objeto con las siguientes propiedades: titulo: (string) el título del libro, autor: (string) el autor del libro, anio: (number) el año de publicación, estado: (string) el estado del libro, que puede ser 'disponible' o 'prestado'.
//También debe tener un método describirLibro: (method) método para imprimir la información básica del libro. Algo como 'Libro titulado [titulo], escrito por [autor] en el año [anio], el estado es: [estado].'
//Opcional: agregar una propiedad que contenga la lista de capítulos del libro y métodos que permitan agregar y eliminar capítulos del libro.
class Libro {
    constructor (titulo,autor,año, estado) {
        this.titulo = titulo
        this.autor = autor
        this.año = año
        this.estado = estado
    }
    describirLibro (){
        console.log ("Este libro lleva por titulo: ", this.titulo, "Esta escrito por: ", this.autor," es del año: ", this.año, "actualmente esta: ", estado )
    }
    
}

let libro1 = new Libro ("El amor en los tiempos del cólera", "Gabriel García Marquez", 1985, "Disponible :) ")
console.log (libro1)
libro1.describirLibro()










class Auto {//crear clase 
    constructor (modelo,marca,año,color,cilindros) { //atributos
        
        this.modelo = modelo
        this.marca = marca
        this.año = año
        this.color = color
        this.cilindros = cilindros
    }
    //metodos
    fichatecnica () {
        console.log ("Ficha tecnica del auto:","\nModelo: ", this.modelo,"\nMarca: ", this.marca, "\nAño: ", this.año, "\nColor: ", this.color, "\nCilindraje; ", this.cilindros);
    }
}
let auto = new Auto ("Onix", "chevrolet",2023,"plateado", 3 )
console.log (auto)
auto.fichatecnica()