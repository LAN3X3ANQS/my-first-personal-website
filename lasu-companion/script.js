function toggleMode() {
  const body = document.body;
  if (body.classList.contains("light")) {
    body.classList.replace("light", "dark");
    document.getElementById("modeBtn").textContent = "☀️";
  } else {
    body.classList.replace("dark", "light");
    document.getElementById("modeBtn").textContent = "🌙";
  }
}
function toggleMenu() {
  const menu = document.getElementById("menu");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
}