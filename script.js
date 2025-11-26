// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const nav = document.getElementById("nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuBtn.classList.toggle("open");
  });
}

// Active link on scroll
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("active");
        }
      });
    }
  });
}

window.addEventListener("scroll", onScroll);

// Footer year
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Demo contact form behaviour
// Contact form using EmailJS
emailjs.init("xk6tLkWQbfqQC6vk_"); // <-- paste your Public Key

const contactForm = document.getElementById("contact-form");
const statusMsg = document.getElementById("status");

contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  statusMsg.textContent = "Sending...";
  statusMsg.style.color = "#38bdf8";

  emailjs
    .send("service_rkjcm3m", "template_e9mje5m", {
      from_name: contactForm.from_name.value,
      from_email: contactForm.from_email.value,
      message: contactForm.message.value,
    })
    .then(() => {
      statusMsg.textContent = "Message sent successfully!";
      statusMsg.style.color = "#22c55e";
      contactForm.reset();
    })
    .catch((err) => {
      console.error(err);
      statusMsg.textContent = "Failed to send message. Try again!";
      statusMsg.style.color = "#ef4444";
    });
});

