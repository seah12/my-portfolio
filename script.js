
/* =========================================
   SHAINE'S PERSONAL PORTFOLIO
   JavaScript Functionality
========================================= */

// 1. MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        const isOpen = navLinks.classList.toggle("show");

        menuToggle.setAttribute("aria-expanded", isOpen);
        menuToggle.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );

    });

    // Close menu after clicking a navigation link

    document.querySelectorAll(".nav-links a").forEach((link) => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        });

    });

    // Close menu when clicking outside

    document.addEventListener("click", (event) => {

        if (
            !menuToggle.contains(event.target) &&
            !navLinks.contains(event.target)
        ) {

            navLinks.classList.remove("show");

            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.setAttribute(
                "aria-label",
                "Open navigation menu"
            );

        }

    });

}

// 2. AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// 3. CONTACT FORM

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        const formMessage = document.getElementById("formMessage");

        // IMPORTANT: Replace with your actual email address
        const portfolioEmail = "YOUR-EMAIL@example.com";

        if (!name || !email || !message) {

            formMessage.textContent =
                "Please complete all fields before submitting.";

            return;

        }

        if (portfolioEmail === "YOUR-EMAIL@example.com") {

            formMessage.textContent =
                "Please add your actual email address in script.js first.";

            return;

        }

        const subject = encodeURIComponent(
            "Portfolio Website Inquiry"
        );

        const body = encodeURIComponent(
            `Hello Shaine,\n\n` +
            `Name: ${name}\n` +
            `Email: ${email}\n\n` +
            `Message:\n${message}`
        );

        formMessage.textContent =
            "Opening your email application...";

        window.location.href =
            `mailto:${portfolioEmail}?subject=${subject}&body=${body}`;

    });

}
