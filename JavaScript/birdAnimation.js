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
