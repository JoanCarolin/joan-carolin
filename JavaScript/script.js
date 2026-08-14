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


// Hover über Projektkacheln
const cards = document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        follower.classList.add("hover");
    });

    card.addEventListener("mouseleave", () => {
        follower.classList.remove("hover");
    });

});

// Hover über Links
const links = document.querySelectorAll("a");

links.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        follower.classList.add("hover");
    });

    link.addEventListener("mouseleave", () => {
        follower.classList.remove("hover");
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
