const card = document.querySelector('.projekt-02');
const img = card.querySelector('.frame-anim');

const frameCount = 14;
const startFrame = 6;
const baseFps = 12;
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
  const baseDelay = 1000 / baseFps;

  function nextFrame() {
    frame++;
    if (frame > frameCount) {
      img.src = frameSrc(startFrame);
      isPlaying = false;
      return;
    }
    img.src = frameSrc(frame);

    // letzte 3 Frames verlangsamen sich zunehmend
    const remaining = frameCount - frame;
    const slowdown = remaining < 3 ? (3 - remaining) * 0.4 : 0;
    const delay = baseDelay * (1 + slowdown);

    setTimeout(nextFrame, delay);
  }

  setTimeout(nextFrame, baseDelay);
}

card.addEventListener('mouseenter', () => {
  if (isPlaying) return;
  playAnimation();
});
