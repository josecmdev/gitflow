
document.addEventListener('DOMContentLoaded', function() {
    // activar animaciones sutiles después de cargar
    document.body.classList.add('loaded');
});

var btn = document.getElementById('btnClick');
btn.addEventListener('click', function() {
    document.getElementById('output').textContent = '¡Botón clicado!';
    btn.classList.add('btn--clicked');
    setTimeout(function(){ btn.classList.remove('btn--clicked'); }, 220);
});

//Este es un metodo
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    document.getElementById('formOutput').textContent = 'Nombre: ' + name + ', Email: ' + email;
});
