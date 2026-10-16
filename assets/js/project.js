const PROJECTS = {
  zythera: {
    title: "Zythera",
    subtitle: "Furniture E-Commerce",
    label: "PHP · MySQL",
    desc: "A furniture e-commerce site featuring product catalogs, categories, and order management, backed by a MySQL database with PHP handling server-side logic and data persistence.",
    github: "https://github.com/snckish/Zythera",
    type: "Web App",
    stack: "PHP · SQL",
    url: "github.com/snckish/Zythera",
    team: "Partners (2)",
    images: [
      { src: "assets/img/zythera/home.png", tag: "Home" },
      { src: "assets/img/zythera/catalog.png", tag: "Catalog" },
      { src: "assets/img/zythera/checkout.png", tag: "Checkout" },
    ],
    tags: [
      { icon: "bi-filetype-php", label: "PHP" },
      { icon: "bi-filetype-css", label: "CSS" },
      { icon: "bi-database-fill", label: "MySQL" },
    ],
    features: [
      {
        icon: "bi-grid-fill",
        title: "Product Catalog",
        desc: "Category-based furniture browsing with images and pricing.",
      },
      {
        icon: "bi-database-fill",
        title: "Database Driven",
        desc: "MySQL backend for persistent products and orders.",
      },
      {
        icon: "bi-person-fill",
        title: "User Accounts",
        desc: "Register, login, and manage your orders.",
      },
      {
        icon: "bi-box-seam-fill",
        title: "Order Management",
        desc: "Track order status from placement to fulfillment.",
      },
    ],
    timeline: [
      {
        date: "Phase 1",
        title: "DB Design",
        desc: "ERD, schema design, and MySQL table setup.",
      },
      {
        date: "Phase 2",
        title: "Backend (PHP)",
        desc: "CRUD operations, sessions, and authentication.",
      },
      {
        date: "Phase 3",
        title: "Frontend",
        desc: "CSS styling, layout, and integration with PHP.",
      },
      {
        date: "Phase 4",
        title: "Testing",
        desc: "Validation, error handling, and query optimization.",
      },
    ],
  },
  qydentra: {
    title: "Qydentra",
    subtitle: "Dental Clinic Queueing System",
    label: "Queue System",
    desc: "A queue management system for the PUP dental clinic that lets students reserve a slot, tracks queue status in real time, and helps staff manage patient flow more efficiently.",
    github: "https://github.com/snckish",
    type: "Web System",
    stack: "PHP · SQL",
    url: "snckish.github.io/qydentra",
    team: "Team of 4",
    images: [
      { src: "assets/img/qydentra/user.png", tag: "User" },
      { src: "assets/img/qydentra/dentist.png", tag: "Dentist" },
      { src: "assets/img/qydentra/recep.png", tag: "Receptionist" },
      { src: "assets/img/qydentra/admin.png", tag: "Admin Dashboard" },
    ],
    tags: [
      { icon: "bi-filetype-php", label: "PHP" },
      { icon: "bi-filetype-css", label: "CSS" },
      { icon: "bi-database-fill", label: "MySQL" },
    ],
    features: [
      {
        icon: "bi-calendar-check-fill",
        title: "Slot Reservation",
        desc: "Students book appointment slots in advance.",
      },
      {
        icon: "bi-clock-fill",
        title: "Real-Time Queue",
        desc: "Live queue status updates for staff and patients.",
      },
      {
        icon: "bi-person-lines-fill",
        title: "Staff Dashboard",
        desc: "Manage and update patient flow efficiently.",
      },
      {
        icon: "bi-bell-fill",
        title: "Notifications",
        desc: "Status updates keep patients informed.",
      },
    ],
    timeline: [
      {
        date: "Phase 1",
        title: "Requirements",
        desc: "Gathered clinic needs and flow requirements.",
      },
      {
        date: "Phase 2",
        title: "System Design",
        desc: "Designed queue logic, DB schema, and user roles.",
      },
      {
        date: "Phase 3",
        title: "Development",
        desc: "PHP backend, MySQL, and CSS frontend build.",
      },
      {
        date: "Phase 4",
        title: "Testing",
        desc: "End-to-end testing with simulated queue scenarios.",
      },
    ],
  },
  magma: {
    title: "Magma Madness",
    subtitle: "2D Pygame Adventure",
    label: "Game",
    desc: "A 2D game built using Python and Pygame, featuring interactive gameplay, player controls, and custom game mechanics with a fast-paced magma-themed environment.",
    github: "https://github.com/snckish",
    url: "github.com/snckish",
    images: [
      { src: "assets/img/mm/mm2.png", tag: "Gameplay" },
      { src: "assets/img/mm/mm1.png", tag: "Gameplay" },
      { src: "assets/img/mm/mm2.png", tag: "Gameplay" },
    ],
    tags: [
      { icon: "bi-filetype-py", label: "Python" },
      { icon: "bi-controller", label: "Pygame" },
    ],
    features: [
      {
        icon: "bi-controller",
        title: "Smooth Controls",
        desc: "Responsive keyboard controls for fluid gameplay.",
      },
      {
        icon: "bi-layers-fill",
        title: "Custom Mechanics",
        desc: "Unique game logic, collision, and scoring system.",
      },
      {
        icon: "bi-fire",
        title: "Magma Theme",
        desc: "Lava-themed world with obstacles and challenges.",
      },
      {
        icon: "bi-trophy-fill",
        title: "Score System",
        desc: "Track high scores and game progress.",
      },
    ],
    timeline: [
      {
        date: "Phase 1",
        title: "Concept",
        desc: "Game idea, mechanics outline, and asset planning.",
      },
      {
        date: "Phase 2",
        title: "Core Loop",
        desc: "Player movement, physics, and basic collision.",
      },
      {
        date: "Phase 3",
        title: "Levels & Assets",
        desc: "Level design, sprites, and sound integration.",
      },
      {
        date: "Phase 4",
        title: "Polish",
        desc: "Bug fixes, balancing, and final playthrough.",
      },
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
  const p = PROJECTS[id] || PROJECTS["zythera"];

  document.title = p.title + " — snckish";
  document.getElementById("heroLabel").textContent = p.label + " Project";
  document.getElementById("heroTitle").innerHTML =
    p.title + '<span class="hl">.</span>';
  document.getElementById("heroDesc").textContent = p.desc;
  document.getElementById("heroGithub").href = p.github;
  document.getElementById("ctaGithub").href = p.github;
  document.getElementById("deviceUrl").textContent = p.url;
  document.getElementById("overviewDesc").textContent = p.desc;
  document.getElementById("statType").textContent = p.type;
  document.getElementById("statTeam").textContent = p.team || "Solo";
  document.getElementById("statStack").textContent = p.stack;
  document.getElementById("footerYear").textContent = new Date().getFullYear();

  document.getElementById("techGrid").innerHTML = p.tags
    .map(
      (t) =>
        `<span class="tech-badge reveal"><i class="bi ${t.icon}"></i> ${t.label}</span>`,
    )
    .join("");

  document.getElementById("featureGrid").innerHTML = p.features
    .map(
      (f, i) =>
        `<div class="feature-card reveal reveal-delay-${i + 1}">
      <div class="feature-icon"><i class="bi ${f.icon}"></i></div>
      <div class="feature-title">${f.title}</div>
      <div class="feature-desc">${f.desc}</div>
    </div>`,
    )
    .join("");

  document.getElementById("timeline").innerHTML = p.timeline
    .map(
      (t) =>
        `<div class="tl-item reveal">
      <div class="tl-date">${t.date}</div>
      <div class="tl-title">${t.title}</div>
      <div class="tl-desc">${t.desc}</div>
    </div>`,
    )
    .join("");

  const images =
    p.images && p.images.length ? p.images : [{ src: "", tag: "Preview" }];

  document.getElementById("carouselIndicators").innerHTML = images
    .map(
      (img, i) =>
        `<button type="button" data-bs-target="#mockupCarousel" data-bs-slide-to="${i}"
      ${i === 0 ? 'class="active" aria-current="true"' : ""} aria-label="Slide ${i + 1}"></button>`,
    )
    .join("");

  document.getElementById("carouselInner").innerHTML = images
    .map(
      (img, i) => `
    <div class="carousel-item${i === 0 ? " active" : ""}">
      <div class="mockup-slide">
        <span class="mockup-slide-tag">${img.tag || ""}</span>
        <div class="screenshot-ph tall">
          <img src="${img.src}" alt="${p.title} — ${img.tag || "screenshot"}" class="ss-img"
            onerror="this.onerror=null; this.replaceWith(Object.assign(document.createElement('div'), {className:'ss-img-fallback', innerHTML:'<i class=\\'bi bi-image\\'></i><span>Add ${img.src.split("/").pop()}</span>'}));" />
        </div>
      </div>
    </div>`,
    )
    .join("");

  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

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

populate();
