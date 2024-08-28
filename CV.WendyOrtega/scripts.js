// Agregar una animación al botón de descarga del CV
document.querySelector('.btn').addEventListener('click', function() {
    this.classList.add('btn-clicked');
    setTimeout(() => {
        this.classList.remove('btn-clicked');
    }, 200);
});
