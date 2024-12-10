const images = [
  "https://plus.unsplash.com/premium_photo-1682285866576-7d2b8490cb10?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://i.pinimg.com/736x/66/3c/fc/663cfc3b279c8d1023157b5b68be1107.jpg",
  "https://ideasconsejos.com/images/2020/11/Fotos-para-tomarte-con-tu-mejor-amiga-inmediatamente-12.jpg",
  "https://images.unsplash.com/photo-1632616428087-bc0aeb7af242?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://4.bp.blogspot.com/-WYHBetuHAR4/VnTVSv5c8yI/AAAAAAAAa7w/FBBgqYuK9CM/s1600/Luis%2BAbinader.jpg",
  "https://cdn.pixabay.com/photo/2024/05/14/20/52/selfie-8762129_1280.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQklsj54WowaVK0SKQzWitRWEOtWUye9vnuuA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNKlOFK1j_LeSiZHGnLr8Rfi2xXZRh58cotA&s",
  "https://plus.unsplash.com/premium_photo-1683129651802-1c7ba429a137?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zmllc3RhJTIwZGp8ZW58MHx8MHx8fDA%3D",
  "https://images.unsplash.com/photo-1535268244390-8b989b92d2bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHBlb3BsZSUyMGhhdmluZyUyMGZ1bnxlbnwwfHwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1464998857633-50e59fbf2fe6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHBlb3BsZSUyMGhhdmluZyUyMGZ1bnxlbnwwfHwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1714972383523-7c636d2f0e9b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlJTIwaGF2aW5nJTIwZnVufGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1730406919258-b031632e3de8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGVvcGxlJTIwaGF2aW5nJTIwZnVufGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1482235225574-c37692835cf3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHBlb3BsZSUyMGhhdmluZyUyMGZ1bnxlbnwwfHwwfHx8Mg%3D%3D",
  "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHBlb3BsZSUyMGhhdmluZyUyMGZ1bnxlbnwwfHwwfHx8Mg%3D%3D"
];


//implementacion del localStorage para guardar likes
// Recuperar estados de likes desde localStorage
let likesState = JSON.parse(localStorage.getItem("likesState")) || {};

// Inicializar el estado para imágenes que no existan en localStorage
images.forEach((imageSrc) => {
  if (likesState[imageSrc] === undefined) {
    likesState[imageSrc] = true;
  }
});

// Guardar el estado actualizado en localStorage
localStorage.setItem("likesState", JSON.stringify(likesState));

const grid = document.getElementById("imageGrid");

images.forEach((imageSrc) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const img = document.createElement("img");
  const like = document.createElement("i");
  const likeIcon = document.createElement("span");
  let isLike = likesState[imageSrc]; // Cargar el estado inicial

  img.src = imageSrc;
  img.alt = "Imagen dinámica";
  img.setAttribute("class", "gallary_img");
  img.style.width = "100%";

  likeIcon.setAttribute( // Agregar icono de like
    "class",
    isLike
      ? "material-symbols-outlined actives like_img"
      : "material-symbols-outlined like_img"
  );
  likeIcon.textContent = "favorite";

  like.setAttribute("class", "uil uil-heart-alt like_img_animation");
  like.setAttribute("id", "animation_like");

  gridItem.appendChild(img);
  gridItem.appendChild(like);
  gridItem.appendChild(likeIcon);

  grid.appendChild(gridItem);

  img.addEventListener("mouseup", () => {
    isLike = !isLike;
    likesState[imageSrc] = isLike; // Actualizar estado en localStorage
    localStorage.setItem("likesState", JSON.stringify(likesState));

    if(isLike){
      likeIcon.setAttribute('class','material-symbols-outlined actives like_img')
      
    } else {
      likeIcon.setAttribute('class', 'material-symbols-outlined like_img')
      like.classList.add('animate_like');

      like.addEventListener('animationend', () => {
        like.classList.remove('animate_like');
      }, { twice: true });
    }
  });
});

