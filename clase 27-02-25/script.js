const buscador =document.getElementById ("buscador")
const listaFrutas =document.getElementById("lista")

buscador.addEventListener("input", ()=>{
    const buscador = document.getElementById("buscador")
    let itemsFrutas = listaFrutas.getElementsByTagName ("li")
    let texto = buscador.value.toLowerCase()
    
    console.log (itemsFrutas)
    console.log(texto)

    for (let i = 0; i< itemsFrutas.length; i++){
        let textoFruta = itemsFrutas [i].textContent.toLowerCase()
        //includes () se usa para verificar si una cadena contiene una subcadena 

        if (textoFruta.includes(texto)){ //con el metodo startswhit() funciona similar pero solo muestra la palabra que empieza con una letra especifica
            //si la palabre que estoy buscando esta incluida en el nombre de la fruta, entonces 
            //la fruta se despliega en la pantalla
            itemsFrutas[i].style.display = "block"
        }
        else 
        {
            //si la fruta no coinside no se despliega en la pantalla
            itemsFrutas[i].style.display ="none"
        }
    }
})