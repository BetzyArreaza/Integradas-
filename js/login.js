document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const pass = document.getElementById('pass').value;

  const usuarios = [
    { user: 'admin', pass: '12345' },
    { user: 'cliente1', pass: 'italia2025' },
    { user: 'chef', pass: 'pasta123' }
  ];

  const valido = usuarios.find(u => u.user === usuario && u.pass === pass);

  if (valido) {
    localStorage.setItem('logueado', 'true');
    localStorage.setItem('usuario', usuario);
    window.location.href = 'menu.html';
  } else {
    document.getElementById('mensajeLogin').textContent = "Usuario o contraseña incorrectos.";
  }
});
