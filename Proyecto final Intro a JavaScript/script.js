const comentario = document.getElementById ("commentForm")
const agregarcomentario =document.getElementById("commentInput")
const lista = document.getElementById("commentsList")


comentario.addEventListener ('submit', function (enviar) {
enviar.preventDefault()

    
const text = agregarcomentario.value.trim();
    if (text === '') return;

    
const nuevoComentario = document.createElement('div');
nuevoComentario.classList.add('comment');

 const now = new Date();
  const tiempoEstampa = now.toLocaleString();

   nuevoComentario.innerHTML = `
    <p>${text}</p>
    <small>Publicado el ${tiempoEstampa}</small>
    <button class="delete">Eliminar</button>
  `;

   nuevoComentario.querySelector('.delete').addEventListener('click', () => {
    nuevoComentario.remove();
  });

  lista.prepend(nuevoComentario);
  agregarcomentario.value = '';
})






    