
document.addEventListener('DOMContentLoaded', function() {
    // activar animaciones sutiles después de cargar
    document.body.classList.add('loaded');
});

var btn = document.getElementById('btnClick');
btn.addEventListener('click', function() {
    document.getElementById('output').textContent = '¡Botón clicado!';
});

// Animación de click para todos los botones (incluye el submit convertido)
document.addEventListener('click', function(e) {
    var el = e.target;
    if (el.tagName === 'BUTTON') {
        el.classList.add('btn--clicked');
        setTimeout(function(){ el.classList.remove('btn--clicked'); }, 220);
    }
});

//Este es un metodo
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email;
});
