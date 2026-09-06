const card = document.querySelector('.projekt-02');
const img = card.querySelector('.frame-anim');

const frameCount = 15;
const startFrame = 6;
const fps = 15;
const prefix = 'images/Blobbie';

let interval = null;
let frame = startFrame;

function frameSrc(n) {
  return `${prefix}${String(n).padStart(2, '0')}.jpg`;
}

// Preload
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
      frame = startFrame; // Loop: zurück auf Startframe
    }
    img.src = frameSrc(frame);
  }, 1000 / fps);
}

function stopLoop() {
  clearInterval(interval);
  interval = null;
  img.style.opacity = 0; // sanftes Ausblenden

  // nach dem Fade den Frame zurücksetzen (unsichtbar, da opacity 0)
  setTimeout(() => {
    if (!interval) {
      img.src = frameSrc(startFrame);
    }
  }, 400); // muss zur CSS transition-Dauer passen
}

card.addEventListener('mouseenter', () => {
  if (interval) return; // läuft schon
  startLoop();
});

card.addEventListener('mouseleave', () => {
  stopLoop();
});
