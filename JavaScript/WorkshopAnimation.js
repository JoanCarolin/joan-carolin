const card = document.querySelector('.projekt-02');
const img = card.querySelector('.frame-anim');

const frameCount = 14;
const startFrame = 6;
const fps = 20;
const prefix = 'images/Blobbie';

let interval = null;
let frame = startFrame;

function frameSrc(n) {
  return `${prefix}${String(n).padStart(2, '0')}.jpg`;
}

for (let i = 1; i <= frameCount; i++) {
  new Image().src = frameSrc(i);
}
img.src = frameSrc(startFrame);

function startLoop() {
  img.style.opacity = 1;
  frame = startFrame;

  interval = setInterval(() => {
    frame++;
    if (frame > frameCount) {
      frame = startFrame;
    }
    img.src = frameSrc(frame);
  }, 1000 / fps);
}

function stopLoop() {
  clearInterval(interval);
  interval = null;
  img.style.opacity = 0; // blendet aus, ABER darunter liegt das Ruhebild sichtbar
}

card.addEventListener('mouseenter', () => {
  if (interval) return;
  startLoop();
});

card.addEventListener('mouseleave', () => {
  stopLoop();
});
