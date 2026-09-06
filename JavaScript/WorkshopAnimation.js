const card = document.querySelector('.projekt-02');
const img = card.querySelector('.frame-anim');

const frameCount = 14;
const startFrame = 6;
const baseFps = 24;
const prefix = 'images/Blobbie';

let isPlaying = false;

function frameSrc(n) {
  return `${prefix}${String(n).padStart(2, '0')}.jpg`;
}

for (let i = 1; i <= frameCount; i++) {
  new Image().src = frameSrc(i);
}
img.src = frameSrc(startFrame);

// sanfte Ease-out Kurve (kein Sprung, kontinuierlicher Verlauf)
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

function playAnimation() {
  isPlaying = true;
  let frame = startFrame;
  const baseDelay = 1000 / baseFps;
  const easeZone = 6; // letzte 6 Frames verlangsamen sich sanft

  function nextFrame() {
    frame++;
    if (frame > frameCount) {
      img.src = frameSrc(startFrame);
      isPlaying = false;
      return;
    }
    img.src = frameSrc(frame);

    const remaining = frameCount - frame;
    let delay = baseDelay;

    if (remaining < easeZone) {
      const t = 1 - remaining / easeZone; // läuft sanft von 0 auf 1
      delay = baseDelay * (1 + easeOutCubic(t) * 2.5); // 2.5 = max. Verlangsamungsfaktor
    }

    setTimeout(nextFrame, delay);
  }

  setTimeout(nextFrame, baseDelay);
}

card.addEventListener('mouseenter', () => {
  if (isPlaying) return;
  playAnimation();
});
