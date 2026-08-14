// ========================================
// DOGGO ANIMATION
// ========================================

const doggo = document.querySelector(".frame-animation img");

if (doggo) {

    const doggoFrames = [
        "images/Doggo_Run_cycle-1.png",
        "images/Doggo_Run_cycle-2.png",
        "images/Doggo_Run_cycle-3.png",
        "images/Doggo_Run_cycle-4.png",
        "images/Doggo_Run_cycle-5.png",
        "images/Doggo_Run_cycle-6.png",
        "images/Doggo_Run_cycle-7.png",
        "images/Doggo_Run_cycle-8.png"
    ];

    const doggoImages = [];

    doggoFrames.forEach((src) => {
        const img = new Image();
        img.src = src;
        doggoImages.push(img);
    });

    let currentDoggoFrame = 0;

    setInterval(() => {

        currentDoggoFrame++;

        if (currentDoggoFrame >= doggoImages.length) {
            currentDoggoFrame = 0;
        }

        doggo.src = doggoImages[currentDoggoFrame].src;

    }, 70);
}
