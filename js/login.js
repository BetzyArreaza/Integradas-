document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const usuario = document.getElementById('usuario').value;
    const pass = document.getElementById('pass').value;

    if (usuario === 'admin' && pass === '12345') {
        localStorage.setItem('logueado', 'true');
        window.location.href = '../../index.html'; // Ajusta según tu estructura
    } else {
        document.getElementById('mensajeLogin').textContent = "Usuario o contraseña incorrectos.";
    }
});