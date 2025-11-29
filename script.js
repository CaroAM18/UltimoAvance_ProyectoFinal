document.addEventListener("DOMContentLoaded", () => {
    const video = document.querySelector(".video-bg");

    if (!video) return; // Si no hay video, continuar con el degradado del css

    // Se agrega un timeout para verificar si el video cargó
    let videoLoaded = false;

    // Si el video se carga bien, salir
    video.addEventListener("canplaythrough", () => {
        videoLoaded = true;
    });

    // Si hay error de carga, ocultar el video
    video.addEventListener("error", () => {        
        video.style.display = "none";
    });

    // Aqui se verificar después de 1s si no se cargó
    setTimeout(() => {
        if (!videoLoaded) {            
            video.style.display = "none";
        }
    }, 1000);
});
