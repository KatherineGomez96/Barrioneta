//He aqui, el bendito LogIn <3

// Acceso inicial al localStorage
const activeUser = JSON.parse(localStorage.getItem("barrioneta"));

// define el usuario como objeto
const validUser = {
  usuario: "@juanitakpa",
  contraseña: "juanita22",
  fotoPerfil: "juanita.jpg", //despues lo cambiamos con la imagen real
  email: "juanitakpa@barrioneta.com",
  nombre: "Juanita Martinez",
};


// Compara el usuario ingresado con el usuario guardado en localStorage
// redirigir al home directamente
if (activeUser && activeUser.loggedIn) {
  window.location.href = "home.html";
}

// formulario de login
document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // obtiene los valores ingresados
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  const errorMessage = document.getElementById("errorMessage");

  // validar usuario y contraseña
  if (username === validUser.usuario && password === validUser.contraseña) {
    // crea un objeto nuevo de user logueado y lo guarda en localStorage
    const loggedUser = {
      ...validUser, // se copia todo de validUser y agrega un atributo de seciopn activa
      loggedIn: true, 
    };
    localStorage.setItem("barrioneta", JSON.stringify(loggedUser));

    // aca no toque nada, redirigir al index
    window.location.href = "home.html";
  } else {
    // mostrar el mensaje de error
    errorMessage.textContent = "Usuario o contraseña incorrectos.";
    errorMessage.style.color = "red";
  }
});


