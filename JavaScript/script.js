// ========================================
// CURSOR
// ========================================

const follower = document.querySelector(".cursor-follower");

if (follower) {

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
    function animateCursor() {

        followerX += (mouseX - followerX) * 0.1;
        followerY += (mouseY - followerY) * 0.1;

        follower.style.left = followerX + "px";
        follower.style.top = followerY + "px";

        requestAnimationFrame(animateCursor);
    }

    animateCursor();

}


// ========================================
// DOGGO ANIMATION
// ========================================

const animation = document.querySelector(".frame-animation img");

if (animation) {

    const frames = [
        "images/Doggo_Run_cycle-1.png",
        "images/Doggo_Run_cycle-2.png",
        "images/Doggo_Run_cycle-3.png",
        "images/Doggo_Run_cycle-4.png",
        "images/Doggo_Run_cycle-5.png",
        "images/Doggo_Run_cycle-6.png",
        "images/Doggo_Run_cycle-7.png",
        "images/Doggo_Run_cycle-8.png"
    ];

    const images = [];

    // Alle Frames vorladen
    frames.forEach((src) => {
        const img = new Image();
        img.src = src;
        images.push(img);
    });

    let currentFrame = 0;

    setInterval(() => {

        currentFrame++;

        if (currentFrame >= images.length) {
            currentFrame = 0;
        }

        animation.src = images[currentFrame].src;

    }, 70);

}

