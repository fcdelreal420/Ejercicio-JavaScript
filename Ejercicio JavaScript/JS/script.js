document.getElementById("Formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario

    // Capturar valores de los inputs
    const nombre = document.getElementById("nombre").value.trim();
    const apellidos = document.getElementById("apellidos").value.trim();
    const edad = document.getElementById("edad").value.trim();

    // Variables para errores
    let hayError = false;

    // Limpiar errores anteriores
    document.querySelectorAll('.errores').forEach(span => span.textContent = '');

    // Validación de Nombre
    if (nombre === "") {
        document.getElementById("nombre").nextElementSibling.textContent = "El nombre es obligatorio.";
        hayError = true;
    }

    // Validación de Apellidos
    if (apellidos === "") {
        document.getElementById("apellidos").nextElementSibling.textContent = "Los apellidos son obligatorios.";
        hayError = true;
    }

    // Validación de Edad
    if (isNaN(edad) || edad <= 0) {
        document.getElementById("edad").nextElementSibling.textContent = "La edad debe ser un número positivo mayor a 0.";
        hayError = true;
    }

    // Si no hay errores, mostrar los datos en la caja de información
    if (!hayError) {
        document.getElementById("displayNombre").textContent = nombre;
        document.getElementById("displayApellidos").textContent = apellidos;
        document.getElementById("displayEdad").textContent = edad;

        document.getElementById("infoBox").style.display = "block";
    }
});

// Cerrar y limpiar el formulario
document.getElementById("closeBtn").addEventListener("click", function() {
    document.getElementById("infoBox").style.display = "none"; // Ocultar caja de información

    // Limpiar el formulario
    document.getElementById("Formulario").reset();

    // Poner el foco en el campo de nombre
    document.getElementById("nombre").focus();
});



