const btn = document.getElementById("btn");
const text = document.getElementById("text");

let startTime = null;
let timer = null;

btn.onclick = () => {
  btn.disabled = true;
  btn.classList.add("wait");
  text.textContent = "Wait...";
  startTime = null;

  const delay = Math.random() * 3000 + 2000;

  timer = setTimeout(() => {
    text.textContent = "CLICK!";
    btn.textContent = "CLICK!";
    btn.disabled = false;
    btn.classList.remove("wait");
    startTime = Date.now();
  }, delay);
};

btn.addEventListener("click", () => {
  if (!startTime) return;

  const score = Date.now() - startTime;

  const best = localStorage.best
    ? Math.min(score, localStorage.best)
    : score;

  localStorage.best = best;

  window.location.href =
    "score.html?score=" + score;
});

