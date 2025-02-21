document.addEventListener("DOMContentLoaded", function () {
    // Efecto de movimiento en los objetos del banner
    const movingObjects = document.querySelectorAll(".moving-object");

    function moveObjects() {
        movingObjects.forEach(obj => {
            const x = Math.random() * 90 + "%";
            const y = Math.random() * 90 + "%";
            obj.style.transform = `translate(${x}, ${y})`;
        });
    }

    setInterval(moveObjects, 3000); // Cambia la posición cada 3 segundos

    // Efecto de hover en tarjetas de proyectos
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("mouseenter", function () {
            this.querySelector(".overlay").style.opacity = "1";
        });
        card.addEventListener("mouseleave", function () {
            this.querySelector(".overlay").style.opacity = "0";
        });
    });
});
