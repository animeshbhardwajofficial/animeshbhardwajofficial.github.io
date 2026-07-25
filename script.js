// Mobile Menu

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {

    menuBtn.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("active");

        menuBtn.setAttribute("aria-expanded", isOpen ? "true" : "false");

    });

    // Close mobile menu after clicking a link

    navLinks.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            menuBtn.setAttribute("aria-expanded", "false");

        });

    });

}

// Sticky Navbar

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 40) {

        navbar.classList.add("sticky");

    } else {

        navbar.classList.remove("sticky");

    }

});

// Scroll Reveal

const sections = document.querySelectorAll("section");

function reveal() {

    sections.forEach(section => {

        const top = section.getBoundingClientRect().top;

        if (top < window.innerHeight - 120) {

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();

// Scroll To Top Button

const scrollBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        scrollBtn.style.display = "block";

    } else {

        scrollBtn.style.display = "none";

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// Active Navigation Highlight

const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navItems.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});
