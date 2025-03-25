document.addEventListener('DOMContentLoaded', function() {
    // Toggle para la sección de conocimientos
    const toggleConocimientos = document.getElementById('toggle-conocimientos');
    const conocimientosContent = document.getElementById('conocimientos-content');
    
    toggleConocimientos.addEventListener('click', function() {
        if (conocimientosContent.style.display === 'none') {
            conocimientosContent.style.display = 'block';
            toggleConocimientos.textContent = 'Seccion-Conocimiento ▼';
        } else {
            conocimientosContent.style.display = 'none';
            toggleConocimientos.textContent = 'Seccion-Conocimiento ▶';
        }
    });
    
    // Inicializar con el símbolo correcto
    toggleConocimientos.textContent = 'Seccion-Conocimiento ▶';
    
    // Toggle para la sección de habilidades
    const toggleHabilidad = document.getElementById('toggle-habilidad');
    const habilidadContent = document.getElementById('habilidad-content');
    
    toggleHabilidad.addEventListener('click', function() {
        if (habilidadContent.style.display === 'none') {
            habilidadContent.style.display = 'block';
            toggleHabilidad.textContent = 'Seccion-Habilidades ▼';
        } else {
            habilidadContent.style.display = 'none';
            toggleHabilidad.textContent = 'Seccion-Habilidades ▶';
        }
    });
    
    // Inicializar con el símbolo correcto
    toggleHabilidad.textContent = 'Seccion-Habilidades ▶';
});
