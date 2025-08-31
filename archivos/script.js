document.addEventListener("DOMContentLoaded", () => {

  // --- Menú responsive ---
    const toggleBtn = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');
    const links = menu.querySelectorAll('a');

    toggleBtn.addEventListener('click', () => {
        menu.classList.toggle('show');
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            menu.classList.remove('show');
        });
    });

  // --- Toggle descripción de habilidades ---
    document.querySelectorAll('.skill').forEach(skill=>{
        skill.addEventListener('click', ()=>{
            skill.classList.toggle('active');
        });
    });
});

// Validación básica del formulario
const form = document.querySelector('form.contact');

if (form) {
form.addEventListener('submit', (e) => {
    const nombre = form.querySelector('[name="nombre"]');
    const correo = form.querySelector('[name="correo"]');
    const mensaje = form.querySelector('textarea[name="mensaje"]');

    let errors = [];
    if (!nombre.value.trim()) errors.push('El nombre es obligatorio.');
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(correo.value)) errors.push('Correo no válido.');
    if (mensaje.value.trim().length < 10) errors.push('El mensaje debe tener al menos 10 caracteres.');

    if (errors.length) {
        e.preventDefault();
        alert(errors.join('\n'));
    }
});
}
