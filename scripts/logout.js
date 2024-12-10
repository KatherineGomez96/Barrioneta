// Verificar si el usuario está en sesión
const user = JSON.parse(localStorage.getItem("barrioneta"));

if (!user || !user.loggedIn) { 

  window.location.href = "index.html";
  
}

// cerrar sesión
function logout() {
  
  localStorage.removeItem("barrioneta");

  window.location.href = "index.html";
}

//-------------------Kathy estuvo aqui--------------------

const userName = document.querySelector(".name")
const userDescription = document.querySelector(".description")

userName.textContent = user.nombre;
userDescription.textContent = user.usuario; 

let userPhoto = document.querySelector(".photo")
userPhoto.src = user.fotoPerfil;