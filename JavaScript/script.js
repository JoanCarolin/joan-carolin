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




// ========================================
// BIRDIE ANIMATION
// ========================================

const birdAnimation = document.querySelector(".bird-animation img");

if (birdAnimation) {

    const birdFrames = [
        "images/frametoframe_bird_1.png",
        "images/frametoframe_bird_2.png",
        "images/frametoframe_bird_3.png",
        "images/frametoframe_bird_4.png",
        "images/frametoframe_bird_5.png",
        "images/frametoframe_bird_6.png",
        "images/frametoframe_bird_7.png",
        "images/frametoframe_bird_8.png",
        "images/frametoframe_bird_9.png",
        "images/frametoframe_bird_10.png",
        "images/frametoframe_bird_11.png",
        "images/frametoframe_bird_12.png",
        "images/frametoframe_bird_13.png",
        "images/frametoframe_bird_14.png",
        "images/frametoframe_bird_15.png",
        "images/frametoframe_bird_16.png",
        "images/frametoframe_bird_17.png",
        "images/frametoframe_bird_18.png"
    ];

    const birdImages = [];

    // Frames vorladen
    birdFrames.forEach((src) => {
        const img = new Image();
        img.src = src;
        birdImages.push(img);
    });

    let currentBirdFrame = 0;

    setInterval(() => {

        currentBirdFrame++;

        if (currentBirdFrame >= birdImages.length) {
            currentBirdFrame = 0;
        }

        birdAnimation.src = birdImages[currentBirdFrame].src;

    }, 70);

}

