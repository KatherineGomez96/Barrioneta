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
        imagen: "assets/imgCarrusel/parciales.jpg",
        perfil: "assets/imgPerfil/anteojos.jpg",
        nombre: "Letuu"
    },
    {
        imagen: "assets/imgCarrusel/asado.jpg",
        perfil: "assets/imgPerfil/barbie.jpg",
        nombre: "Joac0x"
    },
    {
        imagen: "assets/imgCarrusel/mateEnPlaza.jpg",
        perfil: "assets/imgPerfil/señorOrejas.jpg",
        nombre: "xKarenx"
    },
    {
        imagen: "assets/imgCarrusel/Viajecito.jpg",
        perfil: "assets/imgPerfil/yendoMarley.jpg",
        nombre: "TomiiLP"
    },
    {
        imagen: "assets/imgCarrusel/Uno.jpg",
        perfil: "assets/imgPerfil/spiderPink.jpg",
        nombre: "R0CHI"
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
                <!--ICONOS-->
                <div class="action-icons">
                <!-- ME GUSTA: CORAZÓN -->
                <div class="like-button" onclick="toggleLike(this)">
                    <i class="bi bi-heart"></i>
                    <span class="like-count">${Math.floor(Math.random() * 500)}</span>
                </div>
                <!-- COMENTARIOS: UN GLOBO -->
                <div class="comment-button">
                    <i class="bi bi-chat"></i>
                    <span>${Math.floor(Math.random() * 20) + 1}</span>
                </div>
                <!-- AVIÓN: ENVIAR -->
                <div class="send-button" onclick="toggleSend(this)">
                    <i class="bi bi-send"></i>
                    <span>${Math.floor(Math.random() * 15) + 1}</span>
                </div>    
            </div>    
        </div>
    </div>
    `;
    carouselContent.innerHTML += slide;
});

// -------------------------------- FUNCIONES DE LOS BOTONES DEL CARRUSEL ---------------------------------------
// FUNCIÓN DEL LIKE Y LOS CONTADORES RANDOMS
function toggleLike(button) {
    const icon = button.querySelector("i");
    const likeCount = button.querySelector(".like-count");

    button.classList.toggle("liked");
    const currentLikes = parseInt(likeCount.textContent);

    if (button.classList.contains("liked")) {
        icon.classList.remove("bi-heart");
        icon.classList.add("bi-heart-fill");
        likeCount.textContent = currentLikes + 1; // Incrementa el contador
    } else {
        icon.classList.remove("bi-heart-fill");
        icon.classList.add("bi-heart");
        likeCount.textContent = currentLikes - 1; // Decrementa el contador
    }
}
// FUNCION DE ICONO ENVIAR QUE CAMBIE DE COLOR AL CLICKEAR
function toggleSend(button) {
    button.classList.toggle("send");
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
