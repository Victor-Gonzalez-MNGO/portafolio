// Puedes agregar tus scripts aquí
console.log("Página cargada correctamente.");

// Ejemplo de interactividad adicional
document.addEventListener("DOMContentLoaded", function() {
    const btnEnviar = document.querySelector("form button");
    btnEnviar.addEventListener("click", function(event) {
        event.preventDefault();
        alert("Formulario enviado");
    });
});