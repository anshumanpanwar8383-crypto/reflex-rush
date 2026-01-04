const finalScore = document.getElementById("finalScore");
const bestScore = document.getElementById("bestScore");

finalScore.textContent = localStorage.getItem("lastScore") || 0;
bestScore.textContent = localStorage.getItem("bestScore") || 0;
