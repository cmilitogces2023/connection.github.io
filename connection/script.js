/* Capturar el botón principal y el contenedor de botones de redes sociales
const mainButton = document.getElementById('main-button');
const socialButtons = document.getElementById('social-buttons');

// Agregar evento de clic al botón principal
mainButton.addEventListener('click', () => {
    // Alternar visibilidad de los botones de redes sociales
    if (socialButtons.style.display === 'none' || socialButtons.style.display === '') {
        socialButtons.style.display = 'block';
        mainButton.textContent = 'Ocultar Redes Sociales';
    } else {
        socialButtons.style.display = 'none';
        mainButton.textContent = 'Mostrar Redes Sociales';
    }
});
*/

document.addEventListener('DOMContentLoaded', () => {
    // Seleccionar elementos del DOM
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');
    const contactForm = document.getElementById('contact-form');

    // Función para mostrar una vista específica
    function showView(viewId) {
        // Ocultar todas las vistas
        views.forEach(view => {
            view.classList.remove('active-view');
        });

        // Mostrar la vista seleccionada
        const selectedView = document.getElementById(viewId);
        if (selectedView) {
            selectedView.classList.add('active-view');
        }
    }

    // Agregar eventos de clic a los botones de navegación
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const viewId = e.target.id.replace('-btn', '-view');
            showView(viewId);
        });
    });

    // Manejador de envío de formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value;
            const email = document.getElementById('email').value;
            const mensaje = document.getElementById('mensaje').value;

            // Validación básica
            if (nombre && email && mensaje) {
                // Mostrar mensaje de éxito
                Swal.fire({
                    icon: 'success',
                    title: '¡Mensaje Enviado!',
                    text: `Gracias ${nombre}, tu mensaje ha sido enviado correctamente.`,
                    confirmButtonText: 'Aceptar'
                });

                // Resetear el formulario
                contactForm.reset();
            } else {
                // Mostrar mensaje de error si falta algún campo
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Por favor, completa todos los campos',
                    confirmButtonText: 'Aceptar'
                });
            }
        });
    }

    // Función de barra lateral (opcional, basado en tu HTML original)
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        if (sidebar) {
            sidebar.classList.toggle('-translate-x-full');
        }
    }
});

