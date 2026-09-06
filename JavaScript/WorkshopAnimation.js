const card = document.querySelector('.projekt-02');
const img = card.querySelector('.frame-anim');

const frameCount = 14;
const startFrame = 6;
const fps = 20;
const prefix = 'images/Blobbie';

let isPlaying = false;

function frameSrc(n) {
  return `${prefix}${String(n).padStart(2, '0')}.jpg`;
}

for (let i = 1; i <= frameCount; i++) {
  new Image().src = frameSrc(i);
}
img.src = frameSrc(startFrame);

function playAnimation() {
  isPlaying = true;
  let frame = startFrame;
  const delay = 1000 / fps;

  function nextFrame() {
    frame++;

    if (frame > frameCount) {
      // sanfter Rücksprung: kurz ausblenden, Frame wechseln, einblenden
      img.style.opacity = 0;
      setTimeout(() => {
        img.src = frameSrc(startFrame);
        img.style.opacity = 1;
        isPlaying = false;
      }, 200);
      return;
    }

    img.src = frameSrc(frame);
    setTimeout(nextFrame, delay);
  }

  setTimeout(nextFrame, delay);
}

card.addEventListener('mouseenter', () => {
  if (isPlaying) return;
  playAnimation();
});
