// ========================================
// DOGGO ANIMATION
// ========================================

const doggo = document.querySelector(".frame-animation img");

if (doggo) {

    const doggoFrames = [
        "../images/Doggo_Run_cycle-1.png",
        "../images/Doggo_Run_cycle-2.png",
        "../images/Doggo_Run_cycle-3.png",
        "../images/Doggo_Run_cycle-4.png",
        "../images/Doggo_Run_cycle-5.png",
        "../images/Doggo_Run_cycle-6.png",
        "../images/Doggo_Run_cycle-7.png",
        "../images/Doggo_Run_cycle-8.png"
    ];

    let currentDoggoFrame = 0;

    setInterval(() => {

        currentDoggoFrame++;

        if (currentDoggoFrame >= doggoFrames.length) {
            currentDoggoFrame = 0;
        }

        doggo.src = doggoFrames[currentDoggoFrame];

    }, 70);
}
