//DON CARRUSEL

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

    const username = storyElement.querySelector("p").innerText; 
    markAsViewed(username);
}

// Función para cerrar el popup
function closeViewer() {
    const storyViewer = document.getElementById("story-viewer");
    storyViewer.classList.remove("visible");
    storyViewer.classList.add("hidden");
}

// Función para marcar una historia como vista
function markAsViewed(username) {
    let viewedStories = JSON.parse(localStorage.getItem("viewedStories")) || [];

    if (!viewedStories.includes(username)) {
        viewedStories.push(username);
        localStorage.setItem("viewedStories", JSON.stringify(viewedStories));
    }

    updateStoryStyles();
}

// Función para marcar la historia de Pepita como no vista, para que se vea así ajá. 
function resetFirstStory() {
    const firstStory = document.querySelector(".story:first-child");
    const username = firstStory.querySelector("p").innerText;

    // Removerla de la lista de vistas en el localStorage, pero solo la de pepita alv.
    let viewedStories = JSON.parse(localStorage.getItem("viewedStories")) || [];
    viewedStories = viewedStories.filter((story) => story !== username);
    localStorage.setItem("viewedStories", JSON.stringify(viewedStories));

    // Actualizar visualmente
    updateStoryStyles();
}

// Función para actualizar el estado visual de las historias
function updateStoryStyles() {
    const stories = document.querySelectorAll(".story");

    let viewedStories = JSON.parse(localStorage.getItem("viewedStories")) || [];

    stories.forEach((story) => {
        const username = story.querySelector("p").innerText;

        if (viewedStories.includes(username)) {
            story.setAttribute("data-viewed", "true");
        } else {
            story.setAttribute("data-viewed", "false");
        }
    });
}

// Inicializar las historias al cargar la página
document.addEventListener("DOMContentLoaded", () => {
    updateStoryStyles();

    // Restablecer automáticamente la primera historia como no vista cada 10 segundos porque podemos.
    setInterval(resetFirstStory, 10000);
});
