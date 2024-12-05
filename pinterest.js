const images = [
  "https://kanykathotel.com/wp-content/uploads/2020/09/porque-elegir-una-residencia-de-lujo-perros-y-gatos.webp",
  "https://plus.unsplash.com/premium_photo-1732569119693-05321f406646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200x300",
  "https://images.unsplash.com/photo-1733031510035-3fda1ac87b8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x400",
  "https://images.unsplash.com/photo-1733028724656-b456573528ee?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/200x300",
  "https://images.unsplash.com/photo-1732888169391-9001089d6342?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/400x300",
  "https://images.unsplash.com/photo-1732967377738-66c8dfb45167?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D/300x300"
];

const grid = document.getElementById("imageGrid");

images.forEach((imageSrc) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add("grid-item");

  const img = document.createElement("img");
  const like = document.createElement("i");
  const likeIcon = document.createElement("span");
  let isLike = false

  img.src = imageSrc;
  img.alt = "Imagen dinámica";
  img.setAttribute('class', 'gallary_img')
  img.style.width = "100%";

  likeIcon.setAttribute('class', 'material-symbols-outlined active like_img')
  likeIcon.textContent ="favorite"

  like.setAttribute('class', 'uil uil-heart-alt like_img_animation')
  like.setAttribute('id', 'animation_like')



  gridItem.appendChild(img);
  gridItem.appendChild(like);  
  gridItem.appendChild(likeIcon);

  grid.appendChild(gridItem);

    img.addEventListener('mouseup', (evt) => {
      if(isLike){
        likeIcon.setAttribute('class','material-symbols-outlined active like_img')
        
      } else {
        likeIcon.setAttribute('class', 'material-symbols-outlined like_img')
        
      }

      isLike = !isLike

      like.classList.add('animate_like');

      like.addEventListener('animationend', () => {
        like.classList.remove('animate_like');
      }, { once: true });
    });

});



