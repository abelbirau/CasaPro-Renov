const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");
const navLinks = document.querySelectorAll(".main-nav a");

const currentYear = document.getElementById("currentYear");

const quoteForm = document.getElementById("quoteForm");
const formMessage = document.querySelector(".form-message");


/* =========================
   AN AUTOMAT FOOTER
========================= */

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}


/* =========================
   MENIU MOBIL
========================= */

if (navToggle && mainNav) {

  navToggle.addEventListener("click", () => {

    const isOpen = mainNav.classList.toggle("is-open");

    navToggle.classList.toggle("is-open", isOpen);

    navToggle.setAttribute(
      "aria-expanded",
      String(isOpen)
    );

  });


  /* Închide meniul după click pe un link */

  navLinks.forEach((link) => {

    link.addEventListener("click", () => {

      mainNav.classList.remove("is-open");

      navToggle.classList.remove("is-open");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });


  /* Închide meniul cu ESC */

  document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

      mainNav.classList.remove("is-open");

      navToggle.classList.remove("is-open");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  /* Închide meniul dacă utilizatorul apasă în afara lui */

  document.addEventListener("click", (event) => {

    const clickedInsideNav =
      mainNav.contains(event.target);

    const clickedToggle =
      navToggle.contains(event.target);

    if (
      mainNav.classList.contains("is-open") &&
      !clickedInsideNav &&
      !clickedToggle
    ) {

      mainNav.classList.remove("is-open");

      navToggle.classList.remove("is-open");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });


  /* Resetare meniu când revenim pe desktop */

  window.addEventListener("resize", () => {

    if (window.innerWidth > 760) {

      mainNav.classList.remove("is-open");

      navToggle.classList.remove("is-open");

      navToggle.setAttribute(
        "aria-expanded",
        "false"
      );

    }

  });

}


/* =========================
   FORMULAR DEMONSTRATIV
========================= */

if (quoteForm) {

  quoteForm.addEventListener("submit", (event) => {

    event.preventDefault();

    if (formMessage) {

      formMessage.textContent =
        "Formular demonstrativ pentru proiectul de portofoliu.";

    }

    quoteForm.reset();

  });


  /* Șterge mesajul vechi când utilizatorul începe alt formular */

  quoteForm.addEventListener("input", () => {

    if (formMessage) {
      formMessage.textContent = "";
    }

  });

}