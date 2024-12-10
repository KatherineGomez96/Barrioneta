//DON CARRUSEL

const publicaciones = [
    {
        imagen: "assets/imgCarrusel/parciales.jpg",
        perfil: "assets/imgPerfil/anteojos.jpg",
        nombre: "Letuu",
    },
    {
        imagen: "assets/imgCarrusel/asado.jpg",
        perfil: "assets/imgPerfil/barbie.jpg",
        nombre: "Joac0x",
    },
    {
        imagen: "assets/imgCarrusel/mateEnPlaza.jpg",
        perfil: "assets/imgPerfil/señorOrejas.jpg",
        nombre: "xKarenx",
    },
    {
        imagen: "assets/imgCarrusel/Viajecito.jpg",
        perfil: "assets/imgPerfil/yendoMarley.jpg",
        nombre: "TomiiLP",
    },
    {
        imagen: "assets/imgCarrusel/Uno.jpg",
        perfil: "assets/imgPerfil/spiderPink.jpg",
        nombre: "R0CHI",
    },
];

const carouselContent = document.getElementById("carouselContent");

publicaciones.forEach((pub, index) => {
    const activeClass = index === 0 ? "active" : "";
    const slide = `
    <div class="carousel-item ${activeClass}">
        <div class="story-container">
            <img src="${
                pub.imagen
            }" class="story-image d-block w-100 img-fluid" alt="Imagen">
            <div class="user-actions">
                <div class="user-info">
                <img src="${pub.perfil}" class="user-profile" alt="Perfil">
                <span class="user-name">${pub.nombre}</span>
                <!--ICONOS-->
                <div class="action-icons">
                <!-- ME GUSTA: CORAZÓN -->
                <div class="like-button" onclick="toggleLike(this)">
                    <i class="bi bi-heart"></i>
                    <span class="like-count">${Math.floor(
                        Math.random() * 500
                    )}</span>
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

// -------------------------------- HISTORIAS ---------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const storiesData = [
        {
            name: "Pepita Martinez",
            img: "https://plus.unsplash.com/premium_photo-1707816501017-b16e50fabc30?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVvcGxlJTIwc2VmaWVzfGVufDB8MXwwfHx8MA%3D%3D",
            viewed: false,
        },
        {
            name: "Maria Marta",
            img: "https://plus.unsplash.com/premium_photo-1675791188810-3a01768c1e2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Z2VudGV8ZW58MHwxfDB8fHww",
            viewed: false,
        },
        {
            name: "Doña Lupe",
            img: "https://images.unsplash.com/photo-1643868420405-48e32c6f4620?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmFtaWxpYXxlbnwwfDF8MHx8fDA%3D",
            viewed: true,
        },
        {
            name: "Juan Carlos",
            img: "https://images.unsplash.com/photo-1512813498716-3e640fed3f39?q=80&w=1448&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            viewed: false,
        },
        {
            name: "Maria Marta",
            img: "https://images.unsplash.com/photo-1557002665-c552e1832483?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            viewed: false,
        },
        {
            name: "Marcos Aguirre",
            img: "https://images.unsplash.com/photo-1570897234456-a6d0a709574f?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            viewed: false,
        },
        {
            name: "Agustina Mendez",
            img: "https://images.unsplash.com/photo-1600209142000-aa256622e64a?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            viewed: false,
        },
    ];

    const storiesContainer = document.getElementById("stories-container");

    storiesData.forEach((story) => {
        const storyElement = document.createElement("div");
        storyElement.className = "story";
        storyElement.setAttribute("data-viewed", story.viewed);
        storyElement.setAttribute("onclick", "viewStory(this)");

        const imageWrapper = document.createElement("div");
        imageWrapper.className = story.viewed
            ? "image-wrapper rounded-circle"
            : "image-wrapper";

        const imgElement = document.createElement("img");
        imgElement.src = story.img;
        imgElement.alt = story.name;
        imgElement.className = "rounded-img";

        const nameElement = document.createElement("p");
        nameElement.textContent = story.name;

        imageWrapper.appendChild(imgElement);
        storyElement.appendChild(imageWrapper);
        storyElement.appendChild(nameElement);

        storiesContainer.appendChild(storyElement);
    });

    // Actualizar el estilo inicial de las historias
    updateStoryStyles();

    // Restablecer automáticamente la primera historia como no vista cada 10 segundos
    setInterval(resetFirstStory, 10000);
});

document.addEventListener("DOMContentLoaded", () => {
    const storiesContainer = document.getElementById("stories-container");

    let isDragging = false;
    let startX, scrollLeft;

    // Inicia el arrastre
    storiesContainer.addEventListener("mousedown", (e) => {
        isDragging = true;
        storiesContainer.classList.add("active");
        startX = e.pageX - storiesContainer.offsetLeft;
        scrollLeft = storiesContainer.scrollLeft;
    });

    // Finaliza el arrastre en cualquier lugar del documento
    document.addEventListener("mouseup", () => {
        isDragging = false;
        storiesContainer.classList.remove("active");
    });

    // Mientras se arrastra
    storiesContainer.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        e.preventDefault();
        const x = e.pageX - storiesContainer.offsetLeft;
        const walk = (x - startX) * 0.75; 
        storiesContainer.scrollLeft = scrollLeft - walk;
    });

    // Evitar que el cursor se quede en estado "grabbing"
    document.addEventListener("mouseleave", () => {
        isDragging = false;
        storiesContainer.classList.remove("active");
    });
});

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
