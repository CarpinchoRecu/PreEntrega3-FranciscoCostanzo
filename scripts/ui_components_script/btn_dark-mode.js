// Selecciona el checkbox y la etiqueta del botón
const darkModeToggle = document.querySelector("#dark-mode-toggle");
const labelBtnDarkMode = document.querySelector(".label-btn-dark-mode");
const body = document.querySelector("body");
const isDarkMode = localStorage.getItem("isDarkMode") === "true";

// Si el usuario ya había activado el modo oscuro, lo activamos por defecto
if (isDarkMode) {
    body.classList.add("dark-mode");
}

// Detectamos el clic del usuario en el botón
darkModeToggle.addEventListener("click", () => {
    // Cambiamos el tema del sitio web
    body.classList.toggle("dark-mode");

    // Guardamos el estado actual del modo oscuro en el localStorage
    const isCurrentlyDarkMode = body.classList.contains("dark-mode");
    localStorage.setItem("isDarkMode", isCurrentlyDarkMode);
});
// Cuando la página cargue, verifica si el modo oscuro está habilitado
// y actualiza el estado del botón en consecuencia
window.addEventListener("load", () => {
    const isDarkMode = localStorage.getItem("isDarkMode") === "true";
    darkModeToggle.checked = isDarkMode;
    if (isDarkMode) {
        labelBtnDarkMode.classList.add("dark-mode");
    }
});

// Cuando el estado del checkbox cambie, actualiza el estado del botón y
// guarda el estado en localStorage
darkModeToggle.addEventListener("change", () => {
    if (darkModeToggle.checked) {
        labelBtnDarkMode.classList.add("dark-mode");
        localStorage.setItem("isDarkMode", "true");
    } else {
        labelBtnDarkMode.classList.remove("dark-mode");
        localStorage.setItem("isDarkMode", "false");
    }
});
