const follower = document.querySelector(".cursor-follower");

let mouseX = 0;
let mouseY = 0;

let followerX = 0;
let followerY = 0;


document.addEventListener("mousemove", (event) => {
    mouseX = event.clientX;
    mouseY = event.clientY;
});


function animate() {

    followerX += (mouseX - followerX) * 0.1;
    followerY += (mouseY - followerY) * 0.1;

    follower.style.left = `${followerX}px`;
    follower.style.top = `${followerY}px`;

    requestAnimationFrame(animate);
}

animate();



const links = document.querySelectorAll("a");

links.forEach((link) => {

    link.addEventListener("mouseenter", () => {
        follower.style.width = "35px";
        follower.style.height = "35px";
    });

    link.addEventListener("mouseleave", () => {
        follower.style.width = "18px";
        follower.style.height = "18px";
    });

});
