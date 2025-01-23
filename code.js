document.addEventListener("DOMContentLoaded", () => {
    // Dropdown Menu
    document.querySelectorAll(".dropdown").forEach(dropdown => {
        dropdown.addEventListener("mouseenter", () => {
            dropdown.querySelector(".dropdown-menu").classList.add("show");
        });
        dropdown.addEventListener("mouseleave", () => {
            dropdown.querySelector(".dropdown-menu").classList.remove("show");
        });
    });

    // Mobile Navigation Toggle
    const navToggle = document.querySelector(".nav-toggle");
    const navLinks = document.querySelector(".nav-links");
    navToggle.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Dynamic Footer Year
    document.getElementById("year").textContent = new Date().getFullYear();

    // Contact Form Validation
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", e => {
            e.preventDefault();
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();

            if (!name || !email) {
                alert("Please complete all fields.");
                return;
            }

            if (!/^\S+@\S+\.\S+$/.test(email)) {
                alert("Enter a valid email address.");
                return;
            }

            alert("Thank you! Your message has been sent.");
            contactForm.reset();
        });
    }
});

