const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


// Mausposition
document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});


// Hover-Effekt für Projektkacheln
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        follower.style.width = "45px";
        follower.style.height = "45px";
        follower.style.backgroundColor = "transparent";
        follower.style.border = "2px solid var(--color-primary)";
    });

    card.addEventListener("mouseleave", () => {
        follower.style.width = "18px";
        follower.style.height = "18px";
        follower.style.backgroundColor = "var(--color-primary)";
        follower.style.border = "none";
    });

});


// Cursor-Follower
function animate() {

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    follower.style.left = followerX + "px";
    follower.style.top = followerY + "px";

    requestAnimationFrame(animate);
}

animate();
