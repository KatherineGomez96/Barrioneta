//He aqui, el bendito LogIn <3

document.getElementById("loginForm").addEventListener("submit", (event) => {
  event.preventDefault();

  // Obtener valores ingresados
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();

  // Validar usuario y contraseña
  const isValidUsername = username === "@juanitakpa";
  const isValidPassword = password === "juanita22";

  const errorMessage = document.getElementById("errorMessage");

  //yo, y mo bocota, me la complico sola 
  //implementacion del localStorage
  if (isValidUsername && isValidPassword) {
    // guarda el usuario en localStorage
    const user = { username: "@juanitakpa", loggedIn: true };
    localStorage.setItem("barrioneta", JSON.stringify(user));

    // redirigimos al index
    window.location.href = "index.html";
  } else {
    // Mostrar mensaje de error
    errorMessage.textContent = !isValidUsername
      ? "Usuario incorrecto."
      : "Contraseña incorrecta.";
    errorMessage.style.color = "red";
  }
});

