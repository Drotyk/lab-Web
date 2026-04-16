// === Мінігра "Клікер" ===

const clickBtn = document.getElementById("click-btn");
const resetBtn = document.getElementById("reset-btn");
const scoreText = document.getElementById("score");

// Модальне вікно
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

let score = 0;

if (clickBtn && resetBtn && scoreText && modal && closeModal) {
  clickBtn.addEventListener("click", () => {
    score++;
    scoreText.textContent = `Очки: ${score}`;

    // Ефект при кліку
    clickBtn.style.transform = "scale(1.2)";
    setTimeout(() => (clickBtn.style.transform = "scale(1)"), 150);

    // Перевірка на 1488
    if (score === 1488) {
      modal.style.display = "flex";
      modal.setAttribute("aria-hidden", "false");
    }
  });

  resetBtn.addEventListener("click", () => {
    score = 0;
    scoreText.textContent = "Очки: 0";
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  });

  // Закриття модального вікна
  closeModal.addEventListener("click", () => {
    modal.style.display = "none";
    modal.setAttribute("aria-hidden", "true");
  });
}
