 const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
});

const links = document.querySelectorAll(".nav-links a");

links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});