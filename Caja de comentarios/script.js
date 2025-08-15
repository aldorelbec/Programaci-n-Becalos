const form = document.getElementById('comentarioForm');
const input = document.getElementById('comentarioInput');
const lista = document.getElementById('listaComentarios');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const texto = input.value.trim();
  if (texto === '') return;

  const comentarioDiv = document.createElement('div');
  comentarioDiv.className = 'comentario';

  const ahora = new Date();
  const fechaHora = ahora.toLocaleString();

  comentarioDiv.innerHTML = `
    <p>${texto}</p>
    <time>Publicado el: ${fechaHora}</time>
    <br>
    <button class="eliminar-btn">Eliminar</button>
  `;

  comentarioDiv.querySelector('.eliminar-btn').addEventListener('click', function() {
    comentarioDiv.remove();
  });

  lista.prepend(comentarioDiv);
  input.value = '';
});