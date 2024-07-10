function toggleDarkMode() {
    const body = document.body;
    body.classList.toggle('dark-mode');
}

function toggleSettings() {
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.style.display = settingsMenu.style.display === 'block' ? 'none' : 'block';
}

function showLoginModal() {
    alert('Modal de inicio de sesión');
}

function showRegisterModal() {
    alert('Modal de registro');
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('open');
}

function toggleSection(sectionId) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';
        } else {
            section.style.display = 'none';
        }
    });
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.remove('open');
}

function toggleSearch() {
    const searchInput = document.getElementById('searchInput');
    searchInput.style.display = searchInput.style.display === 'none' ? 'block' : 'none';
}
