let carrito = [];
let total = 0;

function agregarAlCarrito(boton) {
  const plato = boton.parentElement;
  const nombre = plato.getAttribute('data-nombre');
  const precio = parseFloat(plato.getAttribute('data-precio'));

  // Agregar al carrito
  carrito.push({ nombre, precio });
  total += precio;

  actualizarCarrito();
}

function actualizarCarrito() {
  const lista = document.getElementById('lista-carrito');
  const totalElemento = document.getElementById('total');

  // Limpiar lista
  lista.innerHTML = '';

  // Mostrar ítems
  carrito.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - Q${item.precio}`;
    lista.appendChild(li);
  });

  // Mostrar total
  totalElemento.textContent = total.toFixed(2);
}
