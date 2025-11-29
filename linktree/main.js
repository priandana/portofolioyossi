
const toggle = document.getElementById("modeToggle");
const body = document.body;
if (toggle) {
  const iconSpan = toggle.querySelector(".icon");
  const labelSpan = toggle.querySelector(".label");

  const savedTheme = window.localStorage.getItem("linktree-theme");
  if (savedTheme === "light") {
    body.classList.add("light");
    iconSpan.textContent = "☀️";
    labelSpan.textContent = "Light";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");
    const isLight = body.classList.contains("light");
    iconSpan.textContent = isLight ? "☀️" : "🌙";
    labelSpan.textContent = isLight ? "Light" : "Dark";
    window.localStorage.setItem("linktree-theme", isLight ? "light" : "dark");
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form terkirim (demo).\n\nUntuk beneran kirim ke email / backend, ganti atribut action= di form contact.html.");
  });
}
