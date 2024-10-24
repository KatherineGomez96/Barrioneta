// Script para manejar el formulario de login
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener valores ingresados (en este caso, no importa lo que se ingrese)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
  
    // Redirigir siempre al home
    window.location.href = "home.html";
  });
  