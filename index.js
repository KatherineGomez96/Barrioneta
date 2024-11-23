const publicaciones = [
    {
        imagen: "amarre.jpg",
        perfil: "/img/anteojos.jpg",
        nombre: "Tu Brujitx",
    },
    {
        imagen: "piercing.jpg",
        perfil: "/img/barbie.jpg",
        nombre: "Cuervo Sad",
    },
    {
        imagen: "señorrrr.jpg",
        perfil: "/img/señorOrejas.jpg",
        nombre: "Raúl Robales",
    },
    {
        imagen: "Marley.jpg",
        perfil: "/img/yendoMarley.jpg",
        nombre: "Universitaria",
    },
    {
        imagen: "yastin.jpg",
        perfil: "/img/spiderPink.jpg",
        nombre: "Umberto Primo",
    },
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
