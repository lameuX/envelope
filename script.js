const audio = document.getElementById("openSound");
const container = document.querySelector(".container-confetti");

function createConfetti() {
  const total = 50; // Количество конфетти
  const envelope = document.querySelector(".envelope-wrapper");
  const rect = envelope.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  for (let i = 0; i < total; i++) {
    const confetti = document.createElement("div");
    confetti.className = "confetti";
    const angle = Math.random() * 2 * Math.PI;
    const distance = Math.random() * 150 + 50;
    const x = Math.cos(angle) * distance;
    const y = Math.sin(angle) * distance;

    confetti.style.left = `${centerX}px`;
    confetti.style.top = `${centerY}px`;
    confetti.style.setProperty("--x", `${x}px`);
    confetti.style.setProperty("--y", `${y}px`);

    container.appendChild(confetti);
    setTimeout(() => confetti.remove(), 6000); // Удаляем через 6 секунд
  }
}

document.querySelector("#openEnvelope").addEventListener("click", () => {
  const envelopeWrapper = document.querySelector(".envelope-wrapper");
  envelopeWrapper.classList.add("flap");
  audio.play();
  createConfetti();
});

document.querySelector(".closeLetter").addEventListener("click", (e) => {
  e.preventDefault();
  const letter = e.target.closest(".letter");
  letter.style.display = "none";
});