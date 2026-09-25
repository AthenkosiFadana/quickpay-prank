const ref = document.getElementById("ref");
ref.textContent = Math.floor(100000 + Math.random() * 900000);

const card = document.getElementById("card");
const reveal = document.getElementById("reveal");
const releaseBtn = document.getElementById("releaseBtn");
const againBtn = document.getElementById("againBtn");
const bar = document.getElementById("bar");
const processing = document.getElementById("processing");

function prank() {
  card.classList.add("hidden");
  reveal.classList.remove("hidden");
  bar.style.width = "0%";
  processing.textContent = "Reversing transaction...";

  requestAnimationFrame(() => {
    requestAnimationFrame(() => bar.style.width = "100%");
  });

  setTimeout(() => {
    processing.textContent = "Transaction reversed. No money was transferred. 😂";
  }, 2600);

  // Small vibration where supported; harmless and optional.
  if (navigator.vibrate) navigator.vibrate([80, 60, 80]);
}

releaseBtn.addEventListener("click", prank);

againBtn.addEventListener("click", () => {
  reveal.classList.add("hidden");
  card.classList.remove("hidden");
  ref.textContent = Math.floor(100000 + Math.random() * 900000);
});
