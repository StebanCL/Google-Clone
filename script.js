// --- 1. SELECCIÓN DE ELEMENTOS ---
const appsBtn = document.getElementById('appsBtn');
const appsDropdown = document.getElementById('appsDropdown');
const profileBtn = document.getElementById('profileBtn');
const profileDropdown = document.getElementById('profileDropdown');

// --- 2. LÓGICA DE APERTURA/CIERRE ---

function closeAllMenus() {
    appsDropdown.classList.remove('show');
    profileDropdown.classList.remove('show');
}

// Click en Apps
appsBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = appsDropdown.classList.contains('show');
    closeAllMenus();
    if (!isVisible) appsDropdown.classList.add('show');
});

// Click en Perfil
profileBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isVisible = profileDropdown.classList.contains('show');
    closeAllMenus();
    if (!isVisible) profileDropdown.classList.add('show');
});

// Cerrar al hacer click fuera
document.addEventListener('click', (e) => {
    if (!appsDropdown.contains(e.target) && !appsBtn.contains(e.target)) {
        appsDropdown.classList.remove('show');
    }
    if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
        profileDropdown.classList.remove('show');
    }
});

// --- 3. CIERRE AL HACER CLICK FUERA ---
document.addEventListener('click', (e) => {
    // Si el click no es dentro de los menús ni en los botones, cierra todo
    if (!appsDropdown.contains(e.target) && !appsBtn.contains(e.target)) {
        appsDropdown.style.display = 'none';
    }
    if (!profileDropdown.contains(e.target) && !profileBtn.contains(e.target)) {
        profileDropdown.style.display = 'none';
    }
});

// Evitar que el menú se cierre si haces click ADENTRO de él
appsDropdown.addEventListener('click', (e) => e.stopPropagation());
profileDropdown.addEventListener('click', (e) => e.stopPropagation());

// --- 4. BÚSQUEDA ---
function search() {
    const query = searchInput.value.trim();
    if (query) {
        window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    }
}

// Enter en el buscador
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') search();
});

console.log("Sistema de clicks restaurado, juan esteban.");

