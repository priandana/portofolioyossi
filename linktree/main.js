
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

    const brand = document.getElementById("brand").value;
    const person = document.getElementById("person").value;
    const email = document.getElementById("email").value;
    const whatsapp = document.getElementById("whatsapp").value;
    const platform = document.getElementById("platform").value;
    const budget = document.getElementById("budget").value;
    const objective = document.getElementById("objective").value;
    const details = document.getElementById("details").value || "-";

    const message =
`Form Kerja Sama – Yossi Links

Brand/Agency : ${brand}
Contact Person : ${person}
Email : ${email}
WhatsApp : ${whatsapp}
Platform Utama : ${platform}
Budget : ${budget}
Tujuan Campaign : ${objective}
Detail Tambahan : ${details}`;

    const encoded = encodeURIComponent(message);

    // GANTI NOMOR WA KAMU DI SINI
    const waNumber = "6282219823967";

    window.open(`https://wa.me/${waNumber}?text=${encoded}`, "_blank");
  });
}

