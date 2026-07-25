// Smooth scroll is handled via CSS (html { scroll-behavior: smooth })
// This keeps the JS minimal, matching the reference site's simplicity.

// Optional: highlight nav link for the section in view
const sections = document.querySelectorAll(".section, .hero");
const navLinks = document.querySelectorAll(".nav-links a");

function highlightNav() {
  let current = "";
  sections.forEach(section => {
    const top = section.offsetTop - 120;
    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.style.color = "";
    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#fff";
    }
  });
}

window.addEventListener("scroll", highlightNav);
highlightNav();
