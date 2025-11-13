// === Переміщення логотипу мишею ===

const logo = document.querySelector(".hero-logo");

let isDragging = false;
let offsetX = 0;
let offsetY = 0;

// Робимо логотип рухомим
logo.style.position = "absolute";
logo.style.cursor = "grab";
logo.style.userSelect = "none"; // щоб не виділявся при русі

// Натискання миші — починаємо тягнути
logo.addEventListener("mousedown", (event) => {
  isDragging = true;
  offsetX = event.clientX - logo.offsetLeft;
  offsetY = event.clientY - logo.offsetTop;
  logo.style.cursor = "grabbing";
});

// Рух миші — змінюємо позицію логотипу
document.addEventListener("mousemove", (event) => {
  if (!isDragging) return;

  let x = event.clientX - offsetX;
  let y = event.clientY - offsetY;

  // Обмежуємо, щоб логотип не виходив за межі екрану
  const maxX = window.innerWidth - logo.clientWidth;
  const maxY = window.innerHeight - logo.clientHeight;

  x = Math.max(0, Math.min(x, maxX));
  y = Math.max(0, Math.min(y, maxY));

  logo.style.left = `${x}px`;
  logo.style.top = `${y}px`;
});

// Відпускання миші — зупиняємо рух
document.addEventListener("mouseup", () => {
  if (isDragging) {
    isDragging = false;
    logo.style.cursor = "grab";
  }
});
