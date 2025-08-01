class Producto {
    constructor(nombre, precio, categoria){
        this.nombre = nombre 
        this.precio = precio
        this.categoria = categoria
    }

    mostrarInfo (){
        //Las comillas invertidas (``) ayudan a implementar la sintaxis template string
        //Este tipo de cadenas de texto me permiten enbeber cadenas de caracteres con variables 
        //Para agregar una variable a la cadena de texto usamos la sintaxis ${nombre de la variable}
    return `Producto: ${this.nombre} | Categoría:  ${this.categoria} |  ${this.precio} `
    }

}

class ProductoConDescuento extends Producto {
    constructor(nombre, precio, categoria, descuento){
        super (nombre, precio, categoria, descuento)
        this.descuento = descuento
    }

    CalcularPrecioFinal() {
        return this.precio - (this.precio * this.descuento / 100)
    }

    //sobreescritura de metodos: Podemos sobreescribir el método mostarInfo de la clase padre para ajustar la acción
    //del metodo a lo que la clase hija necesita

    mostrarInfo(){
        return `Producto: ${this.nombre} | Categoría:  ${this.categoria} | Precio original:  $
        ${this.precio} |Precio con descuento: (%${this.descuento}): $${this.CalcularPrecioFinal()}`
    }
}


let refri = new Producto ("Refrigerador", 12000, "Electronica ")
console.log (refri.mostrarInfo());

let termo = new ProductoConDescuento ("Termo 13 oz", 700 , "cocina", 20);
console.log (termo.mostrarInfo());


//////////////////////Capturamos el formulario del DOM///////////////////////

const formulario = document.getElementById("product-form")
const listaProductos = document.getElementById("lista-productos")




//.addEventListener es un metodo que me ayuda a escucahr cuando se dispara un evento en particular
//(onClicck, onSubmit, etc)
//Este metodo recibe como parametros como valores:
//El primer atributo es el nombre del evento que tiene que escuchar(click, submit etc..)
//El segundo atrubuto: funcion que se va a ejecutar al escuchar el evento

formulario.addEventListener("submit", function (event){
    event.preventDefault() //evita que se envie el formulario y por tanto que se refresque la pantalla 
    console.log (event);

    //obtener los valores del formulario
    const nombre = document.getElementById("nombre").value
    const precio = parseFloat (document.getElementById("precio").value)
    const categoria = document.getElementById("categoria").value
    const descuento = parseFloat (document.getElementById("descuento").value)

    //crear un elemento de lista y agregarlo al DOM 
    const item = document.createElement ("li")

    let nuevoProducto;
    if ( descuento > 0 ){
        nuevoProducto = new ProductoConDescuento (nombre, precio, categoria, descuento);
        //Le asigno una clase al elemento lista que acabo de crear con el valor de "descuento"
        item.classList.add("descuento");
    }
    else {
        nuevoProducto= new Producto (nombre, precio, categoria)
    }

    //despliego la información de l producto en el html
    //Agrego el elemento de lista que cree en el contenedor ul que es la lista de los productos
    item.textContent = nuevoProducto.mostrarInfo()
    listaProductos.appendChild(item)
    formulario.reset ()
})
