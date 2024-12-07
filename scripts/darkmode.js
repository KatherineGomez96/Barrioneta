//Dark mode

const toggleButtonMedia = document.getElementById('toggleButtonMedia');
const toggleButton = document.getElementById('toggleButton');

const handleThemeToggle = () => {
    const isActive = toggleButton.classList.contains('active') || toggleButtonMedia.classList.contains('active');
    
    if (toggleButton.classList.contains('active')) {
        toggleButton.classList.toggle('active');
        toggleButtonMedia.classList.toggle('active');
    } else {
        toggleButtonMedia.classList.toggle('active');
        toggleButton.classList.toggle('active');
    }

    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-bs-theme', newTheme);

    const header = document.getElementById('header');
    const mobileMenu = document.getElementById('mobileMenu');
    const children = sidebar.querySelectorAll('.nav-link');
    const perfilText = sidebar.querySelectorAll('.perfil-menu p');
    const portfolios = document.querySelectorAll('.portfolio');

    if (newTheme === 'dark') {
        toggleButton.querySelector('.circle').innerHTML = '<i class="bi bi-moon"></i>';
        toggleButtonMedia.querySelector('.circleMedia').innerHTML = '<i class="bi bi-moon"></i>';
        
        header.classList.remove('bg-light');
        header.classList.add('bg-secondary');

        mobileMenu.classList.remove('bg-light');
        mobileMenu.classList.add('bg-secondary');

        sidebar.classList.remove('bg-light');
        sidebar.classList.add('bg-secondary');

        children.forEach((child) => {
            child.style.color = 'white';
        });

        perfilText.forEach((text) => {
            text.style.color = 'white';
        });

        portfolios.forEach((item) => {
            item.classList.remove('bg-light');
            item.classList.add('bg-secondary');
        });

    } else {
        toggleButton.querySelector('.circle').innerHTML = '<i class="bi bi-sun"></i>';
        toggleButtonMedia.querySelector('.circleMedia').innerHTML = '<i class="bi bi-sun"></i>';
        
        header.classList.remove('bg-secondary');
        header.classList.add('bg-light');

        mobileMenu.classList.remove('bg-secondary');
        mobileMenu.classList.add('bg-light');

        sidebar.classList.remove('bg-secondary');
        sidebar.classList.add('bg-light');

        children.forEach((child) => {
            child.style.color = 'black';
        });

        perfilText.forEach((text) => {
            text.style.color = 'black';
        });

        portfolios.forEach((item) => {
            item.classList.remove('bg-secondary');
            item.classList.add('bg-light');
        });
    }
};

toggleButton.addEventListener('click', handleThemeToggle);
toggleButtonMedia.addEventListener('click', handleThemeToggle);