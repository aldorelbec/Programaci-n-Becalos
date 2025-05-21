

class Persona {
    constructor (nombre, edad){
        this.nombre = nombre
        this.edad = edad
    } 
//Metodos
saludar (nombrePersona){
    console.log ("Hola, ", nombrePersona );
}
}

let persona1 = new Persona ("Alejandro", 23)
console.log ( persona1)

//Crear una subclase

class Estudiante extends Persona{
    constructor(nombre, edad, materias){
        //Para heredar los metodos de la clase persona 
        //se debe llamar primero al superconstructor
        super (nombre, edad)
        this.materias = materias
    }

    obtenerMaterias(){
        return this.materias
    }
}


let estudiante1 = new Estudiante ("Sheyla", 24, "Matemáticas")
console.log (estudiante1);
console.log (estudiante1.obtenerMaterias());

let estudiante2 = new Estudiante ("Luis", 26,[ "Matematicas", "Biología"] )
console.log (estudiante2);

class EstudianteMusica extends Estudiante {
    constructor (nombre, edad, materias, instrumento){
        super (nombre, edad, materias)
    this.instrumento = instrumento 

    }
    

}

let estudianteMusica = new EstudianteMusica ("Juan", 24, ["Teoria musical", "Artes"], "Guitarra");
console.log (estudianteMusica);
estudianteMusica.saludar ("Felipe")





