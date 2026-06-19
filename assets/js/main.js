/* =========================================================
   PORTFOLIO — MAIN.JS (Dark side-nav edition)
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* ---------------------------------------------------------
     2. PROFILE IMAGE: hide <img> if src 404s, show placeholder
     --------------------------------------------------------- */
  ["profileImg", "aboutImg"].forEach(function (id) {
    const img = document.getElementById(id);
    if (!img) return;
    img.addEventListener("error", function () {
      img.style.display = "none";
    });
    img.addEventListener("load", function () {
      const placeholderId = id === "profileImg" ? "photoPlaceholder" : "aboutPlaceholder";
      const ph = document.getElementById(placeholderId);
      if (ph) ph.style.display = "none";
    });
    // Trigger check for already-cached 404
    if (img.complete && img.naturalWidth === 0) img.dispatchEvent(new Event("error"));
    if (img.complete && img.naturalWidth > 0)   img.dispatchEvent(new Event("load"));
  });

  /* ---------------------------------------------------------
     3. ACTIVE SIDE-NAV LINK ON SCROLL
     --------------------------------------------------------- */
  const sections   = document.querySelectorAll(".page-section[id]");
  const sideLinks  = document.querySelectorAll(".side-btn[data-section]");
  const mobileLinks= document.querySelectorAll(".mobile-link[data-section]");

  function updateActive() {
    let current = "";
    sections.forEach(function (sec) {
      if (window.pageYOffset >= sec.offsetTop - 160) {
        current = sec.id;
      }
    });
    [...sideLinks, ...mobileLinks].forEach(function (link) {
      link.classList.toggle("active", link.dataset.section === current);
    });
  }

  window.addEventListener("scroll", updateActive, { passive: true });
  updateActive();

  /* ---------------------------------------------------------
     4. MOBILE MENU
     --------------------------------------------------------- */
  const menuBtn    = document.getElementById("mobileMenuBtn");
  const drawer     = document.getElementById("mobileDrawer");

  if (menuBtn && drawer) {
    menuBtn.addEventListener("click", function () {
      drawer.classList.toggle("open");
    });

    mobileLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        drawer.classList.remove("open");
      });
    });
  }

  /* ---------------------------------------------------------
     5. FADE-IN ON SCROLL
     --------------------------------------------------------- */
  const fadeEls = document.querySelectorAll(".fade-in");
  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  fadeEls.forEach(function (el) { observer.observe(el); });

  /* ---------------------------------------------------------
     6. CONTACT FORM
     --------------------------------------------------------- */
  const form       = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!form.checkValidity()) { form.classList.add("was-validated"); return; }

      const submitBtn = form.querySelector('button[type="submit"]');
      submitBtn.disabled = true;
      formStatus.innerHTML =
        '<span style="color:var(--text-muted);"><i class="bi bi-arrow-repeat me-1"></i>Sending…</span>';

      fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { "Accept": "application/json" }
      })
        .then(function (response) {
          if (response.ok) {
            formStatus.innerHTML =
              '<span style="color:var(--green-bright);"><i class="bi bi-check-circle-fill me-1"></i>' +
              'Message sent! I\'ll get back to you soon.</span>';
            form.reset();
            form.classList.remove("was-validated");
          } else {
            return response.json().then(function (data) {
              throw new Error((data && data.error) || "Submission failed");
            });
          }
        })
        .catch(function () {
          formStatus.innerHTML =
            '<span style="color:#e57373;"><i class="bi bi-exclamation-circle-fill me-1"></i>' +
            'Something went wrong. Please email me directly at abieramae13@gmail.com.</span>';
        })
        .finally(function () {
          submitBtn.disabled = false;
        });
    });
  }

  /* ---------------------------------------------------------
     7. FOOTER YEAR
     --------------------------------------------------------- */
  const yr = document.getElementById("footer-year");
  if (yr) yr.textContent = new Date().getFullYear();

});
