function cerrarSesion() {
  localStorage.removeItem('logueado');
  localStorage.removeItem('usuario');
  window.location.href = "login.html";
}
