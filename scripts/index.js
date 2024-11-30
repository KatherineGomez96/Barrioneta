// Verificar si el usuario está en sesión
const user = JSON.parse(localStorage.getItem("barrioneta"));

if (!user || !user.loggedIn) { 

  window.location.href = "logIn.html";
  
}

// cerrar sesión
function logout() {
  
  localStorage.removeItem("barrioneta");

  window.location.href = "logIn.html";
}

//-------------------Kathy estuvo aqui--------------------

//Dark mode
const themeToggle = document.getElementById('theme-toggle');
const sidebar = document.getElementById('sidebar');

themeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-bs-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-bs-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? 'Modo claro' : 'Modo oscuro';


    if (newTheme === 'dark') {
        sidebar.classList.remove('bg-light');
        sidebar.classList.add('bg-secondary');

        const children = sidebar.querySelectorAll('.nav-link');
        children.forEach((child, index) => {
            if (index < children.length) {
                child.style.color = 'white';
            }
        });

        const perfilText = sidebar.querySelectorAll('.perfil-menu p');
        perfilText.forEach((text) => {
            text.style.color = 'white';
        });

    } else {
        sidebar.classList.remove('bg-secondary');
        sidebar.classList.add('bg-light');

        const children = sidebar.querySelectorAll('.nav-link');
        children.forEach((child, index) => {
            if (index < children.length) {
                child.style.color = 'black';
            }
        });

        const perfilText = sidebar.querySelectorAll('.perfil-menu p');
        perfilText.forEach((text) => {
            text.style.color = 'black';
        });
    }
});

const publicaciones = [
    {
        imagen: "/assets/imgCarrusel/amarre.jpg",
        perfil: "/assets/imgPerfil/anteojos.jpg",
        nombre: "Tu Brujitx"
    },
    {
        imagen: "/assets/imgCarrusel/piercing.jpg",
        perfil: "/assets/imgPerfil/barbie.jpg",
        nombre: "Cuervo Sad"
    },
    {
        imagen: "/assets/imgCarrusel/señorrrr.jpg",
        perfil: "/assets/imgPerfil/señorOrejas.jpg",
        nombre: "Raúl Robales"
    },
    {
        imagen: "/assets/imgCarrusel/Marley.jpg",
        perfil: "/assets/imgPerfil/yendoMarley.jpg",
        nombre: "Universitaria"
    },
    {
        imagen: "/assets/imgCarrusel/yastin.jpg",
        perfil: "/assets/imgPerfil/spiderPink.jpg",
        nombre: "Umberto Primo"
    }
];
 //DON CARRUSEL
const carouselContent = document.getElementById("carouselContent");

publicaciones.forEach((pub, index) => {
    const activeClass = index === 0 ? "active" : "";
    const slide = `
    <div class="carousel-item ${activeClass}">
       <div class="story-container">
        <img src="${pub.imagen}" class="story-image d-block w-100 img-fluid" alt="Imagen">
        <div class="user-actions">
            <div class="user-info">
            <img src="${pub.perfil}" class="user-profile" alt="Perfil">
            <span class="user-name">${pub.nombre}</span>
            </div>
        </div>    
       </div>
       <div class="like-button" onclick="toggleLike(this)">&#x2764;</div>
    </div>
    `;
    carouselContent.innerHTML += slide;
});

function toggleLike(button) {
    button.classList.toggle("liked");
}

// Función para mostrar una historia
function viewStory(storyElement) {
    const storyViewer = document.getElementById("story-viewer");
    const storyImage = document.getElementById("story-image");
    const storyImgSrc = storyElement.querySelector("img").src;

    storyImage.src = storyImgSrc;

    storyViewer.classList.add("visible");
    storyViewer.classList.remove("hidden");

    storyElement.dataset.viewed = "true";
}

// Función para cerrar el popup
function closeViewer() {
    const storyViewer = document.getElementById("story-viewer");
    storyViewer.classList.remove("visible");
    storyViewer.classList.add("hidden");
}


function updateStories() {
    const stories = document.querySelectorAll(".story");
    stories.forEach((story) => {
        const viewed = Math.random() > 0.5;
        story.setAttribute("data-viewed", viewed ? "true" : "false");
    });
}

setInterval(updateStories, 10000);
