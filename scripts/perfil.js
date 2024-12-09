//esto ya es propio del perfil

document.addEventListener('DOMContentLoaded', () => {
    const images = [
        "fotosPerfil/nico-benedick-1.jpg",
        "fotosPerfil/nico-benedickt-2.jpg",
        "fotosPerfil/nico-benedickt-3.jpg",
        "fotosPerfil/nico-benedickt-4.jpg",
        "fotosPerfil/nico-benedickt-5.jpg",
        "fotosPerfil/nico-benedickt-6.jpg",
        "fotosPerfil/nico-benedickt-7.jpg",
        "fotosPerfil/nico-benedickt-8.jpg",
        "fotosPerfil/nico-benedickt-9.jpg",
        "fotosPerfil/nico-benedickt-10.jpg",
        "fotosPerfil/nico-benedickt-11.jpg",
        "fotosPerfil/nico-benedickt-12.jpg"
    ];

    // Referencias a elementos
    const gallery = document.getElementById('gallery');
    const modal = document.getElementById('carouselModal');
    const modalImage = document.getElementById('modalImage');
    const closeModal = document.getElementById('closeModal');
    const prevImage = document.getElementById('prevImage');
    const nextImage = document.getElementById('nextImage');
    
    
    //se usa -1 para indicar que ninguna imagen está activa o seleccionada.
    let currentIndex = -1;

    function loadGallery() {
        images.forEach((src, index) => {
            const item = document.createElement('div');
            item.classList.add('masonry-item');

            const img = document.createElement('img');
            img.src = src;
            img.alt = `Imagen ${index + 1}`;
            img.addEventListener('click', () => openModal(index));

            // Contenedor de Iconos
            const actionIcons = document.createElement('div');
            actionIcons.classList.add('action-icons');

            // Botón Me gusta
            const likeButton = document.createElement('div');
            likeButton.classList.add('like-button');
            likeButton.innerHTML = `
                <i class="bi bi-heart"></i>
                <span class="like-count">${Math.floor(Math.random() * 500)}</span>
            `;
            likeButton.addEventListener('click', () => toggleLike(likeButton));

            // Botón Comentarios
            const commentButton = document.createElement('div');
            commentButton.classList.add('comment-button');
            commentButton.innerHTML = `
                <i class="bi bi-chat"></i>
                <span>${Math.floor(Math.random() * 20) + 1}</span>
            `;

            // Botón Enviar
            const sendButton = document.createElement('div');
            sendButton.classList.add('send-button');
            sendButton.innerHTML = `
                <i class="bi bi-send"></i>
            `;
            sendButton.addEventListener('click', () => toggleSend(sendButton));

            // Añadir los botones al contenedor
            actionIcons.appendChild(likeButton);
            actionIcons.appendChild(commentButton);
            actionIcons.appendChild(sendButton);

            // Añadir la imagen y los iconos al elemento Masonry
            item.appendChild(img);
            item.appendChild(actionIcons);
            gallery.appendChild(item);
        });
    }
    //el modal solo se abre al presional la imagen 
    // Función para abrir el modal
    function openModal(index) {
        if (index >= 0 && index < images.length) {
            currentIndex = index;
    
            // Mostrar el modal
            modal.classList.add('visible');
            modal.style.display = "flex";
            modalImage.src = images[currentIndex];
        } else {
            console.error("Índice inválido al intentar abrir el modal.");
        }
    }
    
    function closeModalHandler() {
        // Ocultar el modal
        modal.classList.remove('visible');
        modal.style.display = "none";
        modalImage.src = ""; // Limpia la imagen
    }
    
    // Navegacion de imágenes
    function showPrevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        modalImage.src = images[currentIndex];
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        modalImage.src = images[currentIndex];
    }

    // Funciones de interacción de los botones
    function toggleLike(button) {
        const icon = button.querySelector('i');
        const likeCount = button.querySelector('.like-count');

        button.classList.toggle('liked');
        const currentLikes = parseInt(likeCount.textContent);

        if (button.classList.contains('liked')) {
            icon.classList.remove('bi-heart');
            icon.classList.add('bi-heart-fill');
            likeCount.textContent = currentLikes + 1;
        } else {
            icon.classList.remove('bi-heart-fill');
            icon.classList.add('bi-heart');
            likeCount.textContent = currentLikes - 1;
        }
    }

    function toggleSend(button) {
        button.classList.toggle('sent');
    }

    // Cerrar modal al hacer clic fuera de la imagen
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModalHandler();
        }
    });

    closeModal.addEventListener('click', closeModalHandler);
    prevImage.addEventListener('click', showPrevImage);
    nextImage.addEventListener('click', showNextImage);

    loadGallery();
});
