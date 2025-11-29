
const toggle = document.getElementById("modeToggle");
const body = document.body;
if (toggle) {
  const iconSpan = toggle.querySelector(".icon");
  const labelSpan = toggle.querySelector(".label");

  const savedTheme = window.localStorage.getItem("linktree-theme");
  if (savedTheme === "dark") {
    body.classList.add("dark");
    iconSpan.textContent = "☀️";
    labelSpan.textContent = "Cute Light";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("dark");
    const isDark = body.classList.contains("dark");
    iconSpan.textContent = isDark ? "☀️" : "🌙";
    labelSpan.textContent = isDark ? "Cute Light" : "Cute Dark";
    window.localStorage.setItem("linktree-theme", isDark ? "dark" : "light");
  });
}

const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Form terkirim (demo).\n\nUntuk beneran kirim ke email / backend, ganti atribut action= di contact.html dan hapus JavaScript alert ini.");
  });
}
