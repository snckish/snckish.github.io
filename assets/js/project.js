const PROJECTS = {
  zythera: {
    title: "Zythera",
    label: "PHP · MySQL",
    desc: "A furniture e-commerce site featuring product catalogs, categories, and order management, backed by a MySQL database with PHP handling server-side logic and data persistence.",
    github: "https://github.com/snckish/Zythera",
    images: [
      "assets/img/zythera/home.png",
      "assets/img/zythera/catalog.png",
      "assets/img/zythera/checkout.png",
    ],
  },
  qydentra: {
    title: "Qydentra",
    label: "Queue System",
    desc: "A queue management system for the PUP dental clinic that lets students reserve a slot, tracks queue status in real time, and helps staff manage patient flow more efficiently.",
    github: "https://github.com/snckish",
    images: [
      "assets/img/qydentra/user.png",
      "assets/img/qydentra/dentist.png",
      "assets/img/qydentra/admin.png",
    ],
  },
  magma: {
    title: "Magma Madness",
    label: "Game",
    desc: "A 2D game built using Python and Pygame, featuring interactive gameplay, player controls, and custom game mechanics with a fast-paced magma-themed environment.",
    github: "https://github.com/snckish",
    images: [
      "assets/img/mm/mm2.png",
      "assets/img/mm/mm1.png",
      "assets/img/mm/mm2.png",
    ],
  },
};

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 },
);

function populate() {
  const id = new URLSearchParams(window.location.search).get("p") || "zythera";
  const p = PROJECTS[id] || PROJECTS.zythera;

  document.title = p.title + " — snckish";
  document.getElementById("heroLabel").textContent = p.label + " Project";
  document.getElementById("heroTitle").innerHTML =
    p.title + '<span class="hl">.</span>';
  document.getElementById("heroDesc").textContent = p.desc;
  document.getElementById("heroGithub").href = p.github;
  document.getElementById("ctaGithub").href = p.github;

  document.getElementById("shotDots").innerHTML = p.images
    .map(
      (_, i) =>
        `<button type="button" data-bs-target="#shotCarousel" data-bs-slide-to="${i}"${i === 0 ? ' class="active" aria-current="true"' : ""} aria-label="Slide ${i + 1}"></button>`,
    )
    .join("");

  document.getElementById("shotInner").innerHTML = p.images
    .map(
      (src, i) =>
        `<div class="carousel-item${i === 0 ? " active" : ""}"><img src="${src}" alt="${p.title} preview ${i + 1}" onerror="this.style.visibility='hidden'" /></div>`,
    )
    .join("");
  document.getElementById("footerYear").textContent = new Date().getFullYear();
}

const bar = document.getElementById("readProgress");
window.addEventListener("scroll", () => {
  const pct =
    (window.scrollY /
      (document.documentElement.scrollHeight - window.innerHeight)) *
    100;
  bar.style.width = Math.min(pct, 100) + "%";
});

document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const t = document.querySelector(a.getAttribute("href"));
    if (t) {
      e.preventDefault();
      t.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
populate();